import Button from "../Button";

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
      <Button
        text="Iniciar jornada!"
        onclick={() => (window.location.href = "/login")}
      />
      <p>
        
      </p>
    </div>
  );
}
