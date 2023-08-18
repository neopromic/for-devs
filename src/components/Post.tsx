import { NextUIProvider, User } from "@nextui-org/react";

type PostProps = {
  title: string;
  description?: string;
  time: string;
  username: string;
};
export default function Post(props: PostProps) {
  return (
    <NextUIProvider>
      <section className="p-4 m-4 border border-zinc-900 rounded-md delay-100  hover:bg-zinc-900/80">
        <div>
          <div className="">
            <span className="text-sm font-regular  text-violet-900 bg-violet-400 rounded-md px-3">
              Há {props.time} atrás
            </span>
          </div>
          <h1 className="font-medium text-xl">{props.title}</h1>
          <p className="leading-normal text-base text-zinc-400">
            {props.description}
          </p>
        </div>
        <div className="mt-3">
          <User
            name={props.username}
            avatarProps={{
              src: "https://github.com/neopromic.png",
            }}
            className="w-6 h-6"
          />
        </div>
      </section>
    </NextUIProvider>
  );
}
