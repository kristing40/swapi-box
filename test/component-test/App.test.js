import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../src/Components/App/App';
import Scroller from '../../src/Components/Scroller/Scroller';
import { shallow, mount } from 'enzyme';
import fetchMock from 'fetch-mock';
import 'whatwg-fetch';
import { mockScrollerData } from '../mockData/mockScrollerData';
import { mockVehicleData } from '../mockData/mockVehicleData'


describe('App', () => {

  it('should mount', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('.app-body').length).toBe(1);
  })

  it('Mounts all the child components', () => {
    const wrapper = mount(<App />);

    expect(wrapper.find('.scroller').length).toBe(1);
    expect(wrapper.find('.header-container').length).toBe(1);
    expect(wrapper.find('.button-container').length).toBe(1);
    expect(wrapper.find('.card-container').length).toBe(1);
  })
})

describe('Scroller TEST - ALL', () => {
  const resolveAfter2Seconds = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }

  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore()
  })

    it('should fetch the scroller', async () => {
      fetchMock.get('http://swapi.co/api/films/1/', {
        status: 200,
        body: JSON.stringify(mockScrollerData)
      });
      fetchMock.get('http://swapi.co/api/films/2/', {
        status: 200,
        body: JSON.stringify(mockScrollerData)
      });
      fetchMock.get('http://swapi.co/api/films/3/', {
        status: 200,
        body: JSON.stringify(mockScrollerData)
      });
      fetchMock.get('http://swapi.co/api/films/4/', {
        status: 200,
        body: JSON.stringify(mockScrollerData)
      });
      fetchMock.get('http://swapi.co/api/films/5/', {
        status: 200,
        body: JSON.stringify(mockScrollerData)
      });
      fetchMock.get('http://swapi.co/api/films/6/', {
        status: 200,
        body: JSON.stringify(mockScrollerData)
      });
      fetchMock.get('http://swapi.co/api/films/7/', {
        status: 200,
        body: JSON.stringify(mockScrollerData)
      });

      const wrapper = mount(<App />);

      expect(wrapper.state().scrollerText.length).toBe(0)
      expect(wrapper.state().scrollerTitle.length).toBe(0)
      expect(wrapper.state().releaseDate.length).toBe(0)

      expect(wrapper.find('.scroller-txt').text().length).toBe(0)
      expect(wrapper.find('.scroller-title').text().length).toBe(0)
      expect(wrapper.find('.release-date').text().length).toBe(0)

      expect(fetchMock.called()).toEqual(true);

      await resolveAfter2Seconds();

      expect(fetchMock.called()).toEqual(true);

      expect(wrapper.state().scrollerText.length).toBeGreaterThan(0);
      expect(wrapper.state().scrollerTitle.length).toBeGreaterThan(0);
      expect(wrapper.state().releaseDate.length).toBeGreaterThan(0);

      expect(wrapper.find('.scroller-title').text().length).toBeGreaterThan(0)
      expect(wrapper.find('.scroller-title').text().length).toBeGreaterThan(0)
      expect(wrapper.find('.release-date').text().length).toBeGreaterThan(0)
  });
})


describe('fetch vehicle TEST - ALL', () => {
  const resolveAfter2Seconds = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }
  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore()
  })

  it('Should render vehicle data when vehicle button is pressed', async () => {
    fetchMock.get('http://swapi.co/api/films/1/', {
      status: 200,
      body: JSON.stringify(mockScrollerData)
    });
    fetchMock.get('http://swapi.co/api/films/2/', {
      status: 200,
      body: JSON.stringify(mockScrollerData)
    });
    fetchMock.get('http://swapi.co/api/films/3/', {
      status: 200,
      body: JSON.stringify(mockScrollerData)
    });
    fetchMock.get('http://swapi.co/api/films/4/', {
      status: 200,
      body: JSON.stringify(mockScrollerData)
    });
    fetchMock.get('http://swapi.co/api/films/5/', {
      status: 200,
      body: JSON.stringify(mockScrollerData)
    });
    fetchMock.get('http://swapi.co/api/films/6/', {
      status: 200,
      body: JSON.stringify(mockScrollerData)
    });
    fetchMock.get('http://swapi.co/api/films/7/', {
      status: 200,
      body: JSON.stringify(mockScrollerData)
    });

    fetchMock.get('http://swapi.co/api/vehicles/', {
      status: 200,
      body: JSON.stringify(mockVehicleData)
    });

    const wrapper = mount(<App />);

    // console.log(wrapper.debug());
    const vehicleBtn = wrapper.find('.button-container').childAt(3).find('.btn')
    // console.log(vehicleBtn.debug());
    console.log(vehicleBtn.debug());
    expect(wrapper.state().vehicles.length).toBe(0);

    vehicleBtn.simulate('click')
    
    await resolveAfter2Seconds();

    expect(fetchMock.done('http://swapi.co/api/vehicles/'));
    console.log(fetchMock.done('http://swapi.co/api/vehicles/'));

    // console.log(wrapper.debug());
    // console.log(wrapper.state().vehicles);



  })
})






// it('submits the correct data to the server', () => {
//   fetchMock.post('/api/v1/groceries', {
//     status: 200,
//     body: JSON.stringify({grocery: mockGroceries}),
//     // fetchMock:
//   })
