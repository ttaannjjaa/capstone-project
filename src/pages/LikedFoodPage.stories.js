import LikedFoodPage from './LikedFoodPage.js';
export default {
  title: 'Pages/LikedFoodPage',
  component: LikedFoodPage,
};

const Template = args => <LikedFoodPage {...args} />;

export const Default = Template.bind({});
Default.args = {};