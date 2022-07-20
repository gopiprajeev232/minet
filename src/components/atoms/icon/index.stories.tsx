import { ComponentStory } from "@storybook/react";
import Icon from ".";

export default {
    component: Icon,
    title: 'Organisms/Icon'
}

const Template: ComponentStory<typeof Icon> = (args) => <Icon />;

export const Story = Template.bind({})