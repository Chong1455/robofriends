import React from 'react';
import Card from './Card';

const CardList = ({ heroes }) => { 
	return (
		<div>
		{
			heroes.map((user, i) => {
				return (
					<Card 
						key={i}
						id={heroes[i].id} 
						name={heroes[i].name} 
						slug={heroes[i].slug}
						race={heroes[i].appearance.race}
						alignment={heroes[i].biography.alignment}
					/>
				);
			})
		}
		</div>
	);
}

export default CardList;