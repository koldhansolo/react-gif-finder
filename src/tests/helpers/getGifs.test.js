import { getGifs } from "../../helpers/getGifs";

describe('Tests to getGifs helper', () => {
	test('should return 10 elements', async () => {
		const gifs = await getGifs('One Punch');

		expect( gifs.length ).toBe( 10 );
	});

	test('should return 0 elements if you dont send category', async () => {
		const gifs = await getGifs('');

		expect( gifs.length ).toBe( 0 );
	});
	
});
