import Link from "next/link";
import Image from "next/image";

export const Logo = () => (
  <Link href="/" aria-label="Home" title="Yasin Walum">
    <Image
      src={"/favicon-32x32.png"}
      alt="Yasin Walum Logo"
      width={32}
      height={32}
    />
  </Link>
);
