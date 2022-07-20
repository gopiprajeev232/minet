import { ComponentStory } from "@storybook/react";
import Portfolio from ".";

export default {
    component: Portfolio,
    title: 'Organisms/Portfolio'
}

const Template: ComponentStory<typeof Portfolio> = (args) => <Portfolio />;

export const Story = Template.bind({})