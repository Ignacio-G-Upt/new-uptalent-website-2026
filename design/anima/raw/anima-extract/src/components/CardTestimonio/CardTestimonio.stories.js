import { CardTestimonio } from ".";

export default {
  title: "Components/CardTestimonio",
  component: CardTestimonio,

  argTypes: {
    version: {
      options: ["v-3"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    version: "v-3",
    imagen: "/img/imagen.png",
    text: "Michael R.",
    text1: "E-commerce CEO",
    vector: "/img/vector-2.svg",
    img: "/img/vector-3.svg",
    vector1: "/img/vector-4.svg",
    vector2: "/img/vector-5.svg",
    vector3: "/img/vector-6.svg",
    text2:
      "“Uptalent provided us with a PPC expert who transformed our ad strategy in just weeks. Incredible results!”",
  },
};
