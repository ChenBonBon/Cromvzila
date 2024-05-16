import { A } from "@solidjs/router";
import { JSX } from "solid-js";

interface NavCardProps {
  href: string;
  children?: JSX.Element;
  className?: string;
}

export default function NavCard(props: NavCardProps) {
  return (
    <A href={props.href}>
      <div class={props.className}>{props.children}</div>
    </A>
  );
}
