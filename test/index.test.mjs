import data from '../data.mjs';
import find from '../index.mjs';
import {expect} from 'chai';

const cases = [
  [[data, 'Abbott', 'phone'], {name: 'Costello', phone: '767 676 7676'}],
  [[data, 'Buster', 'email'], {name: 'Hardy', email: 'hardy@hardyharhar.com'}],
  [[data, 'Bob', 'phone'], 'Not found'],
  [[data, 'Costello', 'birthday'], 'Not found'],
];

describe('#findFriend', async() => {
  cases.forEach(test => {
    it(`Returns ${JSON.stringify(test[1])} for ${test[0]
      .slice(1)
      .join(', ')}`, () => {
      expect(find(...test[0])).eql(test[1]);
    });
  });
});
