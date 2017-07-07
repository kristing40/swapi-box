import React from 'react';
import ReactDOM from 'react-dom';
import ButtonContainer from '../../src/Components/ButtonContainer/ButtonContainer';
import Button from '../../src/Components/Button/Button'
import { shallow, mount } from 'enzyme';

it('should render ', () => {
  const wrapper = shallow(<ButtonContainer/>)
  expect(wrapper.find('.button-container').length).toBe(1)
});

it('should have three buttons', () => {
  const wrapper = shallow(<ButtonContainer/>)
  expect(wrapper.find(Button).length).toBe(4)
})
