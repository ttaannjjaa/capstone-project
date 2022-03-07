import UnLikedFoodPage from './UnLikedFoodPage'
  export default {
      title: 'UnLikedFoodPage',
      component: UnLikedFoodPage
  }
        
  const Template = args => <UnLikedFoodPage {...args} />
    
  export const Default = Template.bind({})
  Default.args = {}
            