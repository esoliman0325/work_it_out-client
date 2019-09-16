import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './PageNav.css';
// import STORE from '../STORE';

class PageNav extends Component {

	constructor(props) {
		super(props);
		this.state = {
			showMenu: false
		}
	}

	handleToggleMenu = () => {
		console.log('menu')
		this.setState({
			showMenu: !this.state.showMenu
		})
	}


	render() {
		let menu;

		if(this.state.showMenu) {	
			menu =
			<div className='hamburger-options-container'>
				<Link to={'/'}>
					<button type="button">LOGO</button>
				</Link>
				<button type="button" >REGISTER</button>
				<button type="button">SIGN IN</button>
				<button type="button">PROGRESS</button>
				<Link to={'/addworkouts'}><button type='button'>ADD WORKOUT</button></Link>
				<Link to={'/viewworkouts'}><button type='button'>VIEW WORKOUT</button></Link>
			</div>
		}

		return (
			<div className='hamburger-all-container'>
				<div onClick={() => this.handleToggleMenu()} className='hamburger'>
					<div></div>
					<div></div>
					<div></div>
				</div>
				{menu}
			</div>
		)
	}
}
export default PageNav;