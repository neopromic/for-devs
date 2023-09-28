import { Link, useNavigate } from "react-router-dom";
import { ModeToggle } from "../ModeToggle";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../dropdown-menu";
import { Button } from "../button";
import { Menu, User, UserPlusIcon } from "lucide-react";

export default function Header() {
  const navigateTo = useNavigate();
  return (
    <header className="sticky bg-white dark:bg-zinc-950 h-20 border-b flex items-center gap-2 px-6 inset-x-0 top-0 bg-opacity-60 backdrop-blur-lg backdrop-filter py-4 z-50">
      <div className="flex gap-3 flex-1">
        <Link to="/app">
          <img
            src="/assets/favicon.ico"
            className="w-6 h-6 bg-cover rounded-full"
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
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2" onClick={() => navigateTo("/login")}><UserPlusIcon size={16}/> Login</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
