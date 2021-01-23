import { shallow } from "enzyme";
import React from 'react';
import { GifGrid } from "../../components/GifGrid";

// Con este mook finjo cualquier llamada a este archivo y suponer o controlar la info que va a responder
import { useFetchGifs } from '../../hooks/useFetchGifs'; // importo useFetchGifs
jest.mock('../../hooks/useFetchGifs'); // Defino el mock y asocio useFetchGifs para que el mock lo controle

describe('Pruebas a <GifGrid />', () => {

	// Defino una categoria por default
	const category = 'One punch';

	test('Hacer el match con el snapshot', () => {
		// defino el mock para useFetchGifs en el inicio

		// Falseo la data del useFetchGifs
		useFetchGifs.mockReturnValue({
			data: [],
			loading: true
		});

		// Obtengo el wrapper por medio del shallow
		const wrapper = shallow( <GifGrid category={ category } /> );

		// Genero el Snapshot
		expect( wrapper ).toMatchSnapshot();
	});

	test('Verificar que se muestren los items cuando se carguen las imagenes con useFetchGifs', () => {
		// defino un gif de ejemplo
		const gifs = [{
			id: 'ABC',
			url: 'https://media4.giphy.com/media/ZvSojyTPq4OXe/giphy.gif?cid=9c607b57zhg2p5uq15jj5sijh04r5idleqz3u8et76t5lsvd&rid=giphy.gif',
			title: 'cualquier cosa'
		}];
		// defino el mock para useFetchGifs en el inicio

		// Falseo la data del useFetchGifs
		useFetchGifs.mockReturnValue({
			data: gifs,
			loading: false
		});

		// Obtengo el wrapper por medio del shallow
		const wrapper = shallow( <GifGrid category={ category } /> );

		// Genero el Snapshot
		expect( wrapper ).toMatchSnapshot();

		expect( wrapper.find('p').exists() ).toBe( false );

		expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
	});
	
});
