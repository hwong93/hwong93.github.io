import React, {Component} from 'react';
import styled from 'styled-components';
import { projects } from '../projects';
import { green } from '../colors';
import { crete } from '../font';
import Project from './ProjectsContent/Project';
import InViewMonitor from 'react-inview-monitor';

const ProjectsContainer = styled.div`
	width: 100vw;
	height: 100vh;
	display: table;
	@media screen and (max-width: 768px) {
		height: 100%;
		width: 100%;
	}
`;

const ProjectsContent = styled.div`
	display: table-cell;
	vertical-align: middle;
	@media screen and (min-width: 768px) {
		position: relative;
		overflow: hidden;
	}
`;

const Contain = styled.div`
	display: block;
	width: 80%;
	max-width: 1024px;
	margin: 0 auto;
	padding: 20px;
	clear: both;
	@media screen and (min-width: 768px) {
		padding: 40px;
	}
`;

const Title = styled.h2`
	display: block;
	color: ${green};
	font-family: ${crete};
`;

const LeftSide = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	width: 100%;
	@media screen and (min-width: 768px) {
		width: 30%;
		float: left;
	}
`;

const RightSide = styled.div`
	display: none;
	@media screen and (min-width: 768px) {
		display: block;
		width: 70%;
		float: left
		font-size: 1.15rem;
		padding: 0px;
		padding-left: 40px;
		height: 500px;
	}
`;

const Subtitle = styled.h3`
	color: ${green};
	margin-top: 0px;
	margin-bottom: 5px;
`;

const AssetContainer = styled.div`
	margin-bottom: 20px;
`;

const Slogan = styled.h3`
	font-size: 1rem;
	padding-left: 5px;
	border-left: 2px solid ${green};
`;

const IconLink = styled.a`
	color: ${green};
	padding-right: 10px;

	&:hover {
		color: grey;
	}
`;

const ContentContainer = styled.div`
	display: inline-block;
	width: auto;
	text-align: left;
	transition: all 2s ease-in-out;
`;

class Projects extends Component {
	constructor(props) {
		super(props);

		this.state = {
			project: projects[0],
		}
	}
	showMore(project) {
		this.setState({
			project,
		});
	}
	render() {
		const project = this.state.project;
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
			<ProjectsContainer id="projects">

				<ProjectsContent>
					<Contain>
						<Title>Projects</Title>
						<LeftSide>
							<InViewMonitor
								classNameNotInView='vis-hidden'
								classNameInView='animated fadeInUp' // fadeInLeft, or fadeInRight
								intoViewMargin="-10%"
							>
							<Project
								role="button"
								tabIndex="-1"
								chosen={project}
								project={projects[0]}
								showMore={(proj) => this.showMore(proj)}
							/>
							<Project
								role="button"
								tabIndex="-1"
								chosen={project}
								project={projects[1]}
								showMore={(proj) => this.showMore(proj)}
							/>
							<Project
								role="button"
								tabIndex="-1"
								chosen={project}
								project={projects[2]}
								showMore={(proj) => this.showMore(proj)}
							/>
							<Project
								role="button"
								tabIndex="-1"
								chosen={project}
								project={projects[3]}
								showMore={(proj) => this.showMore(proj)}
							/>
							</InViewMonitor>
						</LeftSide>
						<RightSide>
							<ContentContainer key={project.title} className="animated fadeInRight">
								<Subtitle>{project.title}</Subtitle>
								<Slogan>{project.slogan}</Slogan>
								{
									backend.length > 0 && (
										<AssetContainer>
											<Subtitle>Backend</Subtitle>
											{backend}
										</AssetContainer>
									)
								}
								{
									frontend.length > 0 && (
										<AssetContainer>
											<Subtitle>Frontend</Subtitle>
											{frontend}
										</AssetContainer>
									)
								}
								{
									api.length > 0 && (
										<AssetContainer>
											<Subtitle>APIs</Subtitle>
											{api}
										</AssetContainer>
									)
								}
								{
									project.website && (
										<IconLink href={project.website} title={project.title}><i className="fas fa-external-link-alt fa-2x" style={{marginTop: '20px'}}></i></IconLink>
									)
								}
								<IconLink href={project.github} title={project.title}><i className="fab fa-github fa-2x" style={{marginTop: '20px'}}></i></IconLink>
							</ContentContainer>
						</RightSide>
					</Contain>
				</ProjectsContent>
			</ProjectsContainer>
		);
	}
}

export default Projects;