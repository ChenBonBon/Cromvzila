import { clientOnly } from "@solidjs/start";
import { For, Show, createSignal } from "solid-js";
import Back from "../back";
import Mask from "../mask";
import Detail from "./detail";
import Project2 from "./project2";
import Project3 from "./project3";

const MainLayout = clientOnly(() => import("../../layouts/main"));

const projects = [
  {
    src: "/images/my-projects/my-project-1.webp",
    images: [
      "/images/my-projects/my-project-1/1.webp",
      "/images/my-projects/my-project-1/2.webp",
      "/images/my-projects/my-project-1/3.webp",
      "/images/my-projects/my-project-1/4.webp",
      "/images/my-projects/my-project-1/5.webp",
      "/images/my-projects/my-project-1/6.webp",
    ],
    position: {
      x: 8,
      y: 28,
    },
  },
  {
    src: "/images/my-projects/my-project-2.webp",
    child: <Project2 />,
    position: {
      x: 26,
      y: 25,
    },
  },
  {
    src: "/images/my-projects/my-project-3.webp",
    child: <Project3 />,
    position: {
      x: 40,
      y: 23,
    },
  },
  {
    src: "/images/my-projects/my-project-4.webp",
    images: [
      "/images/my-projects/my-project-4/1.webp",
      "/images/my-projects/my-project-4/2.webp",
      "/images/my-projects/my-project-4/3.webp",
    ],
    position: {
      x: 62,
      y: 25,
    },
  },
  {
    src: "/images/my-projects/my-project-5.webp",
    images: ["/images/my-projects/my-project-5/1.webp"],
    position: {
      x: 82,
      y: 28,
    },
  },
];

export default function Backend() {
  const [maskVisible, setMaskVisible] = createSignal(false);
  const [selectedProject, setSelectedProject] = createSignal<number>(-1);

  function showProject(index: number) {
    setSelectedProject(index);
    setMaskVisible(true);
  }

  function hideProject() {
    setMaskVisible(false);
    setSelectedProject(-1);
  }

  return (
    <MainLayout backgroundImage="/images/my-projects/backend.webp">
      <For each={projects}>
        {(project, index) => (
          <img
            src={project.src}
            alt={project.src}
            class="absolute h-[15%] cursor-pointer"
            style={{
              top: project.position.y + "%",
              left: project.position.x + "%",
            }}
            onClick={() => showProject(index())}
          />
        )}
      </For>
      <Show when={selectedProject() > -1}>
        <Detail
          images={projects[selectedProject()].images}
          child={projects[selectedProject()].child}
          onClose={hideProject}
        />
      </Show>
      <Show when={maskVisible()}>
        <Mask />
      </Show>
      <Back
        backgroundImage="/images/my-projects/back.webp"
        className="absolute bottom-0 right-0 w-[5%] hover:w-[8%] transition-all duration-300 ease-linear"
      />
    </MainLayout>
  );
}
