import Post from "./Post";
import { NextUIProvider } from "@nextui-org/react"
export default function SectionWelcome() {
    return (
        <NextUIProvider>
        <section className="p-4">
        <h1 className="text-3xl font-extrabold tracking-tight">Bem-vindo ao ForDevs</h1>
        <h2 className="text-base text-zinc-300 tracking-tight">Um universo de possibilidades te espera...</h2>
        </section>       
        <Post title="Testando props" time="1 minuto" username="Wesley"/>
        <Post title="Opaaa! :D" time="3 dias" username="Wesley" description="essa é uma description."/>
        </NextUIProvider>
    )
}
