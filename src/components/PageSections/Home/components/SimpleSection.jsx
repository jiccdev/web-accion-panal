import React, { Fragment } from 'react';
import Image from 'next/image';
import { Fade } from "react-awesome-reveal";
import Button from '@/components/Button/Button';

const margin = 'mt-18 xl:mt-32';
const paddingContent = 'px-7 py-7';

export const SimpleSection = ({ item }) => {
	const { title, subtitle, desc, href, src } = item;

	return (
		<Fragment>
			<div className='flex gap-6 justify-center items-center flex-wrap flex-col-reverse md:flex-nowrap  md:flex-row '>
				<Fade direction='left' triggerOnce>
					<div className={`${margin} ${paddingContent} w-full min-[480px]:w-[406px] max-w-[406px] bg-white drop-shadow-xl rounded-2xl flex flex-col justify-between gap-4`}>
						<span className='mb-1 text-panal-orange bg-panal-orange/25 w-max p-2 rounded-xl'>{title}</span>
						<div className='flex flex-col gap-2'>
							<h2 className="text-xl sm:text-3xl xl:text-4xl tracking-tight text-gray-900">
								{subtitle}
							</h2>
							<p className='text-[#A0A0A0]'>{desc}</p>
						</div>
						<Button href={href} className='w-max mt-5 border-2 transition-all duration-300 rounded-md px-3 border-panal-orange text-panal-orange hover:bg-panal-orange hover:text-white'>
							Más información
						</Button>
					</div>
				</Fade>
				<Fade direction='right' triggerOnce>
					<div className={`flex flex-col items-center justify-center ${margin}`}>
						<Image
							src={src}
							alt={`service-${title}`}
							loader={() => src}
							className="h-40 sm:h-56 xl:h-80 w-auto"
							width={100}
							height={150}
						/>
					</div>
				</Fade>
			</div>
		</Fragment>
	);
};

export const SimpleSectionInverted = ({ item }) => {
	const { title, subtitle, desc, href, src } = item;

	return (
		<Fragment>
			<div className='flex gap-6 justify-center items-center flex-wrap md:flex-nowrap'>
				<Fade direction='left' triggerOnce>
					<div className={`flex flex-col items-center justify-center ${margin}`}>
						<Image
							src={src}
							alt={`service-${title}`}
							loader={() => src}
							className="h-40 sm:h-56 xl:h-80 w-auto"
							width={100}
							height={150}
						/>
					</div>
				</Fade>
				<Fade direction='right' triggerOnce>
					<div className={`${margin} ${paddingContent} w-[406px] max-w-[406px] min-h-[300px] bg-white drop-shadow-xl rounded-2xl flex flex-col justify-between gap-4`}>
						<span className='mb-1 text-panal-orange bg-panal-orange/25 w-max p-2 rounded-xl'>{title}</span>
						<div className='flex flex-col gap-2'>
							<h2 className="text-xl sm:text-3xl xl:text-4xl tracking-tight text-gray-900">
								{subtitle}
							</h2>
							<p className='text-[#A0A0A0]'>{desc}</p>
						</div>
						<Button href={href} className='w-max mt-5 border-2 transition-all duration-300 rounded-md px-3 border-panal-orange text-panal-orange hover:bg-panal-orange hover:text-white'>
							Más información
						</Button>
					</div>
				</Fade>

			</div>
		</Fragment>
	);
};

export const InvertedSection = ({ item }) => {
	const { title, src, children } = item;
	return (
		<Fragment>
			<div className={`flex flex-col items-center justify-center bg-gray-50 ${margin}`}>
				<Image
					src={src}
					alt={`img-${title}`}
					loader={() => src}
					className="h-40 sm:h-56 xl:h-80 w-auto flex-col-reverse"
					width={100}
					height={150}
				/>
			</div>

			<div className={`flex flex-col items-start justify-center bg-gray-50 p-5 ${margin}`}>
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
