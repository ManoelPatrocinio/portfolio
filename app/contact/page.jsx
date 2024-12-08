"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Textarea } from "@/components/ui/textarea";

const info = [
  {
    label: "Contato",
    icon: <FaPhoneAlt />,
    value: "(+55) 7498819-3405",
  },
  {
    label: "Email",
    icon: <FaEnvelope />,
    value: "manoelpatrocinio99@gmail.com",
  },
  {
    label: "Endereço",
    icon: <FaMapMarkedAlt />,
    value: "Ilhéus, BA",
  },
];
const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Entre em contato</h3>
              <p className="text-white/60">
              Se você tiver alguma ideia de projeto, precisar de ajuda com uma tecnologia específica ou apenas quiser se conectar, não hesite em entrar em contato.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="firstname"
                  placeholder="Nome"
                />
                <Input
                  type="lastname"
                  placeholder="Sobrenome"
                />
                <Input
                  type="email"
                  placeholder="Email"
                />
                <Input
                  type="phone"
                  placeholder="WhatsApp"
                />
              </div>
              <Select placeholder="Preferred Contact Method" className="w-full">
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um serviço" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="criacao">Criação de sites</SelectItem>
                    <SelectItem value="design">Design de sites </SelectItem>
                    <SelectItem value="suporte">Suporte e Manutenção</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className="h-[200px]"
                placeholder="Deixe mais informações aqui"
              />
              <Button
                size="md"
                className="max-w-40 py-2 px-2 mx-auto xl:mx-0 text-wrap"
              >
                Enviar mensagem
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[53px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-xl flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.label}</p>
                    <h3 className="text-xl">{item.value}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
