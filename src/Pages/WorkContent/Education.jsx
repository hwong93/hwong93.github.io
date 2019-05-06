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

const Education = () => {
	return (
		<div style={{marginTop: '20px', padding: '20px'}}>
			<h1>Education:</h1>
			<InViewMonitor
				classNameNotInView='vis-hidden'
				classNameInView='animated fadeIn' // fadeInLeft, or fadeInRight
				intoViewMargin="-10%"

			>
			<div className="work-header">
				<WorkTitleContainer className="work-title">
					<WorkTitle>University Of Connecticut</WorkTitle>
				</WorkTitleContainer>
				<WorkYears>September 2011 - May 2015</WorkYears>
			</div>
			
			</InViewMonitor>
			<InViewMonitor
				classNameNotInView='vis-hidden'
				classNameInView='animated fadeIn' // fadeInLeft, or fadeInRight\
				intoViewMargin="-10%"

			>
			<WorkDescription>
				Major: Economics <br />
				Minor: Computer Science
			</WorkDescription>
			</InViewMonitor>

			<InViewMonitor
				classNameNotInView='vis-hidden'
				classNameInView='animated fadeIn' // fadeInLeft, or fadeInRight
				intoViewMargin="-10%"

			>
			<div className="work-header" style={{marginTop: '60px'}}>
				<WorkTitleContainer className="work-title">
					<WorkTitle>Bitmaker</WorkTitle>
				</WorkTitleContainer>
				<WorkYears>March 2016 - May 2016</WorkYears>
			</div>
			
			</InViewMonitor>
			<InViewMonitor
				classNameNotInView='vis-hidden'
				classNameInView='animated fadeIn' // fadeInLeft, or fadeInRight\
				intoViewMargin="-10%"

			>

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
						Finished nine week intensive web development course.
					</ListLI>
					<ListLI animationDelay="">
						Voted best student teacher and most friendly student in the class.
					</ListLI>
				</InViewMonitor>
				</ul>
			</WorkAchievements>
		</div>
	);
}	

export default Education;
