import { iconsList } from '@/components/icons';

const { SiFastly } = iconsList;

const { GiArtificialIntelligence } = iconsList;

const { MdSecurity } = iconsList;

const { GiReceiveMoney } = iconsList;

const { BsFillHouseDoorFill } = iconsList;

const { BiTimer } = iconsList;

const { GiPositionMarker } = iconsList;

const { SlBadge } = iconsList;

export const navigationData = [
  {
    id: 1,
    name: 'Inicio',
    href: 'inicio-section',
  },
  {
    id: 2,
    name: 'Nosotros',
    href: 'nosotros-section',
  },
  {
    id: 3,
    name: 'Servicios',
    href: 'servicios-section',
    children: [
      {
        id: 1,
        name: 'Panal',
        href: 'panal-services',
      },
      {
        id: 2,
        name: 'Yo canjeo',
        href: 'yo-canjeo-services',
      },
      {
        id: 3,
        name: 'Página web',
        href: 'pagina-web-services',
      },
    ],
  },
  {
    id: 4,
    name: 'Contacto',
    href: 'contacto-section',
  },
  {
    id: 5,
    name: 'Intranet',
    href: 'http://190.114.255.247:195',
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
    src: 'https://res.cloudinary.com/drd52d73n/image/upload/v1683216441/Panal/laptop_ojfzc6.png',
  },
  {
    id: 2,
    title: 'Sistema avanzado de canje',
    subtitle: 'Yo canjeo',
    desc: 'Sistema de canje basado en la inteligencia de datos, que te mostrara las unidades disponibles y optimizara el proceso para que sea efectivo.',
    href: '#yo-canjeo-section',
    src: 'https://res.cloudinary.com/drd52d73n/image/upload/v1683216056/Panal/imageCanje.png',
  },
  {
    id: 3,
    title: 'Desarrollo Web',
    subtitle: 'Paginas Web',
    desc: 'Desarrollo y diseño de sitios web responsives para corredores inmobiliarios, con la que podrás sincronizar tus publicaciones con nuestro integrador y hacer crecer tu marca.',
    href: '#paginas-web-section',
    src: 'https://res.cloudinary.com/drd52d73n/image/upload/v1683215697/Panal/imageDisplay.png',
  },
];

/* ABOUT SECTION */

export const mainInfoAbout = [
  {
    id: 1,
    title:
      'Aportamos valor a la labor del corredor de propiedades junto a la innovación',
    img: 'https://res.cloudinary.com/drd52d73n/image/upload/v1683048443/Panal/image1.png',
    children: [
      {
        id: 1,
        strongName: 'Acción Panal',
        name: 'nace de la necesidad de nuevas e innovadoras herramientas que ayuden a optimizar el corretaje inmobiliario. Creamos un proyecto que cree firmemente en la era digital y la evolucion del mercado inmobiliario en Chile.',
      },
      {
        id: 2,
        strongName: '',
        name: 'Somos una empresa dedicada al desarrollo de Software y herramientas que van orientadas a la mejora del trabajo del corredor, creadas con inteligencia artificial y análisis de datos.',
      },
    ],
  },
];

export const statsClients = [
  {
    id: 1,
    stats: 300,
    title: 'Ejecutivos inmobiliarios trabajan con nosotros.',
  },
  {
    id: 2,
    stats: 7000,
    title: 'Publicaciones en nuestra plataforma Panal.',
  },
  {
    id: 3,
    stats: 10000,
    title: 'Visitas de clientes potenciales a nuestra plataforma.',
  },
];

export const dataClientsCarousel = [
  {
    id: 1,
    title: 'Banco de Chile',
    img: 'https://res.cloudinary.com/dbrhjc4o5/image/upload/v1680029041/unne-media/bancos/BancoChile_rseopu.png',
    href: 'https://portales.bancochile.cl/personas',
  },
  {
    id: 2,
    title: 'Banco Security',
    img: 'https://res.cloudinary.com/dbrhjc4o5/image/upload/v1680029041/unne-media/bancos/BANCOSECURITY_hs4t1l.png',
    href: 'https://personas.bancosecurity.cl/',
  },
  {
    id: 3,
    title: 'BCI',
    img: 'https://res.cloudinary.com/dbrhjc4o5/image/upload/v1680029041/unne-media/bancos/bci_zefpfw.png',
    href: 'https://www.bci.cl/personas',
  },
  {
    id: 4,
    title: 'Met Life',
    img: 'https://res.cloudinary.com/dbrhjc4o5/image/upload/v1680029041/unne-media/bancos/metlife_isrjth.png',
    href: 'https://w3.metlife.cl/',
  },
  {
    id: 5,
    title: 'Banco Scotiabank',
    img: 'https://res.cloudinary.com/dbrhjc4o5/image/upload/v1680029041/unne-media/bancos/Scotiabank_nrdmel.png',
    href: 'https://www.scotiabankchile.cl/',
  },
  {
    id: 6,
    title: 'Banco TrueCapital',
    img: 'https://res.cloudinary.com/dbrhjc4o5/image/upload/v1680029041/unne-media/bancos/TrueCapital_yuwaip.png',
    href: 'https://www.truecapital.cl/',
  },
];

/*SERVICIOS */

export const dataPortalCarousel = [
  {
    id: 1,
    title: 'Portal inmobiliario',
    img: 'https://res.cloudinary.com/dvdb33uyj/image/upload/v1683742380/Projects/accion-panal/img/Client/png/portalinmobiliario_caidlw.png',
    href: 'https://www.portalinmobiliario.com/',
  },
  {
    id: 2,
    title: 'Toc toc',
    img: 'https://res.cloudinary.com/dvdb33uyj/image/upload/v1683742380/Projects/accion-panal/img/Client/png/toctoc_m7xp0v.png',
    href: 'https://www.toctoc.com/',
  },
  {
    id: 3,
    title: 'Yapo',
    img: 'https://res.cloudinary.com/dvdb33uyj/image/upload/v1683742380/Projects/accion-panal/img/Client/png/yapo_rloeg8.png',
    href: 'https://new.yapo.cl/',
  },
  {
    id: 4,
    title: 'Top Propiedades',
    img: 'https://res.cloudinary.com/dvdb33uyj/image/upload/v1683742380/Projects/accion-panal/img/Client/png/topPropiedades_m5wkgw.png',
    href: 'https://www.toppropiedades.cl/',
  },
];

export const KanjeCard = [
  {
    id: 1,
    title: 'SISTEMA INTELIGENTE',
    desc: 'Nuestro sistema te ayudara a conseguir de manera sencilla y eficaz la propiedad con las características adecuadas o al cliente interesado',
    icon: <GiArtificialIntelligence />,
  },
  {
    id: 2,
    title: 'SEGURIDAD',
    desc: 'Contamos con un sistema que te brinda seguridad y transparencia en el proceso de canje',
    icon: <MdSecurity />,
  },
  {
    id: 3,
    title: 'MAS INGRESOS',
    desc: 'Amplia tu cartera de propiedades captando nuevos y potenciales clientes y cierra la operaciones lo mas pronto posible.',
    icon: <GiReceiveMoney />,
  },
];

export const BeneficIcons = [
  {
    id: 1,
    title: 'VISIBILIDAD',
    desc: 'Aumenta la visibilidad de tus propiedades para tener más posibilidades de cerrar negocios.',
    icon: <BsFillHouseDoorFill />,
  },
  {
    id: 2,
    title: 'AHORRA TIEMPO',
    desc: 'Publica y administra tu cartera de una manera fácil y eficaz para que ahorres tiempo y te dediques a arrendar o a vender.',
    icon: <BiTimer />,
  },
  {
    id: 3,
    title: 'POSICIONAMIENTO',
    desc: 'Promociona tu empresa y dale mayor posicionamiento para que compitas con los mejores corredores.',
    icon: <GiPositionMarker />,
  },

  {
    id: 4,
    title: 'PROFESIONALISMO',
    desc: 'Transmite un aspecto profesional y brinda seguridad a los clientes.',
    icon: <SlBadge />,
  },
];
