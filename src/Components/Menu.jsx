import React, { Component } from 'react';
import home from '../img/home-solid.svg';
import chart from '../img/chart-bar-regular.svg';
import work from '../img/briefcase-solid.svg';
import envelope from '../img/envelope-open-solid.svg'
import folder from '../img/folder.svg';

class Menu extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showMenu: false,
		}
	}
	changePage(page) {
		this.props.changePage(page);
	}
	render() {
		return (
			<div className="menuContainer">
				<div className="menu">
					<a href="#home" onClick={() => this.changePage('home')} title="Home" ><img src={home} alt="home" width="25"/></a>
					<a href="#skills" className="skill" onClick={() => this.changePage('skills')} title="Skill" ><img src={chart} alt="skill" width="25"/></a>
					<a href="#experience" className="experience" onClick={() => this.changePage('experience')} title="Experience" ><img src={work} alt="experience" width="25"/></a>
					<a href="#projects" className="projects" onClick={() => this.changePage('projects')} title="Projects" ><img src={folder} alt="projects" width="25" height="28" /></a>
					<a href="#contact" onClick={() => this.changePage('contact')} title="Contact" ><img src={envelope} alt="contact" width="25"/></a>
				</div>	

			</div>
		);
	}
}

export default Menu;
