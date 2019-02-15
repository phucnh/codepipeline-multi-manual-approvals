'use strict';

const chai = require('chai');
const expect = chai.expect;
const rewire = require('rewire');

const rewiredHandler = rewire('../functions/approval-checker.js');

describe('approval-checker.js', () => {
  describe('#doesDuplicatedApproverExist', () => {
    const doesDuplicatedApproverExist = rewiredHandler.__get__('doesDuplicatedApproverExist');

    context('with no duplicated approver', () => {
      it('returns true', () => {
        expect(doesDuplicatedApproverExist(['user1', 'user2', 'user3'])).to.be.eq(true);
      });
    });

    context('with empty approver array', () => {
      it('return false', () => {
        expect (doesDuplicatedApproverExist([])).to.be.eq(false);
      });
    });
  });
});
