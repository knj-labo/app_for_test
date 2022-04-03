import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Board } from '@/components/Board/Board';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/Board',
    component: Board,
} as ComponentMeta<typeof Board>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Board> = (args) => <Board {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    winner:'',
    player:'O',
    boards: Array(9).fill(null),
    handlePlayClick: () => null,
    handleResetClick: () => null,
    renderStatus: () => <h3>次のプレイヤー</h3>,
};
