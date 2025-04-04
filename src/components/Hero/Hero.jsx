import React from 'react';
// import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
const Hero = () => {
    return (
        <div classNameName='heroContainer'>
            <div classNameName='heroText'>
            <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
  <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20"></div>
  <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white ring-1 shadow-xl shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
  <div className="mx-auto max-w-2xl lg:max-w-4xl">
    <img className="mx-auto h-50 my-4 size-40 rounded-full" src={img2} ></img> 
    <figure className="mt-10">
        <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
        <h2>Hi, I'm Hridoy</h2>
        <p>Software Engineer</p>
      </blockquote>
    </figure>
  </div>
</section>

            </div>
            
        </div>
    );
};

export default Hero;