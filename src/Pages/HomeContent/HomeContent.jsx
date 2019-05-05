import React, { Component } from 'react';
import styled from 'styled-components';
import InViewMonitor from 'react-inview-monitor';

const HomeContainer = styled.div`
	padding: 0px 60px;
	position: relative;
	top: 50%;
	transform: translateY(-50%);
	@media screen and (max-width: 768px) {
		padding: 40px;
		top: unset;
		transform: none;
	}
`;

const Header = styled.h1`
	font-size: 3rem;
`;

const Copy = styled.p`
`;

class HomeContent extends Component {
	render() {
		return(
			<HomeContainer className="home-content">
				<InViewMonitor
					classNameNotInView='vis-hidden'
					classNameInView='animated fadeIn' // fadeInLeft, or fadeInRight
				>
					<Header className="header">Hi,</Header>
				</InViewMonitor>
				<InViewMonitor
					classNameNotInView='vis-hidden'
					classNameInView='animated fadeIn' // fadeInLeft, or fadeInRight
					>
				<Copy>
						I'm Hou-Tai, a <b>fullstack developer</b>. I currently work in a fast paced agency environment, which has made me more passionate and enthusiastic about web development. I'm a <b>hardworking,</b> <b>self-driven</b> developer who is interested in seeking new development opportunites where I can share my knowledge and learn from others.
					</Copy>
					</InViewMonitor>
					<InViewMonitor
					classNameNotInView='vis-hidden'
					classNameInView='animated fadeIn' // fadeInLeft, or fadeInRight
					>
					<Copy>
						Currently I'm learning more about mobile development using languages like <b>React Native</b>. Outside of development, I enjoy spending my time watching <b>movies</b>, playing video games, spending some quality time with friends and family, and especially exploring new <b>foods</b>.
					</Copy>
				</InViewMonitor>
			</HomeContainer>	
			
		);
	}
}

export default HomeContent;