import React from 'react';

const HeadingSection = ({ title, subtitle, alignment, className, color }) => {
	const renderClassColor = () => {
		switch (color) {
			case 'violet':
				return 'text-violet-900';
			case 'teal':
				return 'bg-teal-500';
			default:
				return 'bg-gray-100';
		}
	};

	return (
		<div className={alignment}>
			<h2 className={`${className} ${renderClassColor}`}>{title}</h2>
			<p>{subtitle}</p>
		</div>
	);
};

export default HeadingSection;
