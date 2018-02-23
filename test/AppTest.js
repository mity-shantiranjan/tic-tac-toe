import React from 'react';
import ReactDOM from 'react-dom';
import App from '../app/components/App';
import { expect, assert } from 'chai';
import { shallow, mount, render } from 'enzyme';
import { initialState } from '../app/reducers/Reducer.js'
import configureMockStore from 'redux-mock-store';
import Cell from '../app/components/Cell'


describe('React Components', function() {
  let wrapper;
  const mockStore = configureMockStore();
  describe('App', () => {
    beforeEach(() => {
      const store = mockStore(initialState);
      wrapper = shallow(<App/>).shallow();
    });
});
