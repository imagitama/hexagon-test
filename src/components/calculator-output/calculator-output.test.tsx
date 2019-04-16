import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { CalculatorOutput, mapStateToProps } from './calculator-output'
import getResultForInputText, { OutOfBoundsError, InvalidInputError } from './formatter'

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

    describe('When the formatter fails', () => {
      describe('With an out of bounds error', () => {
        beforeAll(() => {
          (getResultForInputText as jest.Mock).mockImplementation(() => {
            throw new OutOfBoundsError('99999999999')
          })

          component.setProps({
            inputText: '99999999999'
          })
        })

        it('Renders correctly', () => {
          expect(component).toMatchSnapshot()
        })
      })
      
      describe('With an invalid input error', () => {
        beforeAll(() => {
          (getResultForInputText as jest.Mock).mockImplementation(() => {
            throw new InvalidInputError('foo')
          })

          component.setProps({
            inputText: 'foo'
          })
        })

        it('Renders correctly', () => {
          expect(component).toMatchSnapshot()
        })
      })

      describe('With any other error', () => {
        beforeAll(() => {
          (getResultForInputText as jest.Mock).mockImplementation(() => {
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
    })

    describe('When the formatter succeeds', () => {
      beforeAll(() => {
        (getResultForInputText as jest.Mock).mockImplementation(() => 'MOCK OUTPUT WORDS')

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
