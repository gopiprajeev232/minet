import { ComponentStory } from "@storybook/react";
import Image from ".";

export default {
    component: Image,
    title: 'Organisms/Image'
}

const Template: ComponentStory<typeof Image> = (args) => <Image />;

export const Story = Template.bind({})