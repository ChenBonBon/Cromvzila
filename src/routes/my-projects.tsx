import { For, Match, Switch, createSignal } from "solid-js";
import Back from "~/components/back";
import EvenCard from "~/components/my-projects/even-card";
import OddCard from "~/components/my-projects/odd-card";

export interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
}

export default function MyProjects() {
  const [data, setData] = createSignal<ProjectCardProps[]>([
    {
      image: "https://picsum.photos/200/300",
      title: "Project 1",
      description: "Description",
    },
    {
      image: "https://picsum.photos/200/300",
      title: "Project 1",
      description: "Description",
    },
  ]);

  return (
    <div class="px-6 py-8">
      <Back />
      <h1 class="text-3xl py-6">My projects</h1>
      <div class="flex flex-col gap-6">
        <For each={data()}>
          {(project, i) => (
            <>
              <Switch>
                <Match when={i() % 2 === 0}>
                  <EvenCard {...project} />
                </Match>
              </Switch>
              <Switch>
                <Match when={i() % 2 === 1}>
                  <OddCard {...project} />
                </Match>
              </Switch>
            </>
          )}
        </For>
      </div>
    </div>
  );
}
