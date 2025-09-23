"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtn";

const projects = [
  {
    num: "01",
    category: "FullStack",
    title: "Agro Familiar",
    description:
      "A plataforma web Agro Familiar foi criada com o objetivo de estabelecer uma ponte para aproximação entre o produtor e o consumidor final da sua região.",
    stack: [{ name: "React.js" }, { name: "Node.js" }, { name: "MongoDB" }],
    image: "/assets/work/Banner1.jpg",
    live: "https://agrofamiliar.vercel.app/",
    github: "https://github.com/ManoelPatrocinio/",
  },
  {
    num: "02",
    category: "FullStack",
    title: "Proeja Vivo",
    description:
      "Portal para divulgação do  conhecimento produzido sobre o PROEJA no IFBA campus Irecê.",
    stack: [{ name: "React.js" }, { name: "Node.js" },, { name: "PostgreSQL" }],
    image: "/assets/work/Banner3.jpg",
    live: "https://proeja-vivo.vercel.app/",
    github: "https://github.com/ManoelPatrocinio/",
  },
  {
    num: "03",
    category: "Frontend",
    title: "Easy Bank",
    description:
      "Landing Page responsiva para resolução de desafio do Front-end Mentor.",
    stack: [{ name: "Html5" }, { name: "Css3" }, { name: "JavaScript" }],
    image: "/assets/work/Banner2.jpg",
    live: "https://manoelpatrocinio.github.io/the_easy_bank/",
    github: "https://github.com/ManoelPatrocinio/the_easy_bank",
  },
  {
    num: "04",
    category: "FullStack",
    title: "Ignite Lab",
    description:
      "Plataforma do evento da Rocketseat, desenvolvida durante Ignite lab.",
    stack: [{ name: "React.js" }, { name: "TypeScript" }, { name: "Tailwind" }, { name: "Graphql" }],
    image: "/assets/work/Banner4.jpg",
    live: "https://github.com/ManoelPatrocinio/event_Platform",
    github: "https://github.com/ManoelPatrocinio/event_Platform",
  },
   {
    num: "05",
    category: "Design",
    title: "WS File",
    description:
      "SaaS (Software como Serviço) projetado para ajudar empresas a gerenciar, armazenar e compartilhar documentos de forma segura e eficiente.",
    stack: [{ name: "Figma" }, { name: "Next.js" }, { name: "Tailwind" }],
    image: "/assets/work/Banner5.jpg",
    live: "https://werioliveira.site/project/e306792a-2e85-4409-8774-b2520d2e759c",
    github: "https://github.com/ManoelPatrocinio/",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col  justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className=" flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w=[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((stack, index) => (
                  <li key={index} className="text-xl text-accent">
                    {stack.name} {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div
                className="flex items-center gap-4"
              >
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] bg-[#232329] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="capitalize ">Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] bg-[#232329] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="capitalize ">Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              className="xl:h-[520px] mb-12 relative"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                    <div className="relative w-full h-full rounded-md">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="object-cover rounded-md"
                        fill
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns 
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 w-full justify-between xl:w-max xl:justify-none z-10"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[36px] h-[36px] rounded flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
