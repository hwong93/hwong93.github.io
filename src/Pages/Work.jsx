import React, { Component } from 'react';
import styled from 'styled-components';
import LeftContainer from '../Components/LeftContainer';
import RightContainer from  '../Components/RightContainer';
import Stars from '../Components/Stars';
import WorkContent from './WorkContent/WorkContent';
import Main from './WorkContent/Main';
import WorkImage from './WorkContent/WorkImage';
import EducationImage from './WorkContent/EducationImage';
import Education from './WorkContent/Education';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	@media screen and (max-width: 768px) {
		height: 100%;
		width: 100%;
	}
`;

const Work = () => {
	return(
		<div id="experience">
			<Container >
				<RightContainer
					show={
						<WorkContent
						changeState={(state) => this.changeState(state)}
						component={<Main />}
						styled="work"
						/>
					} 
				/>
				<LeftContainer 
					show={<Stars component={<WorkImage />}/>}
					styled="work"
				/>
			</Container>
			<Container >
				<RightContainer
					show={<Stars component={<EducationImage />}/>}
					styled="work"
				/>
				<LeftContainer 
					styled="work"
					show={
						<WorkContent
						component={<Education />}
						styled="work"
						/>
					} 
				/>
			</Container>
		</div>
	)
}

export default Work;
