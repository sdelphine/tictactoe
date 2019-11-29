import React from 'react';
import { Square } from './Square'
import { mount } from 'enzyme'

describe('Given', () => {
    let props = {
        onClick: event => {},
        value: 'toto'
    }

    describe('WHEN', () => {
        let square = mount(
            <Square
                value={props.value}
                onClick={props.onClick}
            />);

        it('THEN', () => {
            const p = square.find('.toggle-todo');
  
            expect(p.text()).toBe('Buy Milk');
        })
    })
})