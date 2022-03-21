import ExitButton from './ExitButton';
export default {
  title: 'Components/ExitButton',
  component: ExitButton,
};

const Template = args => <ExitButton {...args} />;

export const Default = Template.bind({});
Default.args = {};
