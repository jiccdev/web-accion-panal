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

/** HOME - SERVICIOS */

export const servicesData = [
	{
		id: 1,
		title: 'Software Inmobiliario',
		subtitle: 'Panal',
		desc: 'Mejora las métricas de eficiencia de tu negocio con la tecnología con la que desarrollamos nuestras herramientas.',
		href: '#panal-section',
		src: '',
	},
	{
		id: 2,
		title: 'Sistema avanzado de canje',
		subtitle: 'Yo canjeo',
		desc: 'Sistema de canje basado en la inteligencia de datos, que te mostrara las unidades disponibles y optimizara el proceso para que sea efectivo.',
		href: '#yo-canjeo-section',
		src: '',
	},
	{
		id: 3,
		title: 'Desarrollo Web',
		subtitle: 'Paginas Web',
		desc: 'Desarrollo y diseño de sitios web responsives para corredores inmobiliarios, con la que podrás sincronizar tus publicaciones con nuestro integrador y hacer crecer tu marca.',
		href: '#paginas-web-section',
		src: '',
	},
];
