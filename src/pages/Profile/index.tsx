import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Profile() {
  const names = ["neopromic"];
  return (
    <>
      <div className="w-full h-screen overflow-y-clip">
        <header className="dark:bg-zinc-900 flex items-center sticky p-4 border border-b-border">
          <div className="flex flex-1 items-center">
            <Button variant={"link"} size={"icon"} asChild>
              <Link to={"/"}>
                <ArrowLeft />
              </Link>
            </Button>
            <h1 className="text-xl font-medium">Perfil</h1>
          </div>
          <div className="">
            <ModeToggle />
          </div>
        </header>
        <main className="w-full h-full p-4">
          <div className="max-w-lg m-auto border border-border p-8 rounded-md">
            <div><span>Informações do usuário</span>
            <Separator className="my-4" />
            <span>
              <b>Nome:</b> {names}{" "}
            </span>
            </div>
            <Separator className="my-4"/>
          <div className="">
            <Button>Editar perfil</Button>
          </div>
          </div>
        </main>
      </div>
    </>
  );
}
