import { ComponentStory } from "@storybook/react";
import Watchlist from ".";

export default {
    component: Watchlist,
    title: 'Organisms/Watchlist'
}

const Template: ComponentStory<typeof Watchlist> = (args) => <Watchlist />;

export const Story = Template.bind({})