import React from 'react';
import styled from 'styled-components';
import { expertise } from '../expertise';
import SkillContent from './SkillContent/SkillContent';
import { green } from '../colors';
import { noto } from '../font';

const SkillsContainer = styled.div`
	width: 100%;
	margin-top: 70px;
`;

const SkillsContent = styled.div`
	width: 90%;
	max-width: 1044px;
	margin-top: 70px;
	margin: 0 auto;
`;

const Title = styled.h2`
	font-family: ${noto};
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