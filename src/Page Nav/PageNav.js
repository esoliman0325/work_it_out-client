import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import WorkoutsContext from '../WorkoutsContext';
import './PageNav.css';
// import STORE from '../STORE';

class PageNav extends Component {
	static contextType = WorkoutsContext;

	render() {
		let menu;
		let slideIn = this.context.showMenu ? 'hamburger-options-container slide-in' : 'hamburger-options-container';
		
		if(this.context.showMenu) {
			menu =
				<div className={slideIn}>
						<Link className='link' to={'/'}>
							<button type="button">LOGO</button>
						</Link>
						<button type="button" >REGISTER</button>
						<button type="button">SIGN IN</button>
						<button type="button">PROGRESS</button>
						<Link className='link' to={'/addworkouts'}><button type='button'>ADD WORKOUT</button></Link>
						<Link className='link' to={'/viewworkouts'}><button type='button'>VIEW WORKOUT</button></Link>
					</div>

		} else if(!this.context.showMenu) {
			menu =
				<div className={slideIn}>
					<Link className='link' to={'/'}>
						<button type="button">LOGO</button>
					</Link>
					<button type="button" >REGISTER</button>
					<button type="button">SIGN IN</button>
					<button type="button">PROGRESS</button>
					<Link className='link' to={'/addworkouts'}><button type='button'>ADD WORKOUT</button></Link>
					<Link className='link' to={'/viewworkouts'}><button type='button'>VIEW WORKOUT</button></Link>
				</div>
		}

		return (
			<div className='hamburger-all-container'>
				<div onClick={() => this.context.updateShowMenu()} className='hamburger'>
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