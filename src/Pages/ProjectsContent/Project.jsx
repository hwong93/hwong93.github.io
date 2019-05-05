import React, { Component } from 'react';
import styled from 'styled-components';
import {green, lightGreen} from '../../colors';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	flex-basis: 100%;
	flex: 1;
	margin-bottom: 20px;
	cursor: pointer;
	height: auto;
	transition: all 5s;
	border: ${props => props.chosen ? `5px solid ${lightGreen}` : 'none'}
	transition: height 5s ease-out;
	@media screen and (min-width: 768px) {
		margin-bottom: 0px;
	}
`;

const ImageContainer = styled.div`
	display: block;	
	height: auto;
	overflow: hidden;
	position: relative;
	cursor: pointer;
	@media screen and (min-width: 768px) {
		width: 100%;
		max-height: 75px;
	}
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
`;

const ContentContainer = styled.div`
	display: block;
	padding: 10px;
	max-height: ${props => props.chosen ? '100px%' : '0px'};
	overflow:hidden;
	@media screen and (min-width: 768px) {
		display: none;
	}
`;

const Subtitle = styled.h4`
	color: ${green};
	margin-bottom: 5px;
`;

const Slogan = styled.p`
	font-size: 0.8rem;
	padding-left: 5px;
	border-left: 2px solid ${green};
`;

const IconLink = styled.a`
	color: ${green};
	padding-right: 10px;
`;


class Project extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showMore: false,
		};
	}
	show() {
		const { showMore } = this.state;
		this.setState({
			showMore: !showMore,
		});
	}
	render() {
		const project = this.props.project;
		const backend = project.backend.map((e, i) => {
			const length = project.backend.length;
			const skill = e;
			if (i !== length - 1) {
				return skill + ', ';
			}
			return skill;
		});
		const frontend = project.frontend.map((e, i) => {
			const length = project.frontend.length;
			const skill = e;
			if (i !== length - 1) {
				return skill + ', ';
			}
			return skill;
		});
		const api = project.api.map((e, i) => {
			const length = project.frontend.length;
			const skill = e;
			if (i !== length - 1) {
				return skill + ', ';
			}
			return skill;
		});
		return (
			<Container
				chosen={this.props.chosen.title === project.title}
			>
				<ImageContainer
					role="button"
					tabIndex="-1"
					onClick={() => this.props.showMore(project)}
				>
					<Image src={project.image} alt={project.title}></Image>
				</ImageContainer>
				<ContentContainer
					key={`${this.props.chosen.title}_${project.title}`}
					chosen={this.props.chosen.title === project.title}
					className="animated fadeIn"
				>
					<Slogan>{project.slogan}</Slogan>
					{
						backend.length > 0 && (
							<div>
								<Subtitle>Backend</Subtitle>
								{backend}
							</div>
						)
					}
					{
						frontend.length > 0 && (
							<div>
								<Subtitle>Frontend</Subtitle>
								{frontend}
							</div>
						)
					}
					{
						api.length > 0 && (
							<div>
								<Subtitle>APIs</Subtitle>
								{api}
							</div>
						)
					}
					{
						project.website && (
							<IconLink href={project.website} title={project.title}><i className="fas fa-external-link-alt fa-2x" style={{marginTop: '20px'}}></i></IconLink>
						)
					}
					<IconLink href={project.github} title={project.title}><i className="fab fa-github fa-2x" style={{marginTop: '20px'}}></i></IconLink>
				</ContentContainer>
			</Container>
		);
	}
}

export default Project;