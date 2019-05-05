import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 50%;
	overflow: hidden;
	height: 100%;
	display: inline-block;
	float: left;

	@media screen and (max-width: 768px) {
		width: 100%;
		height: ${props => props.props.height};
		float: none;
		display: block;
	}
`;

class RightContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			next: 'yes',
			style: '',
		}
	}
	render() {
		const style = this.props.style;
		let compProps = {};
		if (style === 'home') {
			compProps.height = "100%";
		}
		if (style === 'work') {
			compProps.height = '100%';
		}
		return (
			<Container props={compProps}>
				{ this.props.show }
			</Container>
		);
	}
}

export default RightContainer;
