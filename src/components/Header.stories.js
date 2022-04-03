import Header from './Header.js';

export default {
  title: 'Components/Header',
  component: Header,
};

const Template = args => <Header {...args} />;

export const HeaderCatInfoPage = Template.bind({});
HeaderCatInfoPage.args = {
  variant: 'catinfopage',
  children: 'CAT BREEDS',
};

export const HeaderDisLikedFoodPage = Template.bind({});
HeaderDisLikedFoodPage.args = {
  variant: 'dislikedfoodpage',
  children: 'NOT MY TASTE',
};

export const HeaderFormPage = Template.bind({});
HeaderFormPage.args = {
  variant: 'formpage',
  children: 'CAT FOOD RATING',
};

export const HeaderLikedFoodPage = Template.bind({});
HeaderLikedFoodPage.args = {
  variant: 'likedfoodpage',
  children: 'WHAT I LIKE TO EAT',
};

export const HeaderProfilePage = Template.bind({});
HeaderProfilePage.args = {
  variant: 'profilepage',
  children: 'CAT PROFILE',
};
