import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../src/Components/App/App';
import Scroller from '../../src/Components/Scroller/Scroller';
import { shallow, mount } from 'enzyme';
import fetchMock from 'fetch-mock';
import 'whatwg-fetch';
import { mockScrollerData } from '../mockData/mockScrollerData';
import { mockVehicleData } from '../mockData/mockVehicleData';
import { mockPeopleData, mockHomeWorld, mockSpeciesLuke, mockSpeciesC3PO} from '../mockData/mockPeopleData';
import { mockPlanetData, mockRes1, mockRes2, mockRes3} from '../mockData/mockPlanetData';
import { mockFavoritesData} from '../mockData/mockFavoritesData';

describe('App', () => {

  it('should mount', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('.app-body').length).toBe(1);
  });

  it('Mounts all the child components', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('.scroller').length).toBe(1);
    expect(wrapper.find('.header-container').length).toBe(1);
    expect(wrapper.find('.button-container').length).toBe(1);
    expect(wrapper.find('.card-container').length).toBe(1);
  });
});

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
    fetchMock.restore();
  });

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

    expect(wrapper.state().scrollerText.length).toBe(0);
    expect(wrapper.state().scrollerTitle.length).toBe(0);
    expect(wrapper.state().releaseDate.length).toBe(0);

    expect(wrapper.find('.scroller-txt').text().length).toBe(0);
    expect(wrapper.find('.scroller-title').text().length).toBe(0);
    expect(wrapper.find('.release-date').text().length).toBe(0);

    expect(fetchMock.called()).toEqual(true);

    await resolveAfter2Seconds();

    expect(fetchMock.called()).toEqual(true);

    expect(wrapper.state().scrollerText.length).toBeGreaterThan(0);
    expect(wrapper.state().scrollerTitle.length).toBeGreaterThan(0);
    expect(wrapper.state().releaseDate.length).toBeGreaterThan(0);

    expect(wrapper.find('.scroller-title').text().length).toBeGreaterThan(0);
    expect(wrapper.find('.scroller-title').text().length).toBeGreaterThan(0);
    expect(wrapper.find('.release-date').text().length).toBeGreaterThan(0);
  });
});

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
    fetchMock.restore();
  })

  it('Should render vehicle data when vehicle button is pressed', async () => {
    //For scroller load on componentDidMount()
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

    //For fetching vehicle data
    fetchMock.get('http://swapi.co/api/vehicles/', {
      status: 200,
      body: JSON.stringify(mockVehicleData)
    });

    const wrapper = mount(<App />);

    const vehicleBtn = wrapper.find('.button-container').childAt(2).find('.btn');

    expect(wrapper.state().vehicles.length).toBe(0);
    expect(wrapper.find('.card').exists()).toBe(false);

    expect(wrapper.contains(<p className="card-name">Sand Crawler</p>)).toBe(false);
    expect(wrapper.contains(<p className="card-name">T-16 skyhopper</p>)).toBe(false);

    vehicleBtn.simulate('click');

    await resolveAfter2Seconds();

    expect(fetchMock.done('http://swapi.co/api/vehicles/')).toBe(true);

    expect(wrapper.state().vehicles.length).toBe(2);
    expect(wrapper.find('.card').exists()).toBe(true);
    expect(wrapper.find('.card').length).toBe(2);

    expect(wrapper.contains(<p className="card-name">Sand Crawler</p>)).toBe(true);
    expect(wrapper.contains(<p className="card-name">T-16 skyhopper</p>)).toBe(true);
  });
});

describe('fetch people TEST - ALL', () => {
  const resolveAfter2Seconds = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }
  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore();
  })

  it('Should render people data when people button is pressed', async () => {
    //For scroller load on componentDidMount()
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

    //For People Fectch
    fetchMock.get('http://swapi.co/api/people/', {
      status: 200,
      body: JSON.stringify(mockPeopleData)
    });
    fetchMock.get('http://swapi.co/api/planets/1/', {
      status: 200,
      body: JSON.stringify(mockHomeWorld)
    });
    fetchMock.get('http://swapi.co/api/species/1/', {
      status: 200,
      body: JSON.stringify(mockSpeciesLuke)
    });
    fetchMock.get('http://swapi.co/api/species/2/', {
      status: 200,
      body: JSON.stringify(mockHomeWorld)
    });
    fetchMock.get('http://swapi.co/api/species/2/', {
      status: 200,
      body: JSON.stringify(mockSpeciesC3PO)
    });

    const wrapper = mount(<App />);
    const peopleBtn = wrapper.find('.button-container').childAt(0).find('.btn');

    expect(wrapper.state().people.length).toBe(0);
    expect(wrapper.state().view).toBe('');
    expect(wrapper.find('.card').exists()).toBe(false);

    expect(wrapper.contains(<p className="card-name">Luke Skywalker</p>)).toBe(false);
    expect(wrapper.contains(<p className="card-name">C-3PO</p>)).toBe(false);

    peopleBtn.simulate('click');

    await resolveAfter2Seconds();

    expect(wrapper.state().people.length).toBe(2);
    expect(wrapper.state('view')).toBe('people');
    expect(wrapper.find('.card').exists()).toBe(true);

    expect(wrapper.contains(<p className="card-name">Luke Skywalker</p>)).toBe(true);
    expect(wrapper.contains(<p className="card-name">C-3PO</p>)).toBe(true);
  });
});

describe('fetch planet TEST - ALL', () => {
  const resolveAfter2Seconds = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }
  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore();
  })

    it('Should render planet data when planet button is pressed', async () => {
    //For scroller load on componentDidMount()
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

    //For Planets Fetch
    fetchMock.get('http://swapi.co/api/planets/', {
      status: 200,
      body: JSON.stringify(mockPlanetData)
    });
    fetchMock.get('http://swapi.co/api/people/5/', {
      status: 200,
      body: JSON.stringify(mockRes1)
    });
    fetchMock.get('http://swapi.co/api/people/68/', {
      status: 200,
      body: JSON.stringify(mockRes2)
    });
    fetchMock.get('http://swapi.co/api/people/81/', {
      status: 200,
      body: JSON.stringify(mockRes3)
    });

    const alderaan = (<p className="card-name">Alderaan</p>);
    const hoth = (<p className="card-name">Hoth</p>);

    const wrapper = mount(<App />);
    const planetBtn = wrapper.find('.button-container').childAt(1).find('.btn');

    expect(wrapper.state('planets').length).toBe(0);
    expect(wrapper.state('view')).toBe('');
    expect(wrapper.contains(alderaan)).toBe(false);
    expect(wrapper.contains(hoth)).toBe(false);
    expect(wrapper.find('.card').exists()).toBe(false);

    planetBtn.simulate('click')

    await resolveAfter2Seconds();

    expect(wrapper.state('planets').length).toBe(2);
    expect(wrapper.state('view')).toBe('planets');
    expect(wrapper.contains(alderaan)).toBe(true);
    expect(wrapper.contains(hoth)).toBe(true);
    expect(wrapper.find('.card').exists()).toBe(true);
  });
});

describe('favorites TEST - ALL', () => {
  const resolveAfter2Seconds = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }
  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore();
  })

  it('Should be able to pick favorites when data is present', async () => {
    //For scroller load on componentDidMount()
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

    //For fetching vehicle data
    fetchMock.get('http://swapi.co/api/vehicles/', {
      status: 200,
      body: JSON.stringify(mockFavoritesData)
    });

    const wrapper = mount(<App />);

    const vehicleBtn = wrapper.find('.button-container').childAt(2).find('.btn');

    vehicleBtn.simulate('click');

    await resolveAfter2Seconds();

    let favoriteBtn = wrapper.find('.card').childAt(0);

    expect(favoriteBtn.hasClass('card-unfav-btn')).toBe(true);
    expect(favoriteBtn.hasClass('card-fav-btn')).toBe(false);
    expect(wrapper.state('favorites').length).toBe(0);


    favoriteBtn.simulate('click');


    favoriteBtn = wrapper.find('.card').childAt(0);

    expect(wrapper.state('favorites').length).toBe(1);
    expect(favoriteBtn.hasClass('card-unfav-btn')).toBe(false);

    expect(favoriteBtn.hasClass('card-fav-btn')).toBe(true);
    expect(wrapper.state('view')).toBe('vehicles');

    const favoritesView = wrapper.find('.button-container').childAt(3).find('.btn');

    favoritesView.simulate('click')

    expect(wrapper.state('view')).toBe('favorites')
    expect(wrapper.find('.card').length).toBe(1);

    favoriteBtn = wrapper.find('.card').childAt(0);

    favoriteBtn.simulate('click');

    expect(wrapper.find('.card').length).toBe(0);
 });
});
