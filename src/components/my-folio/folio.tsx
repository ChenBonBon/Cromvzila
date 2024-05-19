interface FolioProps {
  image: string;
  position: {
    x: number;
    y: number;
  };
  onClick?: () => void;
}

export default function Folio(props: FolioProps) {
  return (
    <img
      src={props.image}
      alt={props.image}
      class="absolute w-1/5 cursor-pointer"
      style={{
        top: props.position.y + "%",
        left: props.position.x + "%",
      }}
      onClick={props.onClick}
    />
  );
}
