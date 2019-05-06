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


class LeftContainer extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			show: '',
		}
	}
	render() {
		const style = this.props.styled;
		const compProps = {};
		if (style === 'home') {
			compProps.height = '100vh';
		}
		if (style === 'work') {
			compProps.height = 'auto';
		}
		return (
			<Container props={compProps}>
				{ this.props.show }
			</Container>
		);
	}
}


export default LeftContainer;
