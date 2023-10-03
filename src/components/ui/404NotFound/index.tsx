import { Github } from "lucide-react";
import { Button } from "../button";
import { Separator } from "../separator";
import { Link } from "react-router-dom";

export default function NotFound() {
  function redirect() {
    window.location.href = "https://github.com/neopromic/for-devs/issues/new";
  }
  return (
    <>
      <div className="flex items-center justify-center w-full h-screen p-6">
        <div className="border rounded max-w-[750px] p-6">
          <h1 className="text-3xl font-bold tracking-tight lg:leading-[1.1]">
            Página não encontrada...
          </h1>
          <p className="text-muted-foreground my-4">
            Ops! Parece que você tentou acessar uma página que não existe. Aqui
            estão algumas sugestões para resolver:
          </p>
          <ol type="1">
            <li>
              <b>Verifique a URL: </b>
              <span className="text-muted-foreground">
                Certifique-se de que a URL está correta e tente novamente.
              </span>
            </li>
            <li>
              <b>Navegação no site: </b>
              <span className="text-muted-foreground">
                Volte à página inicial e navegue pelos links ou utilize a barra
                de busca para encontrar o que procura.
              </span>
            </li>
            <li>
              <b>Contate-nos: </b>
              <span className="text-muted-foreground">
                Se você acredita que isso é um problema ou encontrou este erro
                de outra forma, sinta-se à vontade para abrir uma issue no nosso
                repositório GitHub.
              </span>
            </li>
          </ol>
          <Separator className="mb-4" />
          <div className="flex gap-3 justify-between">
            <Button onClick={() => redirect()} className="gap-1" size={"default"} variant={"outline"}>
              <Github size={16} />
              Abrir issue
            </Button>
            <Link to="/">
              <Button>Voltar para a tela inicial</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
