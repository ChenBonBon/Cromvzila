import { JSX } from "solid-js";

interface BackendProps {
  children?: JSX.Element;
}

export default function Backend(props: BackendProps) {
  const { children } = props;

  return (
    <div class="relative overflow-hidden">
      <img src="/images/home-backend.png" alt="/images/home-backend.png" />
      {children}
    </div>
  );
}
