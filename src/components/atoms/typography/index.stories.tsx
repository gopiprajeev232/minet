import { ComponentStory } from "@storybook/react";
import Typography from ".";

export default {
    component: Typography,
    title: 'Organisms/Typography'
}

const Template: ComponentStory<typeof Typography> = (args) => <Typography />;

export const Story = Template.bind({})