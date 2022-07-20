import { ComponentStory } from "@storybook/react";
import Chip from ".";

export default {
    component: Chip,
    title: 'Organisms/Chip'
}

const Template: ComponentStory<typeof Chip> = (args) => <Chip />;

export const Story = Template.bind({})