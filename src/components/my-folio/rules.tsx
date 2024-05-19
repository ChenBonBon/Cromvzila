interface RulesProps {
  onClick?: () => void;
}

export default function Rules(props: RulesProps) {
  return (
    <img
      src="/images/my-folio/rules.webp"
      alt="/images/my-folio/rules.webp"
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
      onClick={props.onClick}
    />
  );
}
