import ScrollToTop from './ScrollToTop';
export default {
  title: 'Components/ScrollToTop',
  component: ScrollToTop,
};

const Template = args => <ScrollToTop {...args} />;

export const Default = Template.bind({});
Default.args = {
  noScrollToTopButton: false,
};
