interface Props {
  postTime: string;
  postTitle: string;
  postDescription?: string;
  username: string;
}
export default function PostCard(props: Props) {
  return (
    <>
      <section className="min-w-screen m-4 inset-x-1 h-fit flex justify-start items-start flex-col border border-zinc-900 hover:bg-zinc-800 rounded shadow-md p-3 transition-all delay-300 cursor-pointer">
        <div>
          {/* Conteúdo header do card */}
          <div className="text-zinc-700">Há {props.postTime} atrás</div>
        </div>
        <div className="prose prose-headings:text-zinc-50">
          {/* Conteúdo main do card */}
          <h3>{props.postTitle}</h3>
          <p className=" text-zinc-300">{props.postDescription}</p>
        </div>
        <div className="flex gap-1 items-start border border-zinc-700 hover:bg-zinc-700 hover:text-zinc-300 px-2 rounded-full transition-all w-fit">
          {/* Conteúdo "footer" */}

          <span> {props.username} </span>
        </div>
      </section>
    </>
  );
}
