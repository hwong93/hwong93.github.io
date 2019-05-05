import React, { Component } from 'react';
import styled from 'styled-components';
import LeftContainer from '../Components/LeftContainer';
import RightContainer from  '../Components/RightContainer';
import Stars from '../Components/Stars';
import WorkContent from './WorkContent/WorkContent';
import Main from './WorkContent/Main';
import WorkImage from './WorkContent/WorkImage';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	@media screen and (max-width: 768px) {
		height: 100%;
		width: 100%;
	}
`;

class Work extends Component {
	constructor(props) {
		super(props);
		this.components = {
			main: Main,
		};
		this.state = {
			showWork: 'main',
		}
	}
	changeState(work) {
		this.setState({
			showWork: work,
		});
	}
	render() {
		const Component = this.components[this.state.showWork];
		return( 
			<Container id="experience">
				<RightContainer
					show={
						<WorkContent
						changeState={(state) => this.changeState(state)}
						component={<Component />}
						styled="work"
						/>
					} 
				/>
					<LeftContainer 
						show={<Stars component={<WorkImage />}/>}
						styled="work"
					/>
			</Container>
		)
	}
}

export default Work;
