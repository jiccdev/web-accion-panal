import { iconsList } from '@/components/icons';

const { SiFastly } = iconsList;

export const navigationData = [
	{
		id: 1,
		name: 'Inicio',
		href: '/#inicio-section',
	},
	{
		id: 2,
		name: 'Nosotros',
		href: '/#nosotros-section',
	},
	{
		id: 3,
		name: 'Servicios',
		href: '/#servicios-section',
	},
	{
		id: 4,
		name: 'Contacto',
		href: '/#contacto-section',
	},
	{
		id: 5,
		name: 'Intranet',
		href: '/#intranet-section',
	},
];

/** HOME - LE APOSTAMOS A LA ERA DIGITAL */
export const digitalAgeCardData = [
	{
		id: 1,
		title: 'Optimiza tu tiempo',
		desc: 'Te brindamos soluciones que te permitirán gestionar de manera mas rápida y sencilla los procesos.',
		icon: <SiFastly />,
	},
	{
		id: 2,
		title: 'Mayor productividad',
		desc: 'Mejora las métricas de eficiencia de tu negocio con la tecnología con la que desarrollamos nuestras herramientas.',
		icon: <SiFastly />,
	},
	{
		id: 3,
		title: 'Ganancias',
		desc: 'Con nuestras herramientas tendrás más oportunidades de cerrar negocios',
		icon: <SiFastly />,
	},
];
