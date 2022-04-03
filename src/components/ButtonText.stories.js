import ButtonText from './ButtonText';
export default {
  title: 'Components/ButtonText',
  component: ButtonText,
};

const Template = args => <ButtonText {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const LandingPageButton = Template.bind({});
LandingPageButton.args = {
  variant: 'landingpagebutton',
  children: 'CAT FOOD RATING',
  children2: 'CAT FOOD LIKED',
  children3: 'CAT FOOD DISLIKED',
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
  children2: 'flavour',
  children3: 'preparation',
  children4: 'date',
  children5: 'entry',
};
