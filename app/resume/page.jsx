"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaPython,
  FaAngular,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "Contato",
  description:
    "Principais formas de entrar em contato, se quiser falar sobre uma ideia ou papear",
  info: [
    {
      fieldName: "Nome",
      fieldValue: "Manoel Patrocínio",
    },
    {
      fieldName: "Celular",
      fieldValue: "(+55) 7498819-3405",
    },
    {
      fieldName: "E-mail",
      fieldValue: "manoelpatrocinio99@gmail.com",
    },
    {
      fieldName: "LinkedIn",
      fieldValue: "Manoel Patrocínio",
    },
    {
      fieldName: "GitHub",
      fieldValue: "ManoelPatrocino",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Experiências",
  description:
    "Algumas das minhas principais experiências profissionais",
  items: [
    {
      company: "X-Testing",
      position: "Programador RPA Júnior",
      duration: "Janneiro 2025 - Atual",
    },{
      company: "X-Testing",
      position: "Programador RPA Estagiário ",
      duration: "Julho 2024 - Dezembro 2024",
    },
    {
      company: "Confidencial",
      position: "Programador Front-End Freelancer",
      duration: "Junho 2023 - Agosto 2023",
    },
    {
      company: "IFBA - Campus Irecê",
      position: "Programador Full Stack Estagiário",
      duration: "Março 2022 - Julho 2022",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "Formação",
  description:
    "Minhas principais formações com certificado até o momento",
  items: [
    {
      institution: "CEPEDI, UESC, SOFTEX",
      degree: "Programa de residência em Software - TIC 18",
      duration: "Agosto 2023 - Dezembro 2024",
    },
    {
      institution: "Digital Innovation One",
      degree: "Bootcamp Eduzz Full Stack Developer",
      duration: "Fevereiro 2022 - Abril 2022",
    },
    {
      institution: "IFBA - Campus Irecê",
      degree: "Tecnólogo em Analise e Desenvolvimento de Sistemas",
      duration: "Maio 2018 - Junho 2025",
    },
    
  ],
};

const skills = {
  title: "My Skills",
  description:
    "As principais tecnologias que eu uso no meu dia a dia",
  skillsList: [
    {
      icon: <FaHtml5 />,
      skillName: "HTML5",
    },
    {
      icon: <FaCss3 />,
      skillName: "CSS3",
    },
    {
      icon: <FaJs />,
      skillName: "JavaScript",
    },
    {
      icon: <FaReact />,
      skillName: "React",
    },
    {
      icon: <SiNextdotjs />,
      skillName: "Next.js",
    },
    {
      icon: <FaNodeJs />,
      skillName: "Node.js",
    },
    {
      icon: <FaPython />,
      skillName: "Python",
    },
    {
      icon: <FaAngular />,
      skillName: "Angular",
    },
    {
      icon: <SiTailwindcss />,
      skillName: "Tailwind CSS",
    },
    {
      icon: <FaFigma />,
      skillName: "Figma",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="Experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="Experience">Experiência</TabsTrigger>
            <TabsTrigger value="Education">Formação</TabsTrigger>
            <TabsTrigger value="Skills">Skills</TabsTrigger>
            <TabsTrigger value="About">Contatos</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="Experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {" "}
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="Education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {" "}
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="Skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] ">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] ">
                    {skills.skillsList.map((item, index) => (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center">
                              <div className="text-6xl hover:text-accent transition-all duration-300">
                                {item.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize ">{item.skillName}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="About" className="w-full h-full">
              <div className="flex flex-col gap-[30px] ">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {about.description}
                  </p>
                </div>
                  <ul className="grid grid-cols-1 xl:grid-cols-2  gap-y-2  ">
                    {about.info.map((item, index) => (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-sm ">{item.fieldValue}</span>
                      </li>
                    ))}
                  </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
