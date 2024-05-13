import { ProjectCardProps } from "~/routes/my-projects";

export default function EvenCard(props: ProjectCardProps) {
  const { image, title, description } = props;

  return (
    <div class="flex">
      <div class="flex flex-col">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <img src={image} alt={image} />
    </div>
  );
}
