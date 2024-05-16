import { A } from "@solidjs/router";

interface BackProps {
  className?: string;
}

export default function Back(props: BackProps) {
  return (
    <A href="/" class={props.className}>
      <img src="/images/back.webp" alt="/images/back.webp" />
    </A>
  );
}
