import { ComponentStory } from "@storybook/react";
import Footer from ".";

export default {
    component: Footer,
    title: 'Organisms/Footer'
}

const Template: ComponentStory<typeof Footer> = (args) => <Footer />;

export const Story = Template.bind({})