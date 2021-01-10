import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div className='pa2'>
			<input 
				className='pa3 ba b-green bg-lightest-blue h-25'
				type='search' 
				placeholder='search characters'
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;