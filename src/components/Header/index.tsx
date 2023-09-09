import { Link, useNavigate } from "react-router-dom";
import { ModeToggle } from "../ModeToggle";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Menu, User } from "lucide-react";

export default function Header() {
  const navigateTo = useNavigate();
  return (
    <header className="sticky bg-white dark:bg-zinc-950 flex items-center gap-2 px-4 inset-x-0 top-0 bg-opacity-60 backdrop-blur-lg backdrop-filter py-4 z-50">
      <div className="flex gap-3 flex-1">
        <Link to="/">
          <img
            src="/assets/logo.png"
            className="w-6 h-6 rounded-full"
            alt="ForDevs"
          />
        </Link>
        <p>ForDevs</p>
      </div>
      <div className="flex gap-2">
        <ModeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant={"outline"} size={"icon"}><Menu size={24} /></Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Usuário</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2" onClick={() => navigateTo("/profile")}><User size={16}/> Perfil</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
