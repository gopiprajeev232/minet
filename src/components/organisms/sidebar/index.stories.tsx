import { ComponentStory } from "@storybook/react";
import Sidebar from ".";

export default {
    component: Sidebar,
    title: 'Organisms/Sidebar'
}

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar />;

export const Story = Template.bind({})