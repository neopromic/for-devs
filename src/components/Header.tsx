import "../styles/global.styles.css"
export default function Header() {
  return (
    <header>
      <nav className="p-4 bg-zinc-950 w-full min-h-fit border-b border-zinc-900 flex items-center">
        <div className="w-full">
          <div className="flex justify-between w-full items-center">
            <div>
              <p className="text-zinc-300">ForDevs</p>
            </div>
            <div>
              <button className="px-3 bg-violet-500 text-sm text-violet-50 rounded-md">Iniciar jornada</button>
            </div>
          </div>
          <div className="flex gap-1">
            <button className="outlinedCardButton">Relevantes</button>
            <button className="outlinedCardButton">Recentes</button>
          </div>
        </div>
      </nav>
    </header>
  );
}
