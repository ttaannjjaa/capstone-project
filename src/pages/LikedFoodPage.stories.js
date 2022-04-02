import LikedFoodPage from './LikedFoodPage.js';
export default {
  title: 'Pages/LikedFoodPage',
  component: LikedFoodPage,
};

const Template = args => <LikedFoodPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  storageData: [
    {
      foodRating: 'liked',
      foodName: 'purrpurr',
      foodTaste: 'chicken',
      foodStyle: 'jelly',
      selectedDate: '2022-03-22',
    },
    {
      foodRating: 'disliked',
      foodName: 'superschmacko',
      foodTaste: 'salmon',
      foodStyle: 'ragu',
      selectedDate: '2022-03-21',
    },
  ],
};
