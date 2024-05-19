export default function randomImages(count: number): string[] {
  const images = new Array(count).fill(0);
  const generated = new Set();

  for (let i = 0; i < count; i++) {
    const { prefix, ext, length } = getBucket();
    let num = Math.ceil(Math.random() * length);

    while (generated.has(`${prefix}${num}${ext}`)) {
      num = Math.ceil(Math.random() * length);
    }

    generated.add(`${prefix}${num}${ext}`);
    images[i] = `/images/${prefix}${num}${ext}`;
  }

  return images;
}

function getBucket() {
  const randomNumber = Math.ceil(Math.random() * 100);

  if (randomNumber < 95) {
    return { prefix: "animals/animal-", ext: ".webp", length: 108 };
  } else {
    const randomNumber = Math.ceil(Math.random() * 100);
    if (randomNumber < 50) {
      return { prefix: "no-animals/no-animal-", ext: ".webp", length: 24 };
    } else {
      return { prefix: "no-animal-gifs/no-animal-", ext: ".gif", length: 11 };
    }
  }
}
