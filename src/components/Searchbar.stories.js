import Searchbar from './Searchbar';
export default {
  title: 'Components/Searchbar',
  component: Searchbar,
};

const Template = args => <Searchbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 'katzlecker',
};
