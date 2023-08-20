export default function Header() {
  return (
    <header className="sticky bg-zinc-950 flex items-center gap-2 px-4 inset-x-0 top-0 bg-opacity-60 backdrop-blur-lg backdrop-filter py-4 z-50">
      <img
        src="/assets/logo.png"
        className="w-6 h-6 rounded-full"
        alt="ForDevs"
      />
      <p>ForDevs</p>
    </header>
  );
}
