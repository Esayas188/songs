import { useState } from 'react';
import hero from './assets/hero.png';
import Arrow from './assets/Arrow.svg';
import Arrow2 from './assets/Arrow2.png';
import Arrow3 from './assets/Arrow3.png';
import Arrow4 from './assets/Arrow3.svg';
import service from './assets/service.png';






import './App.css'

function App() {


  return (
    <>
      <div className=' max-w-[1400px] h-full my-0 mx-auto'  >

        <div className=' grid grid-row-12 text-white bg-black w-full md:min-h-[600px] max-w-[1400px]' >


          <div className=' text-md  pr-[200px] row-span-2 flex justify-end items-end gap-[80px]'>
            <a className=' hover:text-[#B87333] transition-all duration-500' href="">HOME</a>
            <a className=' hover:text-[#B87333] transition-all duration-500' href="">SERVICES</a>
            <a className=' hover:text-[#B87333] transition-all duration-500' href="">ABOUT</a>
            

          </div>
          <div className='h-full row-span-10   grid grid-cols-3 px-[100px]'>
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
              <p className=' '> Explore our extensive collection  of timeless classics and cutting-edge tracks to discover your new favorite  music today</p>

              <img className=' w-[60px]' src={Arrow2} alt="Arrow3" />

              <p className=' '>Let the music take  you on an unforgettable adventure</p>
            </div>
          </div>


        </div>
        <div className='min-h-[600px] grid grid-cols-12 bg-[#000000]  max-w-[1400px]'>
          <div className=' text-white grid gap-[40px] col-span-7 py-[160px] px-[100px] grid-cols-2 '>
            <div className=' hover:cursor-pointer flex justify-center items-center flex-col gap-[10px] border rounded-xl  border-[#B87333]'>
              <p className=' text-8xl'>10</p>
              <div className='h-[1px] w-1/4 bg-white'>

              </div>
              <p className=' text-xl'>Artists</p>

            </div>
            <div className=' flex justify-center items-center flex-col gap-[10px] border rounded-xl  border-[#B87333]'>
              <p className=' text-8xl'>14</p>
              <div className='h-[1px] w-1/4 bg-white'>

              </div>
              <p className=' text-xl'>Genre</p>

            </div>
            <div className=' flex justify-center items-center flex-col gap-[10px] border rounded-xl  border-[#B87333]'>
              <p className=' text-8xl'>6</p>
              <div className='h-[1px] w-1/4 bg-white'>

              </div>
              <p className=' text-xl'>Artists</p>

            </div>
            <div className=' flex justify-center items-center flex-col gap-[10px] border rounded-xl  border-[#B87333]'>
              <p className=' text-8xl'>104</p>
              <div className='h-[1px] w-1/4 bg-white'>

              </div>
              <p className=' text-xl'>Song</p>

            </div>

          </div>
          <div className=' col-span-5'>
            <img src={service} className='  h-full' alt="service" />

          </div>

        </div>

      </div>


    </>
  )
}

export default App
