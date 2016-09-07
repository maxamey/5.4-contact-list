import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Contact from '../lib/Contact';


describe("View of one contact", () => {
  const list = TestUtils.renderIntoDocument(
    <ul className="info container"/>
  );
  it("should show four list items with five pieces of information",() => {
    expect(list.props.length).toEqual(5);
  })
});
