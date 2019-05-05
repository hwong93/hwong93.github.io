/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import profile from '../../img/profile.jpg';
import portfolio from '../../img/houtai-wong-portfolio.pdf';
import InViewMonitor from 'react-inview-monitor';

const HomeStarContent = () => {
	return (
		<div className="contact-info">
			<InViewMonitor
				classNameNotInView='vis-hidden'
				classNameInView='animated fadeIn' // fadeInLeft, or fadeInRight
			>
			<div className="profile">
				<img src={profile} alt="profile" className="picture" />
			</div>
			</InViewMonitor>
			<InViewMonitor
				classNameNotInView='vis-hidden'
				classNameInView='animated fadeIn' // fadeInLeft, or fadeInRight
			>
			<h1>Hou-Tai Wong</h1>
			<hr />
			</InViewMonitor>
			<InViewMonitor
				classNameNotInView='vis-hidden'
				classNameInView='animated fadeIn' // fadeInLeft, or fadeInRight
			>
			<h3>FullStack Web Developer</h3>
			</InViewMonitor>
			<InViewMonitor
				classNameNotInView='vis-hidden'
				classNameInView='animated fadeInUp' // fadeInLeft, or fadeInRight
			>
			<div className="contact">
				<ul>
					<a href="https://github.com/hwong93" target="_blank" title="Github"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
					<a href="mailto:houtaiw61@gmail.com?Subject=Job%20Inquiry%20from%20your%20portfolio" target="_top" title="Email Me"><i className="fa fa-envelope fa-2x" aria-hidden="true"></i></a>
					<a href="https://www.linkedin.com/in/houtaiwong" target="_blank" title="LinkedIn"><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
					<a href={portfolio} target="_blank" title="Download Resume"><i className="fa fa-file-pdf-o fa-2x" aria-hidden="true"></i></a>
				</ul>
			</div>
			</InViewMonitor>
		</div>
	);
}

export default HomeStarContent;