/* eslint-disable react/no-unescaped-entities */
import { FiDownload } from "react-icons/fi";

// components 
import  Photo  from "@/components/Photo";
import  Socials  from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full ">
        <div className="flex flex-col xl:flex-row items-center justify-between xl: pt-8 xl:pb-10 ">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Olá, sou o <br /> <span className="text-accent">Manoel Patrocínio</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Transformo soluções, ideias e sonhos em realidade, através de sites que entregam exatamente o que você precisa. 
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                  
                >
                    <Link href="/assets/CV_ManoelPatrocinio.pdf" download="ManoelPatrocinioCV" target="_blank">Download CV</Link>
                    <FiDownload className="text-xl"/>
                </Button>
                <div className="mb-8 xl:mb-0">
                  <Socials containerStyles="flex gap-6" iconStyles=" w-9 h-9 border  border-accent rounded-full flex justify-center items-center text-center text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
                </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
          </div>
        </div>
      </div>
      <Stats/>
    </section>
  );
};

export default Home;