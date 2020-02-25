import React from 'react';
import { render, wait } from '@testing-library/react';
import App from './App'
import userEvent from '@testing-library/user-event'
import {fetchShow as mockFetchShow} from './api/fetchShow'


test('Is the App rendering without crashing', ()=>{
	const mockApp = jest.fn();
	const { getByText, getAllByText, debug , container} = render(<App />);

	expect(container.firstChild).toMatchSnapshot()

	
	getByText(/Fetching data.../i);

}) 




test('User is able to select a season', async() => {
// mockFetchShow.mockResolvedValueOnce(showData);
const { getByText,getAllByText } = render(<App />);

await wait(() =>{
    getByText(/select a season/i)
}) 


userEvent.click(getByText(/select a season/i))
expect(getAllByText(/season /i)).toHaveLength(4);

userEvent.click(getByText(/select a season/i))


expect(getByText(/select a season/i)).toBeTruthy();


userEvent.click(getByText(/select a season/i))
expect(getAllByText(/season /i)).not.toBe( Array);//hmmmmmmm ....huh


});