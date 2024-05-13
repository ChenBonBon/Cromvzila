import { A } from "@solidjs/router";
import { JSX } from "solid-js";

interface NavCardProps {
  href: string;
  children?: JSX.Element;
  className?: string;
}

export default function NavCard(props: NavCardProps) {
  const { href, children, className } = props;

  return (
    <A href={href}>
      <div class={className}>{children}</div>
    </A>
  );
}
