import { Card } from ".";

export default {
  title: "Components/Card",
  component: Card,

  argTypes: {
    property1: {
      options: ["clicked"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "clicked",
    className: {},
    divClassName: {},
    divClassNameOverride: {},
    vector: "/img/vector-1.svg",
  },
};
