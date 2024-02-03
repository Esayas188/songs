import { useState } from 'react';
import hero from './assets/hero.png';
import Arrow from './assets/Arrow.svg';
import Arrow2 from './assets/Arrow2.png';
import Arrow3 from './assets/Arrow3.png';
import Arrow4 from './assets/Arrow3.svg';





import './App.css'

function App() {


  return (
    <>
      <div className=' max-w-[1400px] h-full my-0 mx-auto'  >

        <div className=' grid grid-row-12 text-white bg-black w-full md:min-h-[600px] max-w-[1400px]' >


          <div className=' text-xl font-bold pr-[200px] row-span-2 flex justify-end items-end gap-[80px]'>
            <a href="">HOME</a>
            <a href="">SERVICES</a>
            <a href="">ABOUT</a>
            

          </div>
          <div className='h-full row-span-10   grid grid-cols-3 px-[60px]'>
            <div className='flex justify-center gap-[20px] flex-col'>
              <p className=' text-5xl font-bold '>Welcome to <br /> the world of <br /> rhythm and <br /> melody</p>
              <p>Dive into a musical journey that <br /> transcends boundaries and <br /> speaks to the soul.</p>

              <button
              className="w-fit flex items-center text-lg gap-[20px] middle none center mr-3 rounded-lg border border-[#B87333] py-3 px-6 font-sans  font-bold uppercase text-white transition-all hover:opacity-75 focus:ring focus:ring-pink-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              data-ripple-dark="true"
            >
              Explore More <img className=' w-[50px]' src={Arrow} alt="Arrow" />
            </button>
            </div>
            <div className=' h-full bg-no-repeat bg-center' style={{backgroundImage:`url(${hero})`}}>

            </div>
            <div className='flex py-[40px] flex-col items-center justify-around'>
              <p className=' text-xl'> Explore our collection of <br />timeless classics and<br /> cutting-edge <br /> tracks. </p>
              <img className=' w-[60px]' src={Arrow2} alt="Arrow3" />

              <p className=' text-xl'>Let the music take  you<br /> on an  unforgettable <br /> adventure</p>
            </div>
          </div>


        </div>
        <div className='h-[700px] grid grid-cols-2 bg-gray-700 md:min-h-[600px] max-w-[1400px]'>
          <div className=' bg-green-400'>

          </div>
          <div className='bg-yellow-300'>

          </div>

        </div>

      </div>


    </>
  )
}

export default App
