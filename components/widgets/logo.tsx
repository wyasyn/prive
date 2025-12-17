import Link from "next/link";
import { Button } from "../ui/button";

export const Logo = ({ name = "Walum." }) => (
  <Link href="/" aria-label="Home" title="Yasin Walum">
    <Button
      variant={"ghost"}
      size={"lg"}
      className={"cursor-pointer text-foreground text-lg"}
    >
      {name}
    </Button>
  </Link>
);
