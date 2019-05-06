import React from 'react';
import styled from 'styled-components';
import { expertise } from '../expertise';
import SkillContent from './SkillContent/SkillContent';
import { green } from '../colors';
import { crete } from '../font';

const SkillsContainer = styled.div`
	width: 100%;
	margin-top: 70px;
`;

const SkillsContent = styled.div`
	width: 100%;
	max-width: 1024px;
	margin-top: 70px;
	margin: 0 auto;
	padding: 40px;
	@media screen and (min-width: 768px) {
		width: 90%;
		padding: 0px;
	}
`;

const Title = styled.h2`
	font-family: ${crete};
	color: ${green};
`;


const Skills = () => {
	return (
		<SkillsContainer id="skills">
			<SkillsContent>
				<Title>Skills</Title>
				{
					expertise.map(section => (
						<SkillContent
							key={section.title}
							title={section.title}
							skillSet={section.skillSet}
						/>
					))
				}
			</SkillsContent>
		</SkillsContainer>
	);
}

export default Skills;