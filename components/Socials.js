
import Link from 'next/link';
import { RiYoutubeLine, RiLinkedinLine, RiGithubLine, RiInstagramLine, RiFacebookLine, RiBehanceLine, RiPinterestLine } from 'react-icons/ri'

const Socials = () => {
  return <div className='flex items-center gap-x-5 text-2xl'>
    <Link href={'https://github.com/Savindugunasekar'} className='hover:text-accent transition-all duration-300'>
      <RiGithubLine />
    </Link>
    <Link href={'https://www.linkedin.com/in/savindu-gunasekara/'} className='hover:text-accent transition-all duration-300'>
      <RiLinkedinLine />
    </Link>
    <Link href={''} className='hover:text-accent transition-all duration-300'>
      <RiInstagramLine />
    </Link>
    <Link href={''} className='hover:text-accent transition-all duration-300'>
      <RiFacebookLine />
    </Link>



  </div>;
};

export default Socials;
