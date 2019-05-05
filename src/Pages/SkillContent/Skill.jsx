import React from 'react';
import styled from 'styled-components';
import { noto } from '../../font';
import { useCountUp } from 'react-countup';
import InViewMonitor from 'react-inview-monitor';


const SkillContainer = styled.div`
	position: relative;
	flex: 0 1 150px;
	height: 150px;
	padding: 20px 0px;
	text-align: center;
	font-family: ${noto};
	font-size: 1rem;
	overflow:hidden;
	margin: 0 auto;
	cursor: pointer;
`;

const SkillLogo = styled.img`
	height: auto;
	max-width: 150px;
	max-height: 85px;
	margin: 0 auto;
	vertical-align: middle;
	display: block;
	padding-bottom: 10px;
`;

const Proficiency = styled.div`
	display: block;
	background-color: rgba(0,0,0,0.3);
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	height: 0%;
	transition: height 0.8s ease-in-out;
	${SkillContainer}:hover & {
		height: 100%;
		transition: height 0.8s ease-in-out;
	}
`;
const PercentageTitle = styled.span`
	font-size: 1.35rem;
	display: block;
	font-family: ${noto};
`;

const Percentage = styled.div`
	font-family: ${noto};
	font-size: 3.5rem;
	color: #fff;
	z-index: 10;
	height: 0px;
	transition: height 0.8s ease-in-out;
	position: relative;
	padding: 20px;
	${SkillContainer}:hover & {
		height: 100%;
		transition: height 0.8s ease-in-out;
	}
`;
const Skill = ({skill}) => {
  const { countUp, start } = useCountUp({
    start: 0,
		end: skill.proficiency,
		suffix: '%',
    delay: 1000,
    duration: 2,
    onPauseResume: () => console.log('Paused or resumed!'),
    onStart: ({ pauseResume }) => console.log(pauseResume),
    onEnd: ({ pauseResume }) => console.log(pauseResume),
  });
  return (
		<SkillContainer
			onMouseEnter={start}
		>
		<InViewMonitor
			classNameNotInView='vis-hidden'
			classNameInView='animated fadeIn' // fadeInLeft, or fadeInRight
			intoViewMargin="-10%"
		>
			<SkillLogo src={skill.logo} alt=""/>
			{skill.name}
			<Proficiency>
				<Percentage><PercentageTitle>Proficiency:</PercentageTitle>{countUp}</Percentage>
			</Proficiency>
		</InViewMonitor>
		</SkillContainer>
  );
};

export default Skill;