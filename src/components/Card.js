import React from 'react';

const Card = ({ id, name, slug, race, alignment }) => {
	return (
		<div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='superhero' src={`https://akabab.github.io/superhero-api/api/images/sm/${slug}.jpg`} />
			<div>
				<h3>{name}</h3>
				<p>Race: {race || '-'}</p>
				<p>Alignment: {alignment}</p>
			</div>
		</div>
	);
}

export default Card;