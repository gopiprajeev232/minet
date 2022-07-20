import { ComponentStory } from "@storybook/react";
import Tabs from ".";

export default {
    component: Tabs,
    title: 'Organisms/Tabs'
}

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs />;

export const Story = Template.bind({})