import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"
import React from 'react';

describe('Pruebas en en componente <AddCategory />', () => {

	// Defino una función setCategories ficticia que me permitirá evaluar si la función se dispara o no
	const setCategories = jest.fn();

	// Lo puse como let y lo incluyo aqui y en el beforeEach para que me aparezcan las ayudas
	let wrapper = shallow( <AddCategory setCategories={ setCategories } />);

	// este método se ejecuta antes de ejecutar cada prueba
	beforeEach(() => {
		// Limpio los eventos que se dispararon
		jest.clearAllMocks();

		// Obtengo de nuevo el wrapper del componente
		wrapper = shallow( <AddCategory setCategories={ setCategories } />);
	});

	test('Component should displays correctly', () => {
		// Genero un snapshot
		expect( wrapper ).toMatchSnapshot();
	});

	test('Debe de cambiar la caja de texto', () => {
		// Obtengo el input
		const input = wrapper.find('input');

		// Defino un valor que será el que simularé que ingreso en el input
		const value = 'Hola mundo';

		// Simulo que se ingresó el valor de input en el input text
		input.simulate('change', { target: { value } });

		// Cree un p en el componente que me permitirá evaluar si el valor de inputValue cambió y con la linea de abajo hago la verificación
		expect( wrapper.find('p').text().trim() ).toBe( value );
	});


	test('no debe de postear la información con submit', () => {
		// Simulo el submit
		wrapper.find('form').simulate('submit', { preventDefault(){} });

		// Verifico que como no se envió un valor mayor a dos caracteres entonces que el evento setCategories no se dispare
		expect( setCategories ).not.toHaveBeenCalled();
	});

	test('debe llamar el setCategories y limpiar la caja de texto', () => {
		// Defino el valor que cambiará (mayor a dos cracteres)
		const value = 'Este es un valor';

		// Obtengo el input y simulo que escribí el valor de value
		const input = wrapper.find('input');
		input.simulate('change', { target: { value } });

		// Simulo el evento submit
		wrapper.find('form').simulate('submit', { preventDefault(){} });

		// Verifico que la funcion se setCategories se haya llamado
		expect( setCategories ).toHaveBeenCalled();
		// expect( setCategories ).toHaveBeenCalledTimes(1); // también se puede usar

		// Con ayuda del p que puse en el componente evalúo que el input se haya reiniciado
		// expect( wrapper.find( 'p' ).text().trim() ).toBe('');

		// Lo anterior tambien se puede evaluar de la sig forma
		expect( input.prop('value') ).toBe('');
	})
	
	
	
	
})
