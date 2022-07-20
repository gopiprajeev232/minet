import { ComponentStory } from "@storybook/react";
import WatchlistCard from ".";

export default {
    component: WatchlistCard,
    title: 'Organisms/WatchlistCard'
}

const Template: ComponentStory<typeof WatchlistCard> = (args) => <WatchlistCard />;

export const Story = Template.bind({})