import Header from "@/components/ui/Header";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, LucideSparkles } from "lucide-react";
// import { useContext } from "react";
import { Link } from "react-router-dom";
// import { AuthContext } from "@/utils/api/auth/authContextApi/index";

export function Apresentation() {
  return (
    <>
      <Header />
      <div className="px-6 py-4 lg:px-12 flex flex-col ">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
          Conecte-se com desenvolvedores.
        </h1>
        <p className="text-muted-foreground max-w-3xl sm:text-xl text-lg leading-relaxed my-3">
          Explore o For-Devs: Seu refúgio de colaboração e comunidade para
          desenvolvedores.
        </p>
        <div className="flex gap-3">
          <Link className="block" to="/login">
            <Button className="gap-1">
              <LucideSparkles size={16} /> Get Started
            </Button>
          </Link>
          <a href="https://github.com/neopromic/for-devs" target="_blank">
            <Button variant={"outline"} size={"icon"}>
              <Github />
            </Button>
          </a>
        </div>
        <div className="w-full h-80 border rounded my-4 flex">
          <div className="rounded bg-violet-500/5 h-full w-full p-6 flex flex-col items-center justify-center">
            <h2 className="font-bold text-xl lg:text-3xl tracking-tighter leading-tight">
              Colabore!
            </h2>
            <p className="text-muted-foreground text-center leading-relaxed ">
              O ForDevs visa criar uma comunidade acolhedora para
              desenvolvedores, promovendo colaboração, aprendizado e inovação.
            </p>
          </div>
          <Separator orientation="vertical" />
          <div className="rounded bg-violet-500/5 h-full w-full p-6 flex flex-col items-center justify-center">
            <h2 className="font-bold text-xl lg:text-3xl tracking-tighter leading-tight">
              Heading
            </h2>
            <p className="text-muted-foreground text-center leading-relaxed ">
              Paragraph
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
