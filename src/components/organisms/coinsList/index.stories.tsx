import { ComponentStory } from "@storybook/react";
import CoinsList from ".";

export default {
    component: CoinsList,
    title: 'Organisms/CoinsList'
}

const Template: ComponentStory<typeof CoinsList> = (args) => <CoinsList />;

export const Story = Template.bind({})