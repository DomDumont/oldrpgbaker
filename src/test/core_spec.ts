import { List, Map } from 'immutable';
import { expect } from 'chai';
import { setEntries } from '../core';

let chai = require("chai");
let chaiImmutable = require('chai-immutable');

chai.use(chaiImmutable);


describe('application logic', function () {

    describe('setEntries', function () {

        it('adds the entries to the state', () => {
            const state = Map();
            const entries = List.of('Trainspotting', '28 Days Later');
            const nextState = setEntries(state, entries);
            expect(nextState).to.equal(Map({
                entries: List.of('Trainspotting', '28 Days Later')
            }));
        });

    });

    it('converts to immutable', () => {
        const state = Map();
        const entries = ['Trainspotting', '28 Days Later'];
        const nextState = setEntries(state, entries);
        expect(nextState).to.equal(Map({
            entries: List.of('Trainspotting', '28 Days Later')
        }));
    });


});