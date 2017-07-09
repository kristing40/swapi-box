import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../../src/Components/Card/Card';
import { shallow, mount } from 'enzyme';

const mockData = {
  homeworld: 'Neptune',
  population: 'ten',
  language: 'Gorna',
  species: 'Kleptoid',
  residents: ['Tom', 'Dick', 'Harry']
};

const mockDataEmpty = {};

it('should mount', () => {
  const wrapper = shallow(<Card data={mockDataEmpty}/>);

  expect(wrapper.find('.card').length).toBe(1);
});

it('should render data when data is passed in.', ()=> {
  const wrapper = shallow(<Card data={mockData} />);

  expect(wrapper.contains(<p>Neptune</p>)).toBe(true);
  expect(wrapper.contains(<p>ten</p>)).toBe(true);
  expect(wrapper.contains(<p>Gorna</p>)).toBe(true);
  expect(wrapper.contains(<p>Kleptoid</p>)).toBe(true);
});

it('should not render residents if they are not passed in', () => {
  const wrapper = shallow(<Card data={mockDataEmpty} />);

  expect(wrapper.contains(<p>Residents:</p> )).toBe(false);
});

it('should render residents if they are passed in', () => {
  const wrapper = shallow(<Card data={mockData} />);

  expect(wrapper.contains(<p>Residents:</p>)).toBe(true);
  expect(wrapper.contains(<p>Tom</p>)).toBe(true);
  expect(wrapper.contains(<p>Dick</p>)).toBe(true);
  expect(wrapper.contains(<p>Harry</p>)).toBe(true);
});

it('should should fire a function when favorites button is clicked',() => {
  const mockHandleClick = jest.fn();
  const wrapper = mount(<Card addToFavorites={mockHandleClick}
                              data={mockDataEmpty}/>);

  const button = wrapper.find('.card-unfav-btn');

  expect(mockHandleClick).toHaveBeenCalledTimes(0);

  button.simulate('click');

  expect(mockHandleClick).toHaveBeenCalledTimes(1);
});
