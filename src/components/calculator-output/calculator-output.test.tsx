import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { CalculatorOutput, mapStateToProps } from './calculator-output'
import getResultForInputText from './formatter'

jest.mock('./formatter')

describe('Calculator output', () => {
  describe('When mounted', () => {
    let component: ShallowWrapper

    beforeAll(() => {
      component = shallow(<CalculatorOutput inputText="" />)
    })

    describe('With no input text', () => {
      beforeAll(() => {
        component.setProps({
          inputText: ''
        })
      })

      it('Renders correctly', () => {
        expect(component).toMatchSnapshot()
      })
    })

    describe('With invalid input - not a number', () => {
      beforeAll(() => {
        component.setProps({
          inputText: 'Hello world!'
        })
      })

      it('Renders correctly', () => {
        expect(component).toMatchSnapshot()
      })
    })

    describe('With invalid input - over the limit', () => {
      beforeAll(() => {
        component.setProps({
          inputText: '9999999999999999999999'
        })
      })

      it('Renders correctly', () => {
        expect(component).toMatchSnapshot()
      })
    })

    describe('When the formatter fails', () => {
      beforeAll(() => {
        getResultForInputText.mockImplementation(() => {
          throw new Error('Something bad happened')
        })

        component.setProps({
          inputText: '123.456'
        })
      })

      it('Renders correctly', () => {
        expect(component).toMatchSnapshot()
      })
    })

    describe('When the formatter succeeds', () => {
      beforeAll(() => {
        getResultForInputText.mockImplementation(jest.requireActual('./formatter').getResultForInputText)

        component.setProps({
          inputText: '123.456'
        })
      })

      it('Renders correctly', () => {
        expect(component).toMatchSnapshot()
      })
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
})
