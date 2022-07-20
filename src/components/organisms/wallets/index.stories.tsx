import { ComponentStory } from "@storybook/react";
import Wallets from ".";

export default {
    component: Wallets,
    title: 'Organisms/Wallets'
}

const Template: ComponentStory<typeof Wallets> = (args) => <Wallets />;

export const Story = Template.bind({})