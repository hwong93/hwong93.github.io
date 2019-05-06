import React from 'react';
import styled from 'styled-components';

const WorkContainer = styled.div`
	padding: 0px 60px;
	position: relative;
	top: 50%;
	transform: translateY(-50%);
	@media screen and (max-width: 768px) {
		padding: 0px 20px;
		top: unset;
		transform: none;
	}
	@media screen and (max-width: 1440px) {
		padding: 0px 20px 20px;
	}

`;

const WorkContent = ({changeState, component}) => {
	return (
		<WorkContainer>
			{component}
		</WorkContainer>
	)
}

export default WorkContent;
