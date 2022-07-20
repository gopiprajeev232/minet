import { ComponentStory } from "@storybook/react";
import PortfolioValue from ".";

export default {
    component: PortfolioValue,
    title: 'Organisms/PortfolioValue'
}

const Template: ComponentStory<typeof PortfolioValue> = (args) => <PortfolioValue />;

export const Story = Template.bind({})