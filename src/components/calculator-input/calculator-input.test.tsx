import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { CalculatorInput, mapStateToProps, mapDispatchToProps } from './calculator-input'
import { changeInputText } from '../../ducks/calculator/actions'

describe('Calculator input', () => {
  describe('When mounted', () => {
    let component: ShallowWrapper

    beforeAll(() => {
      component = shallow(<CalculatorInput inputText="Hello world!" changeInputText={() => null} />)
    })

    it('Renders correctly', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('mapStateToProps', () => {
    describe('When called with mock state', () => {
      it('Maps to props correctly', () => {
        expect(mapStateToProps({
          calculator: {
            inputText: 'Hello world!'
          }
        })).toEqual({
          inputText: 'Hello world!'
        })
      })
    })
  })

  describe('mapDispatchToProps', () => {
    describe('When called with mock actions', () => {
      it('Maps to props correctly', () => {
        const mockDispatch = jest.fn()
        mapDispatchToProps(mockDispatch).changeInputText('Hello world!')

        expect(mockDispatch).toHaveBeenCalledWith(changeInputText('Hello world!'))
      })
    })
  })
})
