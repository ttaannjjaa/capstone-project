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
    foodJudge: 'liked',
    foodName: 'schnurrkatz',
    foodTaste: 'Huhn',
    foodStyle: 'Gelee',
  },
};
