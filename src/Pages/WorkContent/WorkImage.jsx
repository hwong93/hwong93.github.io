import React from 'react';
import styled from 'styled-components';
import logo from '../../img/JB-logo-white.svg';
import InViewMonitor from 'react-inview-monitor';

const ImageContainer = styled.div`
	position: absolute;
	top: 50%;
	right: 0;
	left: 0;
	transform: translateY(-50%);
`;

const Img = styled.img.attrs({
	src: logo,
})`
	width: 80%;
`;

const WorkImage = () => {
	return (
		<ImageContainer>
			<InViewMonitor
				classNameNotInView='vis-hidden'
				classNameInView='animated fadeInUp' // fadeInLeft, or fadeInRight
			>
				<Img/>
			</InViewMonitor>
		</ImageContainer>
	);
};

export default WorkImage;