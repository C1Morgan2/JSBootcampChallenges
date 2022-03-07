/* eslint-disable no-undef */
const { expect } = require('chai');

const { cap, firstCharacter } = require('./strings');

describe('firstCharacter', () => {
  it('is a function', () => {
    expect(typeof firstCharacter).to.equal('function');
  });

  it('returns a boolean', () => {
    const returnedValue = firstCharacter('hey there', 'goodbye');
    expect(typeof returnedValue).to.equal('boolean');
  });

  it('returns true if both strings start with the same character', () => {
    const returnedValue = firstCharacter('apple', 'aardvark');
    expect(returnedValue).to.equal(true);
  });

  it('returns false if both strings do not start with the same character', () => {
    const returnedValue = firstCharacter('today', 'yesterday');
    expect(returnedValue).to.equal(false);
  });

  it('*** Bonus returns true if the strings start with the same characters but are different case', () => {
    const returnedValue = firstCharacter('bobby', 'Billy');
    expect(returnedValue).to.equal(true);
  });
});

describe('cap', () => {
  it('is a function', () => {
    expect(typeof cap).to.equal('function');
  });

  it('returns a string', () => {
    const returnedValue = cap('hello', 'e');
    expect(typeof returnedValue).to.equal('string');
  });

  it('returns the correct string', () => {
    const returnedValue = cap('hello', 'e');
    expect(returnedValue).to.equal('L');
    expect(cap('goodbye', 'b')).to.equal('Y');
  });

  it("returns the string 'sorry not found' if letter is not found", () => {
    const returnedValue = cap('where are you', 'b');
    expect(returnedValue).to.equal('sorry not found');
  });
});