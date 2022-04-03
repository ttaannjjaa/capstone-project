import {render, screen} from '@testing-library/react'
  import ButtonText from './ButtonText'
    
  describe('ButtonText', () => {
      it('renders', () => {
          render(<ButtonText />)
          expect(screen.getByText('ButtonText')).toBeInTheDocument()
      })
  })
            