import React from "react";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}) => {
  const alignment =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <header className={`mb-12 ${className}`}>
      <div className={`flex flex-col ${alignment}`}>
        {eyebrow && (
          <p className="text-primary font-medium mb-3 tracking-wide text-sm uppercase">
            {eyebrow}
          </p>
        )}

        <h1 className="text-5xl font-display mb-4 max-w-xl">{title}</h1>

        {description && (
          <p className="max-w-xl text-base leading-relaxed">{description}</p>
        )}
      </div>
    </header>
  );
};
