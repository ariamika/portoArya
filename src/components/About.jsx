import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';
const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' />
        <article>
          <SectionTitle text='About Me' />
          <p className='text-slate-600 mt-8 leading-loose'>
            i am a highly determined individual and passionate about
            latest technologies, Bachelor of Computer Sciences and
            really interested in Web Development. Eager to learn a new
            things and up to any challenges.Equally good in individual
            works and team works.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
