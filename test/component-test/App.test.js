import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../src/Components/App/App';
import Scroller from '../../src/Components/Scroller/Scroller';
import { shallow, mount } from 'enzyme';
import fetchMock from 'fetch-mock'
import 'whatwg-fetch';

it('should mount', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.find('.app-body').length).toBe(1);
})

it('Mounts all the child components', () => {
  const wrapper = mount(<App />);
  console.log(wrapper.debug());

  expect(wrapper.find('.scroller').length).toBe(1);
  expect(wrapper.find('.header-container').length).toBe(1);
  expect(wrapper.find('.button-container').length).toBe(1);
  expect(wrapper.find('.card-container').length).toBe(1);
})

it('should fetch the scroller', () => {

})
