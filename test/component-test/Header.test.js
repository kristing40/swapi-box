import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../src/Components/Header/Header';
import { shallow, mount } from 'enzyme';


it('should render', () =>{
  const wrapper = shallow(<Header/>)

  expect(wrapper.find('.header-container').length).toBe(1)
})
