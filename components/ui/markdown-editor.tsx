"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import { Button } from "@/components/ui/button";
import {
  IconBold,
  IconItalic,
  IconUnderline,
  IconStrikethrough,
  IconList,
  IconListNumbers,
  IconCode,
  IconLink,
  IconPhoto,
  IconH1,
  IconH2,
  IconH3,
  IconAlignLeft,
  IconAlignCenter,
  IconAlignRight,
} from "@tabler/icons-react";

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

// Convert HTML to Markdown
const htmlToMarkdown = (html: string): string => {
  let markdown = html;

  // Headings
  markdown = markdown.replace(/<h1>(.*?)<\/h1>/g, "# $1\n\n");
  markdown = markdown.replace(/<h2>(.*?)<\/h2>/g, "## $1\n\n");
  markdown = markdown.replace(/<h3>(.*?)<\/h3>/g, "### $1\n\n");

  // Bold
  markdown = markdown.replace(/<strong>(.*?)<\/strong>/g, "**$1**");
  markdown = markdown.replace(/<b>(.*?)<\/b>/g, "**$1**");

  // Italic
  markdown = markdown.replace(/<em>(.*?)<\/em>/g, "*$1*");
  markdown = markdown.replace(/<i>(.*?)<\/i>/g, "*$1*");

  // Underline (markdown doesn't have native underline, use HTML)
  markdown = markdown.replace(/<u>(.*?)<\/u>/g, "<u>$1</u>");

  // Strikethrough
  markdown = markdown.replace(/<s>(.*?)<\/s>/g, "~~$1~~");
  markdown = markdown.replace(/<del>(.*?)<\/del>/g, "~~$1~~");
  markdown = markdown.replace(/<strike>(.*?)<\/strike>/g, "~~$1~~");

  // Links
  markdown = markdown.replace(/<a href="(.*?)".*?>(.*?)<\/a>/g, "[$2]($1)");

  // Images
  markdown = markdown.replace(/<img src="(.*?)".*?>/g, "![]($1)");

  // Code blocks
  markdown = markdown.replace(
    /<pre><code>(.*?)<\/code><\/pre>/gs,
    "```\n$1\n```\n\n"
  );

  // Inline code
  markdown = markdown.replace(/<code>(.*?)<\/code>/g, "`$1`");

  // Lists
  markdown = markdown.replace(/<ul>(.*?)<\/ul>/gs, (match, content) => {
    return content.replace(/<li>(.*?)<\/li>/g, "- $1\n") + "\n";
  });

  markdown = markdown.replace(/<ol>(.*?)<\/ol>/gs, (match, content) => {
    let index = 1;
    return content.replace(/<li>(.*?)<\/li>/g, () => `${index++}. $1\n`) + "\n";
  });

  // Paragraphs
  markdown = markdown.replace(/<p>(.*?)<\/p>/g, "$1\n\n");

  // Line breaks
  markdown = markdown.replace(/<br\s*\/?>/g, "\n");

  // Clean up extra newlines
  markdown = markdown.replace(/\n{3,}/g, "\n\n");
  markdown = markdown.trim();

  return markdown;
};

// Convert Markdown to HTML for TipTap
const markdownToHtml = (markdown: string): string => {
  let html = markdown;

  // Escape HTML first
  const tempDiv = document.createElement("div");
  tempDiv.textContent = html;
  html = tempDiv.innerHTML;

  // Headings
  html = html.replace(/^### (.*$)/gm, "<h3>$1</h3>");
  html = html.replace(/^## (.*$)/gm, "<h2>$1</h2>");
  html = html.replace(/^# (.*$)/gm, "<h1>$1</h1>");

  // Bold
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

  // Italic
  html = html.replace(/\*(.*?)\*/g, "<em>$1</em>");

  // Strikethrough
  html = html.replace(/~~(.*?)~~/g, "<s>$1</s>");

  // Links
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');

  // Images
  html = html.replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1">');

  // Code blocks
  html = html.replace(/```(.*?)```/gs, "<pre><code>$1</code></pre>");

  // Inline code
  html = html.replace(/`(.*?)`/g, "<code>$1</code>");

  // Unordered lists
  html = html.replace(/^- (.*$)/gm, "<li>$1</li>");
  html = html.replace(/(<li>.*<\/li>)/s, "<ul>$1</ul>");

  // Ordered lists
  html = html.replace(/^\d+\. (.*$)/gm, "<li>$1</li>");

  // Paragraphs
  html = html.replace(/^(?!<[huo]|<li|```)(.*$)/gm, "<p>$1</p>");

  return html;
};

const MenuBar = ({
  editor,
}: {
  editor: ReturnType<typeof useEditor> | null;
}) => {
  if (!editor) {
    return null;
  }

  const addLink = (): void => {
    const url = window.prompt("Enter URL:");
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  };

  const addImage = (): void => {
    const url = window.prompt("Enter image URL:");
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  return (
    <div className=" flex flex-wrap gap-1 border-b p-2 bg-muted/30">
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive("heading", { level: 1 }) ? "bg-accent" : ""}
      >
        <IconH1 className="h-4 w-4" />
      </Button>

      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive("heading", { level: 2 }) ? "bg-accent" : ""}
      >
        <IconH2 className="h-4 w-4" />
      </Button>

      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive("heading", { level: 3 }) ? "bg-accent" : ""}
      >
        <IconH3 className="h-4 w-4" />
      </Button>

      <div className="w-px h-6 bg-border mx-1" />

      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "bg-accent" : ""}
      >
        <IconBold className="h-4 w-4" />
      </Button>

      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "bg-accent" : ""}
      >
        <IconItalic className="h-4 w-4" />
      </Button>

      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={editor.isActive("underline") ? "bg-accent" : ""}
      >
        <IconUnderline className="h-4 w-4" />
      </Button>

      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive("strike") ? "bg-accent" : ""}
      >
        <IconStrikethrough className="h-4 w-4" />
      </Button>

      <div className="w-px h-6 bg-border mx-1" />

      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive("bulletList") ? "bg-accent" : ""}
      >
        <IconList className="h-4 w-4" />
      </Button>

      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive("orderedList") ? "bg-accent" : ""}
      >
        <IconListNumbers className="h-4 w-4" />
      </Button>

      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive("codeBlock") ? "bg-accent" : ""}
      >
        <IconCode className="h-4 w-4" />
      </Button>

      <div className="w-px h-6 bg-border mx-1" />

      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        className={editor.isActive({ textAlign: "left" }) ? "bg-accent" : ""}
      >
        <IconAlignLeft className="h-4 w-4" />
      </Button>

      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        className={editor.isActive({ textAlign: "center" }) ? "bg-accent" : ""}
      >
        <IconAlignCenter className="h-4 w-4" />
      </Button>

      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        className={editor.isActive({ textAlign: "right" }) ? "bg-accent" : ""}
      >
        <IconAlignRight className="h-4 w-4" />
      </Button>

      <div className="w-px h-6 bg-border mx-1" />

      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={addLink}
        className={editor.isActive("link") ? "bg-accent" : ""}
      >
        <IconLink className="h-4 w-4" />
      </Button>

      <Button type="button" variant="ghost" size="sm" onClick={addImage}>
        <IconPhoto className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default function MarkdownEditor({
  value,
  onChange,
  placeholder,
}: MarkdownEditorProps) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Underline,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: "text-primary underline",
        },
      }),
      Image.configure({
        HTMLAttributes: {
          class: "max-w-full h-auto rounded-lg",
        },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: markdownToHtml(value),
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      const markdown = htmlToMarkdown(html);
      onChange(markdown);
    },
    editorProps: {
      attributes: {
        class:
          "prose prose-sm focus:outline-none min-h-[300px] max-w-none p-4 prose-neutral prose-headings:text-foreground prose-p:text-sm prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:my-2 prose-a:text-primary prose-strong:text-foreground prose-code:text-foreground prose-pre:bg-muted prose-img:rounded-xl prose-headings:my-2 prose-ul:my-2 prose-ol:my-2 prose-li:my-0",
      },
    },
  });

  return (
    <div className="border rounded-lg overflow-hidden bg-background/30">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} placeholder={placeholder} />
    </div>
  );
}
