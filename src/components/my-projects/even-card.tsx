import { ProjectCardProps } from "~/routes/my-projects";

export default function OddCard(props: ProjectCardProps) {
  const { image, title, description } = props;

  return (
    <div class="flex">
      <img src={image} alt={image} />
      <div class="flex flex-col">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
