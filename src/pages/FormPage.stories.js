import FormPage from './FormPage.js';
export default {
  title: 'Pages/FormPage',
  component: FormPage,
};

const Template = args => <FormPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  formData: {
    foodRating: 'liked',
    foodName: 'purrcat',
    foodTaste: 'chicken',
    foodStyle: 'jelly',
    selectedDate: '2022-03-24',
  },
};
