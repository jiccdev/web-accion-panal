import React, { Fragment } from 'react';
import Image from 'next/image';

export const SimpleSection = ({ item }) => {
	const { title, subtitle, desc, href, src } = item;

	console.log(item);

	return (
		<Fragment>
			<div className="flex flex-col items-start justify-center mt-18 xl:mt-32">
				<h2 className="flex my-auto text-xl sm:text-3xl xl:text-4xl tracking-tight text-gray-900">
					{title}
				</h2>
			</div>

			<div className="flex flex-col items-center justify-center mt-18 xl:mt-32">
				<Image
					src={src}
					alt={`service-${title}`}
					loader={() => src}
					className="h-40 sm:h-56 xl:h-80 w-auto"
					width={100}
					height={150}
				/>
			</div>
		</Fragment>
	);
};

export const InvertedSection = ({ item }) => {
	const { title, src, children } = item;
	return (
		<Fragment>
			<div className="flex flex-col items-center justify-center mt-18 xl:mt-32 bg-gray-50">
				<Image
					src={src}
					alt={`img-${title}`}
					loader={() => src}
					className="h-40 sm:h-56 xl:h-80 w-auto flex-col-reverse"
					width={100}
					height={150}
				/>
			</div>

			<div className="flex flex-col items-start justify-center mt-18 xl:mt-32 bg-gray-50 p-5">
				<h2 className="flex my-auto text-xl sm:text-3xl xl:text-4xl tracking-tight text-gray-900">
					{title}
				</h2>
				<ul className="pl-3">
					{children &&
						children.map(itemList => (
							<li key={itemList.id} className="flex flex-col my-5 xl:my-8">
								<p className="text-md text-gray-500">
									<strong className="text-gray-900 flex items-center mr-2">
										<span className="mr-1 text-green-600">{itemList.icon}</span>
										{itemList.hightligthText}
									</strong>{' '}
									{itemList.desc}
								</p>
							</li>
						))}
				</ul>
			</div>
		</Fragment>
	);
};
