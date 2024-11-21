import heroImg from '../assets/profile-picture.png';
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='bg-blue-100 py-20'>
      <div className='align-element grid md:grid-cols-2 items-center gap-8 sm:grid-cols-3'>
        <article>
          <h1 className='text-7xl font-bold tracking-wider'>Arya Bagaskara</h1>
          <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>
            Back-End Developer
          </p>
          {/* <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'>
            turning ideas into interactive reality
          </p> */}
          <div className='flex gap-x-4 mt-4'>
            <a href='https://web.whatsapp.com/' target='blank'>
              <FaWhatsapp  className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
            <a href='https://www.facebook.com/' target='blank'>
              <FaFacebook className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
            <a href='https://www.instagram.com/' target='blank'>
              <FaInstagram className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
          </div>
        </article>
        <article className='hidden md:block'>

          <img src={heroImg}  className="w-1000 rounded-full"/> 
    
        </article>
      </div>
    </div>
  );
};
export default Hero;
