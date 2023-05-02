import React from 'react';
import Link from 'next/link';

const Button = ({
	className = '',
	color = 'bg-amber-500',
	translate = '',
	sizeClass = 'px-4 py-3 sm:px-6',
	fontSize = 'text-sm sm:text-base font-medium',
	disabled = false,
	href = '',
	children,
	targetBlank,
	type = 'button',
	loading,
	onClick = () => {},
}) => {
	const CLASSES = ` ${color} relative h-auto uppercase inline-flex items-center justify-center rounded-lg transition-colors text-white hover:bg-amber-600 ${fontSize} ${sizeClass} ${translate} ${className} `;

	if (!!href) {
		return (
			<Link
				href={href}
				target={targetBlank ? '_blank' : undefined}
				className={`${CLASSES}`}
				onClick={onClick}
				rel="noopener noreferrer"
			>
				{children || `This is Link`}
			</Link>
		);
	}

	return (
		<button
			disabled={disabled || loading}
			className={`${CLASSES}`}
			onClick={onClick}
			type={type}
		>
			{children || `This is Button`}
		</button>
	);
};

export default Button;
