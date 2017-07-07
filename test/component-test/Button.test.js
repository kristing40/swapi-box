import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../../src/Components/Button/Button';
import { shallow, mount } from 'enzyme';


it('should mount', () => {
  const wrapper = shallow(<Button />);

  expect(wrapper.find('.btn').length).toBe(1);
})

it('should have a name', () => {
  const nameProp = 'Some Name';
  const wrapper = shallow(<Button name={nameProp} />);

  expect(wrapper.text()).toEqual('Some Name');
})

it('should trigger a function when clicked', () => {
  const mockHandleClick = jest.fn();
  const wrapper = mount(<Button
    handleClick={mockHandleClick} />);
  const button = wrapper.find('.btn');

  expect(mockHandleClick).toHaveBeenCalledTimes(0);

  button.simulate('click');

  expect(mockHandleClick).toHaveBeenCalledTimes(1);
})
