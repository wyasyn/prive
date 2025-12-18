-- Create users table with role-based access
create table if not exists public.users (
  id uuid primary key references auth.users(id) on delete cascade,
  email text unique not null,
  full_name text,
  avatar_url text,
  role text not null default 'viewer' check (role in ('admin', 'author', 'viewer')),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Create blogs table
create table if not exists public.blogs (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  short_description text not null,
  content text not null,
  cover_image text,
  author_id uuid references public.users(id) on delete set null,
  published boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Create projects table
create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  short_description text not null,
  content text not null,
  cover_image text,
  demo_url text,
  github_url text,
  tags text[],
  featured boolean default false,
  author_id uuid references public.users(id) on delete set null,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Enable RLS on all tables
alter table public.users enable row level security;
alter table public.blogs enable row level security;
alter table public.projects enable row level security;

-- Users policies: Anyone can view users, but only users can update themselves
create policy "users_select_all"
  on public.users for select
  using (true);

create policy "users_insert_own"
  on public.users for insert
  with check (auth.uid() = id);

create policy "users_update_own"
  on public.users for update
  using (auth.uid() = id);

-- Blogs policies: Public read, authenticated admin/author write
create policy "blogs_select_all"
  on public.blogs for select
  using (true);

create policy "blogs_insert_auth"
  on public.blogs for insert
  with check (
    exists (
      select 1 from public.users
      where users.id = auth.uid()
      and users.role in ('admin', 'author')
    )
  );

create policy "blogs_update_auth"
  on public.blogs for update
  using (
    exists (
      select 1 from public.users
      where users.id = auth.uid()
      and (users.role = 'admin' or (users.role = 'author' and blogs.author_id = users.id))
    )
  );

create policy "blogs_delete_auth"
  on public.blogs for delete
  using (
    exists (
      select 1 from public.users
      where users.id = auth.uid()
      and (users.role = 'admin' or (users.role = 'author' and blogs.author_id = users.id))
    )
  );

-- Projects policies: Public read, authenticated admin/author write
create policy "projects_select_all"
  on public.projects for select
  using (true);

create policy "projects_insert_auth"
  on public.projects for insert
  with check (
    exists (
      select 1 from public.users
      where users.id = auth.uid()
      and users.role in ('admin', 'author')
    )
  );

create policy "projects_update_auth"
  on public.projects for update
  using (
    exists (
      select 1 from public.users
      where users.id = auth.uid()
      and (users.role = 'admin' or (users.role = 'author' and projects.author_id = users.id))
    )
  );

create policy "projects_delete_auth"
  on public.projects for delete
  using (
    exists (
      select 1 from public.users
      where users.id = auth.uid()
      and (users.role = 'admin' or (users.role = 'author' and projects.author_id = users.id))
    )
  );

-- Create indexes for performance
create index if not exists blogs_author_id_idx on public.blogs(author_id);
create index if not exists blogs_slug_idx on public.blogs(slug);
create index if not exists blogs_created_at_idx on public.blogs(created_at desc);
create index if not exists projects_author_id_idx on public.projects(author_id);
create index if not exists projects_slug_idx on public.projects(slug);
create index if not exists projects_created_at_idx on public.projects(created_at desc);

-- Create function to auto-update updated_at
create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- Create triggers for updated_at
create trigger users_updated_at before update on public.users
  for each row execute function update_updated_at();

create trigger blogs_updated_at before update on public.blogs
  for each row execute function update_updated_at();

create trigger projects_updated_at before update on public.projects
  for each row execute function update_updated_at();
