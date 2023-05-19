import Link from 'next/link';
import Image from 'next/image';
import AccionPanalLogo from '../../assets/img/logo/accion-panal-logo.webp';

const Logo = () => {
  return (
    <Link href="/">
      {AccionPanalLogo && (
        <Image
          src={AccionPanalLogo}
          alt="unne-logo"
          width={115}
          height={200}
          className="h-[60px] xl:h-[90px] w-auto"
        />
      )}
    </Link>
  );
};

export default Logo;
