import { nanoid } from 'nanoid';
import Form from './Form.js';
export default {
  title: 'Components/Form',
  component: Form,
};

const Template = args => <Form {...args} />;

export const Default = Template.bind();
Default.args = {
  formData: {
    id: nanoid(),
    foodRating: 'liked',
    foodName: 'purrcat',
    foodTaste: 'chicken',
    foodStyle: 'jelly',
    selectedDate: '2022-03-24',
  },
  editData: {
    foodRating: 'disliked',
    foodName: 'meowmeow',
    foodTaste: 'beef',
    foodStyle: 'sauce',
    selectedDate: '2022-03-28',
  },
};
