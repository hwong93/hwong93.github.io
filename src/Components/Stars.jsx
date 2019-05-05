import React from 'react';

const Stars = ({component, style}) => {
	return (
		<div className="container">
			<div className="sky">
				{component}
				<div className="stars"></div>
				<div className="stars1"></div>
				<div className="stars2"></div>
			</div>
  	</div>
	);
}

export default Stars;
