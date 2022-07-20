import { ComponentStory } from "@storybook/react";
import PrimaryCard from ".";

export default {
    component: PrimaryCard,
    title: 'Organisms/PrimaryCard'
}

const Template: ComponentStory<typeof PrimaryCard> = (args) => <PrimaryCard />;

export const Story = Template.bind({})