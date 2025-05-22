"use client";

import Image from "next/image";
import Link from "next/link";


export const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image src="/logo21.svg" width={120} height={120} alt="logo" ></Image>
    </Link>
  );
};