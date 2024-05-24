interface RECProps {
  onClick?: () => void;
}

export default function REC(props: RECProps) {
  return (
    <img
      src="/images/my-folio/rec.gif"
      alt="/images/my-folio/rec.gif"
      class="absolute top-[1%] left-[1%] h-[5%]"
      onClick={props.onClick}
    />
  );
}
