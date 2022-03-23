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
      foodJudge: 'liked',
      foodName: 'schnurrkatz',
      foodTaste: 'Huhn',
      foodStyle: 'Gelee',
      selectedDate: '2022-03-22',
    },
    {
      foodJudge: 'unliked',
      foodName: 'katzlecker',
      foodTaste: 'Lachs',
      foodStyle: 'Ragout',
      selectedDate: '2022-03-22',
    },
  ],
};
