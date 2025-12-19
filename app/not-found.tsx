import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="grid min-h-screen place-items-center">
      <div className="flex items-center justify-center flex-col gap-2">
        <h2 className="text-2xl">Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/">
          <Button variant={"outline"}>Return Home</Button>
        </Link>
      </div>
    </div>
  );
}
