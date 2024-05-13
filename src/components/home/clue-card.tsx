interface ClueCardProps {
  onClick?: () => void;
}

export default function ClueCard(props: ClueCardProps) {
  const { onClick } = props;

  return (
    <div
      class="absolute bottom-10 right-1/2 w-20 h-40 bg-purple-500 cursor-pointer"
      onClick={onClick}
    >
      Self description
    </div>
  );
}
