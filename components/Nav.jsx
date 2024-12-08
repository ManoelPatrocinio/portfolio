"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Início",
    path: "/",
  },
  {
    name: "serviços",
    path: "/services",
  },
  {
    name: "resumo",
    path: "/resume",
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
const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.path}
            className={`${
              link.path === pathname && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
