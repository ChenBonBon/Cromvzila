import { A } from "@solidjs/router";

interface BackProps {
  className?: string;
}

export default function Back(props: BackProps) {
  return (
    <A href="/" class={props.className}>
      <div>Back</div>
    </A>
  );
}
