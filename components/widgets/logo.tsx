import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

export const Logo = () => (
  <Link href="/" aria-label="Home" title="Yasin Walum">
    <Button variant={"ghost"} size={"lg"} className={"gap-1 items-center"}>
      <Image
        src={"/favicon-32x32.png"}
        alt="Yasin Walum Logo"
        width={32}
        height={32}
      />
      <span className="text-foreground text-lg font-medium max-[400px]:hidden">
        Walum
      </span>
    </Button>
  </Link>
);
