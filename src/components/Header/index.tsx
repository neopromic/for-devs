import { Link } from "react-router-dom";
import { ModeToggle } from "../ModeToggle";

export default function Header() {
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
      <div>
        <ModeToggle />
      </div>
    </header>
  );
}
