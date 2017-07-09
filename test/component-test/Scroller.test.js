import React from 'react';
import ReactDOM from 'react-dom';
import Scroller from '../../src/Components/Scroller/Scroller';
import { shallow, mount } from 'enzyme';

const mockScrollerText = 'Hello World!';
const mockReleaseDate = 'July';
const mockScrollerTitle = 'New Life';

it('should render', () =>{
  const wrapper = shallow(<Scroller/>);

  expect(wrapper.find('.scroller').length).toBe(1);
});

it( 'should have scroller text when it is passed in', () => {

  const wrapper = shallow(<Scroller scrollerText={mockScrollerText} />);

  expect(wrapper.find('.scroller-txt').text()).toEqual('Hello World!');
});

it( 'should have scroller release date when it is passed in', () => {

  const wrapper = shallow(<Scroller releaseDate={mockReleaseDate}/>);

  expect(wrapper.find('.release-date').text()).toEqual('July');
});

it( 'should have scroller title when it is passed in', () => {

  const wrapper = shallow(<Scroller scrollerTitle={mockScrollerTitle} />);

  expect(wrapper.find('.scroller-title').text()).toEqual('New Life');
});
