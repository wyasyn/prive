"use client";

import { useMounted } from "@/hooks/useMount";
import { ReactNode } from "react";

export function ClientOnly({ children }: { children: ReactNode }) {
  const mounted = useMounted();
  if (!mounted) return null;
  return <>{children}</>;
}
