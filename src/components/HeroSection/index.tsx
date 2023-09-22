import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <div className="px-4">
      <h1 className="text-zinc-950 dark:text-zinc-50 text-3xl py-4 font-extrabold leading-tight tracking-tight">
        Imagine um lugar pacífico <br />
        (e com café...) 
      </h1>
      <p className="text-zinc-900 dark:text-zinc-300 my-3">
        Imagine um lugar feito especialmente para você, desenvolvedor,<br /> onde você
        será acolhido e poderá contribuir na comunidade... <b>Bem-vindo ao forDevs!</b>
      </p>
      <Button variant="defaultViolet" asChild >
        <Link to="/app">Iniciar jornada!</Link>
        </Button>
    </div>
  );
}
