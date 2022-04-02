import DisLikedFoodPage from './DisLikedFoodPage.js';
export default {
  title: 'Pages/DisLikedFoodPage',
  component: DisLikedFoodPage,
};

const Template = args => <DisLikedFoodPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  storageData: [
    {
      foodRating: 'liked',
      foodName: 'purrcat',
      foodTaste: 'chicken',
      foodStyle: 'jelly',
      selectedDate: '2022-03-22',
    },
    {
      foodRating: 'disliked',
      foodName: 'catmax',
      foodTaste: 'salmon',
      foodStyle: 'ragu',
      selectedDate: '2022-03-22',
    },
  ],
};
