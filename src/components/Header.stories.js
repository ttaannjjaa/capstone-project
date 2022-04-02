import Header from './Header.js';

export default {
  title: 'Components/Header',
  component: Header,
};

const Template = args => <Header {...args} />;

export const CatInfoPage = Template.bind({});
CatInfoPage.args = {
  children: 'children',
  variant: 'catinfopage',
};

export const DisLikedFoodPage = Template.bind({});
CatInfoPage.args = {
  children: 'children',
  variant: 'dislikedfoodpage',
};

export const FormPage = Template.bind({});
CatInfoPage.args = {
  children: 'children',
  variant: 'formpage',
};

export const LikedFoodPage = Template.bind({});
CatInfoPage.args = {
  children: 'children',
  variant: 'likedfoodpage',
};

export const ProfileFoodPage = Template.bind({});
CatInfoPage.args = {
  children: 'children',
  variant: 'profilepage',
};
