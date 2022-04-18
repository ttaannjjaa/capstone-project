import ButtonText from './ButtonTextStyles.js';

export default {
  title: 'Components/ButtonTextStyles',
  component: 'ButtonText',
};

const Template = args => <ButtonText {...args} />;

export const LandingPageButton1 = Template.bind({});
LandingPageButton1.args = {
  variant: 'landingpagebutton',
  children: 'CAT FOOD RATING',
};

export const ModalButton = Template.bind({});
ModalButton.args = {
  variant: 'modalbutton',
  children: 'No',
};

export const SaveButton = Template.bind({});
SaveButton.args = {
  variant: 'savebutton',
  children: 'SAVE',
};

export const SortButton = Template.bind({});
SortButton.args = {
  variant: 'sortbutton',
  children: 'name',
};
