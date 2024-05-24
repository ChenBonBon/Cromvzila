import { A } from "@solidjs/router";
import { createSignal, onMount } from "solid-js";

interface EasterEggProps {
  onClose?: () => void;
}

export default function EasterEgg(props: EasterEggProps) {
  const [zimiIndex, setZimiIndex] = createSignal(0);

  onMount(() => {
    setZimiIndex(Math.ceil(Math.random() * 6));
  });

  return (
    <div class="absolute top-0 left-0 w-full h-full bg-white z-40">
      <img
        src="/images/easter-egg/lights.gif"
        alt="/images/easter-egg/lights.gif"
      />
      <img
        src={`/images/easter-egg/zimi-${zimiIndex()}.gif`}
        alt={`/images/easter-egg/zimi-${zimiIndex()}.gif`}
        class="absolute top-1/4 left-1/2 h-1/5 -translate-x-1/2"
      />
      <img
        src="/images/easter-egg/author.webp"
        alt="/images/easter-egg/author.webp"
        class="absolute bottom-[40%] left-[3%] w-2/5"
      />
      <img
        src="/images/easter-egg/zimiao.webp"
        alt="/images/easter-egg/zimiao.webp"
        class="absolute bottom-[15%] left-[3%] h-[15%]"
      />
      <A href="https://www.instagram.com/cromvzilala" target="_blank">
        <img
          src="/images/easter-egg/ig.webp"
          alt="/images/easter-egg/ig.webp"
          class="absolute bottom-[27%] left-[14%] h-[6%]"
        />
      </A>
      <A href="https://www.tiktok.com/@cromvzila" target="_blank">
        <img
          src="/images/easter-egg/tiktok.webp"
          alt="/images/easter-egg/tiktok.webp"
          class="absolute bottom-[15%] left-[14%] h-[6%]"
        />
      </A>
      <img
        src="/images/easter-egg/zimi.webp"
        alt="/images/easter-egg/zimi.webp"
        class="absolute bottom-[15%] left-[33%] h-1/5"
      />
      <A
        href="mailto:cromvzila@gmail.com"
        class="absolute bottom-[30%] left-[40%] text-xs"
      >
        cromvzila@gmail.com
      </A>
      <img
        src="/images/easter-egg/grass.webp"
        alt="/images/easter-egg/grass.webp"
        class="absolute bottom-[20%] left-[55%] h-[10%]"
      />
      <img
        src="/images/easter-egg/jiojio.webp"
        alt="/images/easter-egg/jiojio.webp"
        class="absolute bottom-[20%] left-[65%] h-[10%]"
      />
      <img
        src="/images/easter-egg/coding.webp"
        alt="/images/easter-egg/coding.webp"
        class="absolute bottom-[15%] left-[53%] h-[3%]"
      />
      <img
        src="/images/easter-egg/2024.webp"
        alt="/images/easter-egg/2024.webp"
        class="absolute bottom-[15%] left-[81%] h-[3%]"
      />
      <img
        src="/images/easter-egg/back.webp"
        alt="/images/easter-egg/back.webp"
        class="absolute bottom-0 right-0 h-1/5 cursor-pointer"
        onClick={props.onClose}
      />
    </div>
  );
}
