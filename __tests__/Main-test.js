import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Main from '../lib/Main';


describe("Main List of Contacts", () => {
  const main = TestUtils.renderIntoDocument(
    <Main />
  );
  it("should have eight contacts",() => {    expect(main.props.contacts.length).toEqual(8);
  })
});
