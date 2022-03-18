import SortButtonStyled from './SortButtonStyled.js';
export default {
  title: 'Components/SortButton',
  component: SortButtonStyled,
};

const Template = args => <SortButtonStyled {...args} />;

export const Default = Template.bind({});
Default.args = {};
