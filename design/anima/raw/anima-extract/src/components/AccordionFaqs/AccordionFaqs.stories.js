import { AccordionFaqs } from ".";

export default {
  title: "Components/AccordionFaqs",
  component: AccordionFaqs,

  argTypes: {
    version: {
      options: ["abierto"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    version: "abierto",
    className: {},
    vector: "/img/vector.svg",
    text: "How fast can I start working with a marketing specialist?",
    text1:
      "We typically match you with candidates within 48 hours, and you can start working with them in as little as one week.",
  },
};
