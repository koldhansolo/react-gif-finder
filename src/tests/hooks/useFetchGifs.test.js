import React from 'react';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas para hook useFetchGifs', () => {
	test('Debe de retornar el estado inicial ', async() => {
		const category = 'One Punch';

		const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( category ) );
		const { data, loading } = result.current;

		await waitForNextUpdate();

		expect( data ).toEqual( [] );
		expect( loading ).toBe( true );
	});

	test('Debe de retornar un arreglo de imagenes y el loading en false', async () => {
		const category = 'One Punch';

		const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( category ) );
		await waitForNextUpdate();

		const { data, loading } = result.current;

		expect( data.length ).toEqual( 10 );
		expect( loading ).toBe( false );
	});
	
	
})
