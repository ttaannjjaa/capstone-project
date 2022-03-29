import ModalDelete from './ModalDelete';
export default {
  title: 'Components/ModalDelete',
  component: ModalDelete,
};

const Template = args => <ModalDelete {...args} />;

export const Default = Template.bind({});
Default.args = {
  visible: true,
};
