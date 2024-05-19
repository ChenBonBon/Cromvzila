import { A } from "@solidjs/router";

interface BackProps {
  backgroundImage: string;
  className?: string;
}

export default function Back(props: BackProps) {
  return (
    <A href="/" class={props.className}>
      <img src={props.backgroundImage} alt={props.backgroundImage} />
    </A>
  );
}
