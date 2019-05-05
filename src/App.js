import React, { Component } from 'react';
import styled from 'styled-components';
import Home from './Pages/Home';
import Work from './Pages/Work';
import Skills from './Pages/Skills';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Menu from './Components/Menu';
import $ from 'jquery';

const Wrapper = styled.div`
	height: 100vh;
	width: 100vw;
	@media screen and (max-width: 768px) {
		height: 100%;
		width: 100%;
	}
`;

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showPage: 'home',
			showMobile: false,
		};
	}
	componentDidMount() {
		$(window).on('load resize', () => {
			const path = window.location.href;
			const page = path.split('#');
			if (window.innerWidth <= 768) {
				this.setState({
					showMobile: true,
					showPage: `${page[1] ? page[1] : 'home'}`,
				});
			} else {
				this.setState({
					showMobile: false,
					showPage: `${page[1] ? page[1] : 'home'}`,
				});
			}
		});
	}
	changePage(page) {
		this.setState({
			showPage: page,
		});
	}
  render() {
		const { showPage, showMobile } = this.state;
    return (
			<Wrapper>
				<Menu 
					changePage={page => this.changePage(page)}				
				/>
				{
					(showPage === 'home' || showMobile) && (
						<Home />
					)
				}
				{
					(showPage === 'skills' || showMobile) && (
						<Skills />
					)
				}
				{
					(showPage === 'experience' || showMobile) && (
						<Work />
					)
				}
				{
					(showPage === 'projects' || showMobile) && (
						<Projects />
					)
				}

				{
					(showPage === 'contact' || showMobile) && (
						<div>
								<div id="contact" />
								<Contact />
						</div>
					)
				}
			</Wrapper>
    );
  }
}

export default App;
