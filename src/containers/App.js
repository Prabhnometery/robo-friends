import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends React.Component {
	constructor() {
		super()
		this.state = { 
			robots : [], //In real life = []
			searchfield: ''
		}
	}

	componentDidMount() {
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({ robots: users}));
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
	}


	render() {
		const filteredRobots = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		return (
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange = {this.onSearchChange}/>
				<Scroll>
					<CardList robots = {filteredRobots}/>
				</Scroll>
			</div>
	);

	}

}

export default App;

