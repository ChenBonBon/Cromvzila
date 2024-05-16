import { ProjectCardProps } from "~/routes/my-projects";

export default function OddCard(props: ProjectCardProps) {
  return (
    <div class="flex">
      <img src={props.image} alt={props.image} />
      <div class="flex flex-col">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
