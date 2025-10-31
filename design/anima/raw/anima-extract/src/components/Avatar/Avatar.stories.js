import { Avatar } from ".";

export default {
  title: "Components/Avatar",
  component: Avatar,

  argTypes: {
    size: {
      options: ["lg", "xl"],
      control: { type: "select" },
    },
    state: {
      options: ["default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "lg",
    placeholder: true,
    text: true,
    statusIcon: true,
    state: "default",
    className: {},
  },
};
