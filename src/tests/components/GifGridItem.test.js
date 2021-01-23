import React from 'react';
import { shallow } from "enzyme";
import { GifGridItem } from '../../components/GifGridItem';

describe('Tests for GifGridItem', () => {
	const title = 'this is the title';
	const url = 'https://media2.giphy.com/media/6IkjQmpaRwIabJ2G3C/giphy-downsized-medium.gif?cid=9c607b57fwvodggtl44a0krlfdotziii0hvftdyyvv2mtxz0&rid=giphy-downsized-medium.gif';

	const wrapper = shallow( <GifGridItem title={ title } url={ url } /> );
	
	test('Should show the component correctly', () => {
		
		expect( wrapper ).toMatchSnapshot();
	});

	test('should show title correctly in p', () => {
		const p = wrapper.find('p');
		expect( p.text().trim() ).toBe(title);
	});

	test('Image should have url and alt attributes correctly', () => {
		const img = wrapper.find('img');
		const { src, alt } = img.props();
		expect( alt.trim() ).toBe(title);
		expect( src.trim() ).toBe(url);
	});

	test('should have animate__fadeIn className', () => {
		const div = wrapper.find('div');

		expect( div.prop('className').includes('animate__fadeIn')).toBe(true);
	})
	
	
	
	
})
