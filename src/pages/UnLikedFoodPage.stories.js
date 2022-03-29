import UnLikedFoodPage from './UnLikedFoodPage';
export default {
  title: 'Pages/UnLikedFoodPage',
  component: UnLikedFoodPage,
};

const Template = args => <UnLikedFoodPage {...args} />;

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
      foodRating: 'unliked',
      foodName: 'catmax',
      foodTaste: 'salmon',
      foodStyle: 'ragu',
      selectedDate: '2022-03-22',
    },
  ],
};
