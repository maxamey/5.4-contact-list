import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Main from '../lib/Main';

jest.unmock('../lib/Main');

describe("Main List of Contacts", () => {
  const main = TestUtils.renderIntoDocument(
    <Main />
  );
  const mainEl = ReactDOM.findDOMNode(main);
  expect(this.props.contatcs.length).toEqual(8);

});
