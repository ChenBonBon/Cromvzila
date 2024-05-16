import { ProjectCardProps } from "~/routes/my-projects";

export default function EvenCard(props: ProjectCardProps) {
  return (
    <div class="flex">
      <div class="flex flex-col">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      <img src={props.image} alt={props.image} />
    </div>
  );
}
