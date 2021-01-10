import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
			heroes: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://akabab.github.io/superhero-api/api/all.json')
			.then(response => response.json())
			.then(users => this.setState({ heroes: users }));
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const { heroes, searchfield } = this.state;
		const filteredHeroes = heroes.filter(hero => {
			return hero.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		return !heroes.length ?
		<h1>Loading</h1> :
		(
			<div className='tc'>
				<h1 className='f1 pa4'>Superheroes & Villains</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
					<ErrorBoundary>
						<CardList heroes={filteredHeroes} />
					</ErrorBoundary>
				</Scroll>
				<h2>"With great power, comes great responsibility." – Spiderman</h2>
			</div>
		);
	}
}

export default App;