interface DetailProps {
  image: string | null;
  onClose?: () => void;
}

export default function Detail(props: DetailProps) {
  if (props.image === null) {
    return null;
  }

  return (
    <img
      src={props.image}
      alt={props.image}
      class="absolute top-1/2 left-1/2 h-full -translate-x-1/2 -translate-y-1/2 z-40"
    />
  );
}
