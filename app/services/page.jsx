"use client";

import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    num: 1,
    title: "Criação de sites",
    description:
      "Tenha um site eficiente, famoso no Google e que conte sua história de forma envolvente e converta visitantes em clientes.",
    href: "",
  },
  {
    num: 2,
    title: "Design de sites",
    description:
      "Transformo ideias, serviços ou necessidades do seu negocio, em um site de visual profissional e atraente, que destaca e cativa seu público-alvo instantaneamente.",
    href: "",
  },
  {
    num: 3,
    title: "Suporte e Manutenção",
    description:
      "Cuido dos bastidores para que você possa se concentrar no que realmente importa: o crescimento do seu negócio.",
    href: "",
  },
  {
    num: 4,
    title: "SEO",
    description:
      "Deixo seu site eficiente, famoso no Google e fácil de ser achado.",
    href: "",
  },
];
const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((services, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {services.num}.
                  </div>
                  <Link
                    href={services.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight  className=" text-primary text-3xl"/>
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {services.title}
                </h2>
                <p className="text-white/60">{services.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
