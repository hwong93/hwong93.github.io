import React, { Component } from 'react';
import styled from 'styled-components';
import LeftContainer from '../Components/LeftContainer';
import RightContainer from  '../Components/RightContainer';
import Stars from '../Components/Stars';
import HomeContent from './HomeContent/HomeContent';
import HomeStarsContent from './HomeContent/HomeStarsContent';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	@media screen and (max-width: 768px) {
		height: 100%;
		width: 100%;
	}
`;

class Home extends Component {
	render() {
		return (
			<Container className="home" id="home">
				<LeftContainer 
					show={<Stars component={<HomeStarsContent />} />}
					styled="home"
				/>
				<RightContainer show={<HomeContent />}  styled="home" />
			</Container>
		)
	}
}

export default Home;