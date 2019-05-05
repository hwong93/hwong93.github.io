import React from 'react';
import styled from 'styled-components';
import portfolio from '../img/houtai-wong-portfolio.pdf';
import { green } from '../colors';
import { noto } from '../font';
import InViewMonitor from 'react-inview-monitor';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: table;
	@media screen and (max-width: 768px) {
		width: 100%;
		height: 100%;
	}
`;

const Content = styled.div`
	display: table-cell;
	vertical-align: middle;
	margin: 0 auto;
`;

const Form = styled.form`
	display: block;
	width: 80%;
	max-width: 1024px;
	margin: 0 auto;
	padding: 40px;
	text-align: right;
	@media screen and (max-width: 767px) {
		padding: 20px;
		margin-bottom: 70px;
	}
`;

const Title = styled.h2`
	text-align: left;
	color: ${green} !important;
`;

const Input = styled.input.attrs(({ type, name, placeholder}) => ({
	type,
	name,
	placeholder,
}))`
	display: block;
	width: 100%;
	margin-bottom: 10px;
	padding: 20px 10px;
	font-family: ${noto};
	box-sizing : border-box;
	border: 1px solid ${green};
	color: ${green};
	font-size: 1.15rem;
	&::-webkit-input-placeholder {
    color: ${green};
  }
`;

const TextArea = styled.textarea.attrs(({ name, placeholder }) => ({
	name,
	placeholder,
}))`
	display: block;
	width: 100%;
	padding: 20px 10px;
	resize: none;
	margin-bottom: 10px;
	font-size: 1.15rem;
	box-sizing : border-box;
	border-color: ${green};
	color: ${green};
	font-family: ${noto};
	height: 150px;
  &::-webkit-input-placeholder {
    color: ${green};
  }
`;

const BottomContainer = styled.div`
	width: 100%;
	position: relative;
	clear: both;
`;

const Submit = styled.button.attrs(({ type }) => ({
	type,
}))`
	border: none;
	padding: 20px 15px;
	background-color: ${green};
	color: #fff;
	font-family: ${noto};
	cursor: pointer;
	font-size: 1.15rem;
	border: 2px solid ${green};
	&:hover {
		background-color: white;
		color: ${green};
		transition: all 0.2s ease-in-out;
	}
`;

const IconContainer = styled.div`
	display: inline-block;
	padding: 20px 0px;
	float: left;
`;

const Icon = styled.a`
	text-decoration: none;
	vertical-align: middle;
	margin-right: 15px;
	color: grey;
	&:hover {
		transition: 1s;
		color: #99f2c8;
	}
`;


const Contact = () => {
	return (
		<Container >
				<Content>
					<InViewMonitor
						classNameNotInView='vis-hidden'
						classNameInView='animated fadeIn' // fadeInLeft, or fadeInRight
						intoViewMargin="-10%"
					>
					<Form method="POST" action="https://formspree.io/houtaiw61@gmail.com">
						<Title>Contact</Title>
						<Input type="text" name="name" placeholder="Name" />
						<Input type="email" name="email" placeholder="Your email" />
						<Input type="text" name="subject" placeholder="Subject" />
						<TextArea name="message" placeholder="Leave a message here..."></TextArea>
						<BottomContainer>
							<IconContainer>
								<Icon href="https://github.com/hwong93" target="_blank" title="Github"><i className="fa fa-github fa-2x" aria-hidden="true"></i></Icon>
								<Icon href="https://www.linkedin.com/in/houtaiwong" target="_blank" title="LinkedIn"><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></Icon>
								<Icon href={portfolio} target="_blank" title="Download Resume"><i className="fa fa-file-pdf-o fa-2x" aria-hidden="true"></i></Icon>
							</IconContainer>
							<Submit type="submit">Submit</Submit>
						</BottomContainer>
					</Form>
					</InViewMonitor>
				</Content>
		</Container>
	);
}

export default Contact;
