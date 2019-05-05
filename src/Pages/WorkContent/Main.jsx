import React from 'react';
import styled from 'styled-components';
import { green } from '../../colors';
import { crete, noto } from '../../font';
import Icon from '../../img/code-solid.svg';
import InViewMonitor from 'react-inview-monitor';

const WorkTitleContainer = styled.div`
	width: auto;
	display: block;
	clear:both;
`;

const WorkTitle = styled.h2`
	margin: 0;
	padding: 0;
	display: inline-block;
	font-family: ${crete};
`;

const WorkYears = styled.p`
	padding: 0;
	margin: 0;
`;

const WorkRole = styled.h4`
	width: auto;
	display: inline-block;
	float: right;
	@media screen and (max-width: 768px) {
		float: none;
		margin: 10px 0;
	}
`;

const WorkDescription = styled.p`
	padding: 0px 10px 0px;
	border-left: 5px solid ${green};
`;

const WorkAchievements = styled.div`
	opacity: 1;
`;

const ListLI = styled.li`
	font-family: ${noto};
	font-size: 1rem;
	margin-bottom: 10px;
	list-style-image: url('${Icon}');
	animation-delay: ${props => props.animationDelay ? props.animationDelay : ''}
`;

const Main = () => {
	return (
		<div>
			<h1>Work Experience:</h1>
			<InViewMonitor
				classNameNotInView='vis-hidden'
				classNameInView='animated fadeIn' // fadeInLeft, or fadeInRight
				intoViewMargin="-10%"

			>
			<div className="work-header">
				<WorkTitleContainer className="work-title">
					<WorkTitle>Julia Balfour LLC.</WorkTitle>
					<WorkRole>Fullstack Developer</WorkRole>
				</WorkTitleContainer>
				<WorkYears>~3 years</WorkYears>
				
			</div>
			
			</InViewMonitor>
			<InViewMonitor
				classNameNotInView='vis-hidden'
				classNameInView='animated fadeIn' // fadeInLeft, or fadeInRight\
				intoViewMargin="-10%"

			>
			<WorkDescription>
				is a full-service creative agency. As a developer I build and maintain primarily WordPress sites for many clients. While I mainly focus on php, I also utilize the latest tools and technologies, such as React, ElasticSearch (v5) and Ruby on Rails. 
			</WorkDescription>
			</InViewMonitor>
			<WorkAchievements className="acheivements">
				<InViewMonitor
					classNameNotInView='vis-hidden'
					classNameInView='animated fadeIn' // fadeInLeft, or fadeInRight
					intoViewMargin="-10%"

				>
					<WorkTitle>Achievements</WorkTitle>
				</InViewMonitor>
				<ul>
				<InViewMonitor
					classNameNotInView='vis-hidden'
					classNameInView='animated fadeInRight' // fadeInLeft, or fadeInRight
					intoViewMargin="-10%"

				>
					<ListLI animationDelay="">
						Built a custom Email Creation WordPress plugin which allowed users to use data from their site to create custom emails to send to their clients using third-party email marketing services (MailChimp(REST) or ExactTarget(SOAP)).
					</ListLI>
				</InViewMonitor>
				<InViewMonitor
					classNameNotInView='vis-hidden'
					classNameInView='animated fadeInRight' // fadeInLeft, or fadeInRight
					intoViewMargin="-10%"

				>
					<ListLI animationDelay="0.5s">
						Utilize ElasticSearch to create great user experience on client’s search functionality.
					</ListLI>
					</InViewMonitor >
					<InViewMonitor
					classNameNotInView='vis-hidden'
					classNameInView='animated fadeInRight' // fadeInLeft, or fadeInRight
					intoViewMargin="-10%"
				>
					<ListLI animationDelay="1s">
						Deploy and set up servers using AWS’s services like: Redis, RDS, Load Balancers, CodePipeline.
					</ListLI>
					</InViewMonitor >
					<InViewMonitor
					classNameNotInView='vis-hidden'
					classNameInView='animated fadeInRight' // fadeInLeft, or fadeInRight
					intoViewMargin="-10%"
				>
					<ListLI animationDelay="1.5s">
						Create DevOPs practices using services like AWS, Jenkins, Git.
					</ListLI>
					</InViewMonitor >
				</ul>				
			</WorkAchievements>
		</div>
	);
}	

export default Main;
