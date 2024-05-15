import clsx from "clsx";

interface MaskProps {
  className?: string;
  onClick?: () => void;
}

export default function Mask(props: MaskProps) {
  const { className, onClick } = props;

  return (
    <div
      class={clsx(
        "absolute top-0 left-0 w-full h-full bg-black opacity-50 z-30",
        className
      )}
      onClick={onClick}
    ></div>
  );
}
