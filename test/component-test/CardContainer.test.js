import React from 'react';
import ReactDOM from 'react-dom';
import CardContainer from '../../src/Components/CardContainer/CardContainer';
import { shallow, mount } from 'enzyme';
import { mockEmptyArray, mockPeopleData, mockPlanetData, mockVehicleData, mockFavorites} from './TestHelper.js';
import Card from '../../src/Components/Card/Card'

it ('Should render', () => {
  const wrapper = shallow(<CardContainer favorites={mockEmptyArray}/>);

 expect(wrapper.find('.card-container').length).toBe(1);
});

it('should display two cards if peopleData exists and view equals people', () => {
const mockView = 'people';
const wrapper = mount(<CardContainer peopleData={mockPeopleData}  view={mockView} favorites={mockEmptyArray} />)

expect(wrapper.find('.card').length).toBe(2)
expect(wrapper.find('.card-name').first().text()).toBe('Tom');
expect(wrapper.find('.card-name').last().text()).toBe('Kristi');
});

it('should display two cards if planetData exists and view equals planets', () => {
const mockView = 'planets';
const wrapper = mount(<CardContainer planetData={mockPlanetData}  view={mockView} favorites={mockEmptyArray} />)

expect(wrapper.find('.card').length).toBe(2)
expect(wrapper.find('.card-name').first().text()).toBe('BLueSky');
expect(wrapper.find('.card-name').last().text()).toBe('Violet');
});

it('should display two cards if vehicleData exists and view equals vehicles', () => {
const mockView = 'vehicles';
const wrapper = mount(<CardContainer vehicleData={mockVehicleData}  view={mockView} favorites={mockEmptyArray} />)

expect(wrapper.find('.card').length).toBe(2);
expect(wrapper.find('.card-name').first().text()).toBe('Orthone');
expect(wrapper.find('.card-name').last().text()).toBe('Bertho');
});

it('should show favorites of any card type when view is favorites', () => {
const mockView = 'favorites';
const wrapper = mount(<CardContainer favorites={mockFavorites}  view={mockView}/>)

expect(wrapper.find('.card').length).toBe(3);
expect(wrapper.find('.card-name').first().text()).toBe('Orthone');
expect(wrapper.contains(<p className="card-name">Violet</p>)).toBe(true)
expect(wrapper.find('.card-name').last().text()).toBe('Tom');
});

it('should render empty favorites message when favorites are empty in', () => {
  const mockView = 'favorites';
  const wrapper = shallow(<CardContainer favorites={mockEmptyArray} view={mockView}/>)

  expect(wrapper.find('.favorites-empty').text()).toBe('Choose Favorites you must, Yung-Padewon.')
});
