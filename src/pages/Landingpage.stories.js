import Landingpage from './Landingpage';
export default {
  title: 'Pages/Landingpage',
  component: Landingpage,
};

const Template = args => <Landingpage {...args} />;

export const Default = Template.bind({});
Default.args = {};
