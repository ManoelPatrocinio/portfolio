"use client";

import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
const links = [
  {
    name: "início",
    path: "/",
  },
  {
    name: "serviços",
    path: "/servicos",
  },
  {
    name: "resumo",
    path: "/resumo",
  },
  {
    name: "portfolio",
    path: "/work",
  },
  {
    name: "contato",
    path: "/contact",
  },
];
const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>

      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-28 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Manoel<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        <nav className="flex flex-col gap-8  justify-center items-center">
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.path}
                className={`${
                  link.path === pathname &&
                  " text-accent border-b-2 border-accent"
                } text-xl capitalize font-medium hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
