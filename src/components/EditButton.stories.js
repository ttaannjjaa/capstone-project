import EditButton from './EditButton.js';

export default {
  title: 'Components/EditButton',
  component: EditButton,
};

const Template = args => <EditButton {...args} />;

export const Default = Template.bind({});
Default.args = {};
