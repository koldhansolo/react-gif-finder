import React from 'react';
import { shallow } from "enzyme";
import { GifExpertApp } from "../GifExpertApp";


describe('Pruebas a <GifExpertApp />', () => {
	test('Hacer match con el snapshot', () => {
		const wrapper = shallow( <GifExpertApp /> );

		expect( wrapper ).toMatchSnapshot();
	});

	test('Debe de mostrar una lista de categorias', () => {
		// Defino dos categorias que serán pasadas por props
		const categories = [ 'One Punch', 'Dragon Ball' ];

		// Obtengo el componente GifExpertApp con las dos categorias que definí
		const wrapper = shallow( <GifExpertApp defaultCategories={ categories } /> );

		expect( wrapper ).toMatchSnapshot();
		expect( wrapper.find( 'GifGrid' ).length ).toBe( categories.length );
	});
	
	
});
