import { ComponentStory } from "@storybook/react";
import Dropdown from ".";

export default {
    component: Dropdown,
    title: 'Organisms/Dropdown'
}

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown />;

export const Story = Template.bind({})