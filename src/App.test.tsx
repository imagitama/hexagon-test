import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import App from './App'

describe('App', () => {
  describe('When mounted', () => {
    let component: ShallowWrapper

    beforeAll(() => {
      component = shallow(<App />)
    })

    it('Renders correctly', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
