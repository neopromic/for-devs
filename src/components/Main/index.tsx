import Button from "../Button";
import PostCard from "../PostCard";


export default function Main() {
  return (
    <div className="px-4">
      <h1 className="text-zinc-50 text-3xl font-extrabold leading-tight tracking-tight">
        Imagine um lugar pacífico (e com café...)
      </h1>
      <p className="text-zinc-300 my-3">
        Imagine um lugar feito especialmente para você, desenvolvedor, onde você
        será acolhido e poderá contribuir na comunidade (
        <b>tem café e muito código</b>)... Legal, né? Ah, mas esse lugar existe
        e você o encontrou!
      </p>
      <Button text="Iniciar jornada!" onclick={() => window.location.href = "/login"} />
      <section className="mt-3 flex flex-col gap-y-3">
        <h3 className="text-zinc-200">Postagens recentes</h3>

        <PostCard
          postTime="1 minuto"
          postTitle="Iniciando no React..."
          username="neopromic"
        />
        <PostCard
          postTime="1 minuto"
          postTitle="Iniciando no React..."
          username="neopromic"
        />
        
      </section>
      <section className="mt-3 flex flex-col gap-y-3">
        <h3 className="text-zinc-200">Postagens relevantes</h3>

        <PostCard
          postTime="1 minuto"
          postTitle="Criar componentes no React"
          postDescription="Opa! Quer aprender sobre props e como criar componentes no React? Bom..."
          username="neopromic"
        />
        <PostCard
          postTime="1 minuto"
          postTitle="Iniciando no React..."
          username="neopromic"
        />
        
      </section>
    </div>
  );
}
