import FormPage from './FormPage.js';
export default {
  title: 'Pages/FormPage',
  component: FormPage,
};

const Template = args => <FormPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  formData: {
    foodJudge: true,
    foodName: 'schnurrkatz',
    foodTaste: 'Huhn',
    foodStyle: 'Gelee',
  },
};
