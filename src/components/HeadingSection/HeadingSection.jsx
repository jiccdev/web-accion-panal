import React from 'react';

const HeadingSection = ({ title, subtitle, alignment, className, color }) => {
	const renderClassColor = () => {
		switch (color) {
			case 'violet':
				return 'text-violet-900';
			case 'teal':
				return 'text-teal-500';
			default:
				return 'text-black';
		}
	};

	const setAlignment = () => {
		switch (alignment) {
			case 'start':
				return 'text-start';
			case 'center':
				return 'text-center';
			case 'end':
				return 'text-end';
			default:
				return 'text-center';
		}
	};

	return (
		<div className={`${setAlignment()} mx-auto w-[95%] md:w-[90%] xl:w-[80%]`}>
			<h2
				className={`${className} ${renderClassColor()} uppercase text-2xl xl:text-4xl font-bold my-2 py-2 border-b-4 border-amber-400`}
			>
				{title}
			</h2>
			<p className="text-lg xl:text-xl text-gray-600 my-4">{subtitle}</p>
		</div>
	);
};

export default HeadingSection;
