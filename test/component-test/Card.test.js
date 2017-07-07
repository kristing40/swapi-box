import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../../src/Components/Card/Card';
import { shallow, mount } from 'enzyme';

// const mockData = {
//   residents: ['Tom', 'Dick', 'Harry']
// }
const mockData = {
  residents: []
}

it('should mount', () => {
  const wrapper = shallow(<Card data={mockData}/>)
  console.log(wrapper.debug());
})
