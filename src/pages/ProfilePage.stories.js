import ProfilePage from './ProfilePage';
export default {
  title: 'Pages/ProfilePage',
  component: ProfilePage,
};

const Template = args => <ProfilePage {...args} />;

export const Default = Template.bind({});
Default.args = {};
