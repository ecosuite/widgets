import { WidgetPopout } from "~/components/Popout";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof WidgetPopout> = {
  component: WidgetPopout,
};

export default meta;
type Story = StoryObj<typeof WidgetPopout>;

export const Basic: Story = {
  args: {},
};
