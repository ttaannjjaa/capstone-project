import Card from './Card.js';

export default {
  title: 'Components/Card',
  component: Card,
};

const Template = args => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  foodName: 'schnurrkatz',
  foodTaste: 'Huhn',
  foodStyle: 'Gelee',
  foodJudge: 'liked',
};
