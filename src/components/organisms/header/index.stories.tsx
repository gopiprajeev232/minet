import { ComponentStory } from "@storybook/react";
import Header from ".";

export default {
    component: Header,
    title: 'Organisms/Header'
}

const Template: ComponentStory<typeof Header> = (args) => <Header />;

export const Story = Template.bind({})