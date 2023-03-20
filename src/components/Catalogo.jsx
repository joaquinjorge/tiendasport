import React from 'react'
import { Link } from 'react-router-dom'

const Catalogo = (props) => {
  return (
    <>
    <div className='hero'>
   <Link className='titulo' to="productos"> <button ><h2 className='titulo'> {props.greeting}</h2></button></Link>
</div>
<div className='imagenPrincipal'>
  <img src="https://res.cloudinary.com/dtzqfg4nr/image/upload/v1678735549/vecteezysoftballillustration3aa0521_generated_b2l2ij.jpg" alt="" />
  
{/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="100%" height="82.8vh" preserveAspectRatio="none" viewBox="0 0 1440 560">
    <g mask="url(&quot;#SvgjsMask2270&quot;)" fill="none">
        <rect width="1440" height="560" x="0" y="0" fill="url(#SvgjsLinearGradient2271)"></rect>
        <path d="M1014.83 445.46a4.02 4.02 0 1 0 7 3.95z" fill="#d3b714"></path>
        <path d="M391.4 96.34 a15.49 15.49 0 1 0 30.98 0 a15.49 15.49 0 1 0 -30.98 0z" fill="#d3b714"></path>
        <path d="M1243.78 290.98L1257.57 290.98L1257.57 304.77L1243.78 304.77z" stroke="#e73635"></path>
        <path d="M947.69 291.41L960.15 291.41L960.15 303.87L947.69 303.87z" stroke="#d3b714"></path>
        <path d="M454.43 287.87a25.64 25.64 0 1 0-26.44 43.94z" fill="#d3b714"></path>
        <path d="M1323.81 267.93 a21.32 21.32 0 1 0 42.64 0 a21.32 21.32 0 1 0 -42.64 0z" stroke="#037b0b"></path>
        <path d="M1240.82 434.45L1247.22 434.45L1247.22 440.85L1240.82 440.85z" fill="#e73635"></path>
        <path d="M483.88 504.73L486.92 504.73L486.92 507.77L483.88 507.77z" stroke="#e73635"></path>
        <path d="M981.64 362.81L1027.15 362.81L1027.15 408.32L981.64 408.32z" fill="#037b0b"></path>
        <path d="M803.16 103.86L824.44 103.86L824.44 125.14L803.16 125.14z" fill="#e73635"></path>
        <path d="M390.94 117.34L436.68 117.34L436.68 163.08L390.94 163.08z" fill="#e73635"></path>
        <path d="M898.68 543.84a28.31 28.31 0 1 0 56.42 4.72z" stroke="#037b0b"></path>
        <path d="M70.57 420.66L85.35 420.66L85.35 420.84L70.57 420.84z" fill="#037b0b"></path>
        <path d="M1281.15 244.52a11.97 11.97 0 1 0-9.28-22.07z" fill="#e73635"></path>
        <path d="M717.33-18.55a27.76 27.76 0 1 0-36.27 42.03z" fill="#e73635"></path>
        <path d="M1115.62 481.84a12.8 12.8 0 1 0-2.94-25.43z" fill="#d3b714"></path>
        <path d="M621.54 51.02a34.67 34.67 0 1 0-67.29-16.74z" fill="#e73635"></path>
        <path d="M1417.04 115.21 a10.51 10.51 0 1 0 21.02 0 a10.51 10.51 0 1 0 -21.02 0z" stroke="#e73635"></path>
        <path d="M685.42 162.5a26.43 26.43 0 1 0 35.76-38.93z" stroke="#037b0b"></path>
        <path d="M286.2 324.04a19.66 19.66 0 1 0-38.81-6.33z" stroke="#037b0b"></path>
        <path d="M87.76 19.59L89.39 19.59L89.39 21.22L87.76 21.22z" stroke="#e73635"></path>
        <path d="M540.48 539.79L595.22 539.79L595.22 578.17L540.48 578.17z" fill="#d3b714"></path>
        <path d="M204.87 31.38L213.34 31.38L213.34 39.85L204.87 39.85z" stroke="#037b0b"></path>
        <path d="M582.85 551.16L606.48 551.16L606.48 599.84L582.85 599.84z" stroke="#e73635"></path>
        <path d="M286.33 457.15L339.18 457.15L339.18 510L286.33 510z" stroke="#d3b714"></path>
        <path d="M295.84 205.17a20.95 20.95 0 1 0 41.88-1.46z" stroke="#037b0b"></path>
        <path d="M855.11 243.48L898.55 243.48L898.55 269.76L855.11 269.76z" fill="#e73635"></path>
        <path d="M967.38 326.29 a52.31 52.31 0 1 0 104.62 0 a52.31 52.31 0 1 0 -104.62 0z" fill="#d3b714"></path>
        <path d="M963.2 133.52L1010.86 133.52L1010.86 142.76L963.2 142.76z" fill="#037b0b"></path>
        <path d="M950.99 484.33L973.8 484.33L973.8 537.34L950.99 537.34z" fill="#e73635"></path>
        <path d="M393.15 274.8 a53.27 53.27 0 1 0 106.54 0 a53.27 53.27 0 1 0 -106.54 0z" fill="#037b0b"></path>
        <path d="M1369.01 414.21a26.99 26.99 0 1 0-36.5 39.77z" stroke="#037b0b"></path>
        <path d="M482.17 132.57a21.8 21.8 0 1 0 34.12-27.15z" stroke="#037b0b"></path>
    </g>
    <defs>
        <mask id="SvgjsMask2270">
            <rect width="1440" height="560" fill="#ffffff"></rect>
        </mask>
        <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" gradientUnits="userSpaceOnUse" id="SvgjsLinearGradient2271">
            <stop stop-color="#0e2a47" offset="0"></stop>
            <stop stop-color="rgba(95, 83, 207, 0.8)" offset="1"></stop>
        </linearGradient>
        
    </defs>
</svg> */}
  </div>
</>

  )
}

export default Catalogo