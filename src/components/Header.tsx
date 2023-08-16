import "../styles/global.styles.css"
export default function Header() {
  return (
    <header>
      <nav className="p-4 bg-zinc-950 w-full min-h-fit border-b border-zinc-900 flex items-center">
        <div>
          <div className="flex flex-row">
            <div>
              <p className="text-zinc-200/80 hover:text-violet-200">ForDevs</p>
            </div>
            <div>

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
