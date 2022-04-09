import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Board } from '@/components/Board/Board';

// @see https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/Board',
    component: Board,
} as ComponentMeta<typeof Board>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Board> = (args) => <Board {...args} />;

export const Primary = Template.bind({});
const primaryData = {
    winner:'',
    player:'O',
    boards: Array(12).fill(null),
    handlePlayClick: () => null,
    handleResetClick: () => null,
    renderStatus: () => <h3>次のプレイヤー</h3>,
}
Primary.args = {
    ...primaryData
}
export const setAllCircles = Template.bind({});
setAllCircles.args = {
    winner:'',
    player:'O',
    boards: Array(9).fill('O'),
    handlePlayClick: () => null,
    handleResetClick: () => null,
    renderStatus: () => <h3>次のプレイヤー</h3>,
};

export const setAllCrosses = Template.bind({});
setAllCrosses.args = {
    winner:'',
    player:'O',
    boards: Array(9).fill('×'),
    handlePlayClick: () => null,
    handleResetClick: () => null,
    renderStatus: () => <h3>次のプレイヤー</h3>,
};
