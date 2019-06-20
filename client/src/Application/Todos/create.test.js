import React from 'react'
import { shallow } from 'enzyme'
import CreateTodo from "./create.component"

it('renders without crashing', () => {
	shallow(<CreateTodo />)
})

it('contains a field with class ".text-input"', () => {
	const component = shallow(<CreateTodo />)
	expect(component.exists(".text-input")).toEqual(true)
})

it('contains a field with class ".submit-button"', () => {
	const component = shallow(<CreateTodo />)
	expect(component.exists(".submit-button")).toEqual(true)
})