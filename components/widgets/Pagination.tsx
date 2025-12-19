import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  basePath,
}: PaginationProps) {
  return (
    <div className="flex justify-center gap-4">
      {Array.from({ length: totalPages }).map((_, i) => {
        const page = i + 1;
        return (
          <Link
            key={page}
            href={`${basePath}?page=${page}`}
            className={`px-4 py-2 rounded border ${
              page === currentPage
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            {page}
          </Link>
        );
      })}
    </div>
  );
}
