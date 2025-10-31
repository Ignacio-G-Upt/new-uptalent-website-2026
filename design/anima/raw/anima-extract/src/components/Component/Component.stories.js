import { Component } from ".";

export default {
  title: "Components/Component",
  component: Component,

  argTypes: {
    property1: {
      options: ["v-2"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "v-2",
    className: {},
    headingClassName: {},
    textClassName: {},
    text: "✅ No long-term commitment, total flexibility",
    buttonsBigTertiaryText: "Button CTA",
    text1: "Start Hourly",
    text2:
      "Test marketing talent risk-free on an hourly basis. Perfect for short-term projects or initial evaluations.",
  },
};
