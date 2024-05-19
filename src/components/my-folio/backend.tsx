import { clientOnly } from "@solidjs/start";
import { For, Show, createSignal, onMount } from "solid-js";
import randomImages from "~/utils/random-images";
import Back from "../back";
import Mask from "../mask";
import Detail from "./detail";
import Folio from "./folio";
import REC from "./rec";
import Rules from "./rules";

const MainLayout = clientOnly(() => import("../../layouts/main"));

const positions = [
  {
    x: 0,
    y: 15,
  },
  {
    x: 25,
    y: 0,
  },
  {
    x: 50,
    y: 5,
  },
  {
    x: 75,
    y: 0,
  },
  {
    x: 10,
    y: 45,
  },
  {
    x: 30,
    y: 55,
  },
  {
    x: 50,
    y: 45,
  },
  {
    x: 75,
    y: 40,
  },
];

export default function Backend() {
  const [rulesVisible, setRulesVisible] = createSignal(true);
  const [maskVisible, setMaskVisible] = createSignal(false);
  const [images, setImages] = createSignal<string[]>([]);
  const [selectedFolio, setSelectedFolio] = createSignal<null | string>(null);

  function hideRules() {
    setRulesVisible(false);
  }

  function showFolio(image: string) {
    setSelectedFolio(image);
    setMaskVisible(true);
  }

  function hideFolio() {
    setMaskVisible(false);
    setSelectedFolio(null);
  }

  onMount(() => {
    setTimeout(() => {
      if (rulesVisible()) {
        hideRules();
      }
    }, 7000);

    setImages(randomImages(8));
  });

  return (
    <MainLayout backgroundImage="/images/my-folio/backend.webp">
      <REC />
      <Show when={rulesVisible()}>
        <Rules onClick={hideRules} />
      </Show>
      <For each={images()}>
        {(image, index) => (
          <Folio
            image={image}
            position={positions[index()]}
            onClick={() => showFolio(image)}
          />
        )}
      </For>
      <Show when={selectedFolio()}>
        <Detail image={selectedFolio()} onClose={hideFolio} />
      </Show>
      <Show when={maskVisible()}>
        <Mask onClick={hideFolio} showBack />
      </Show>
      <Back
        backgroundImage="/images/my-folio/back.webp"
        className="absolute bottom-[2%] right-[1%] w-[8%]"
      />
    </MainLayout>
  );
}
