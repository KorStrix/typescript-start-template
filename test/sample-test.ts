import { expect } from 'chai';

describe('test describe', () => {
  before(() => {
    'before';
  });

  it('test 1 + 1 = 2', () => {
    expect(1 + 1).is.equal(2);
  });

  it('test 1 * 3 = 3', () => {
    expect(1 * 3).is.equal(3);
  });

  after(() => {
    'after';
  });
});
