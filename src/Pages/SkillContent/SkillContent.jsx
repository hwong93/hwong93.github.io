import React from 'react';
import styled from 'styled-components';
import SkillContainer from './Skill';
import {crete} from '../../font';

const Container = styled.div`
	box-shadow:0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
	padding: 20px 30px;
	margin-bottom: 1.8rem;
`;

const Header = styled.div`
	display: block;
	width: 100%;
	border-bottom: 1px solid rgba(0,0,0,0.16);
`;

const HeaderTitle = styled.h2`
	margin: 20px 0px;
	font-family: ${crete};
`;

const SkillSet = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	margin: 25px 0px 30px;
	text-align: center;
	overflow: hidden;
`;

const SkillContent = ({title, skillSet}) => {
	return (
		<Container>
			<Header>
				<HeaderTitle>{title}</HeaderTitle>
			</Header>
			<SkillSet>
				{
					skillSet.map(skill => (
						<SkillContainer key={skill.name} skill={skill}></SkillContainer>
					))
				}
			</SkillSet>
		</Container>
	);
}

export default SkillContent;