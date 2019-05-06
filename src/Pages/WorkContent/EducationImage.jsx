import React from 'react';
import styled from 'styled-components';
import uconn from '../../img/uconn-wordmark-single-white.png';
import bitmaker from '../../img/ga-bitmaker.svg';
import InViewMonitor from 'react-inview-monitor';

const ImageContainer = styled.div`
	padding: 60px 0px 10px
	margin: 20px 0px;
	@media screen and (min-width: 769px) {
		position: absolute;
		top: 50%;
		right: 0;
		left: 0;
		transform: translateY(-50%);
		padding: 0px;
		margin: 0px;
	}

`;

const Uconn = styled.img.attrs({
	src: uconn,
})`
	width: 80%;
	marign: 20px;
`;

const Bitmaker = styled.img.attrs({
	src: bitmaker,
})`
	width: 80%;
`;


const EducationImage = () => {
	return (
		<ImageContainer>
			<InViewMonitor
				classNameNotInView='vis-hidden'
				classNameInView='animated fadeInUp' // fadeInLeft, or fadeInRight
			>
				<Uconn logo={uconn}/>
				<Bitmaker logo={bitmaker}/>
			</InViewMonitor>
		</ImageContainer>
	);
};

export default EducationImage;