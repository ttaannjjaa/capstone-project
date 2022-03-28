import CatInfoPage from './CatInfoPage.js';
export default {
  title: 'Pages/CatInfoPage',
  component: CatInfoPage,
};

const Template = args => <CatInfoPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
