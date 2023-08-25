interface Props {
  text: string;
  onclick?: () => void;
}

export default function Button(props: Props) {
  return (
    <button
      className="bg-violet-300 text-violet-900 h-10 rounded-full px-4 py-1 hover:bg-violet-400 transition-all delay-200"
      onClick={props.onclick}
    >
      {props.text}
    </button>
  );
}
