import Header from './Header.js';

export default {
  title: 'Components/Header',
  component: Header,
};

const Template = args => <Header {...args} />;

export const HeaderCatInfoPage = Template.bind({});
HeaderCatInfoPage.args = {
  variant: 'catinfopage',
  children: 'catinfopage',
};

export const HeaderDisLikedFoodPage = Template.bind({});
HeaderDisLikedFoodPage.args = {
  variant: 'dislikedfoodpage',
  children: 'dislikedfoodpage',
};

export const HeaderFormPage = Template.bind({});
HeaderFormPage.args = {
  variant: 'formpage',
  children: 'formpage',
};

export const HeaderLikedFoodPage = Template.bind({});
HeaderLikedFoodPage.args = {
  variant: 'likedfoodpage',
  children: 'likedfoodpage',
};

export const HeaderProfilePage = Template.bind({});
HeaderProfilePage.args = {
  variant: 'profilepage',
  children: 'profilepage',
};
