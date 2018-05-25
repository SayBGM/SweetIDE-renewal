const enzyme = require('enzyme');
const context = require.context('./src', true, /-test\.js$/);
context.keys().forEach(context);

// import React from 'react';
// import { expect } from 'chai';
// import { shallow } from 'enzyme';
// import Example from './Example';

// describe('<Example />', () => {
// 	it('Example rendering component without problem', () => {
// 		const component = shallow(<Example />);
// 		expect(component).to.exist;
// 	});

// 	it('Example inner child test-container', () => {
// 		const component = shallow(<Example />);
// 		expect(component.find('.test-container').exists()).to.equal(true);
// 	});
// });