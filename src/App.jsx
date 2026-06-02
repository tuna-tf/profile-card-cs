import { useState } from 'react'
import Form from "./Form"
import cardPfp from './assets/card-pfp.png'

function App() {
  

  return (
    <main className='min-h-screen bg-mainbg flex items-center justify-center'>
      <div 
      className='main-container bg-cardbg rounded-2xl grid grid-cols-1 my-12 mx-4 
      med:py-12 med:px-12 md:grid-cols-2'>
        {/* contact card */}
        <div id='contact-card' 
        className='flex flex-col content-center w-full items-center max-w-md py-12 order-2 
        md:order-1 md:w-[80%] md:items-start'>
          <h1 className='text-5xl font-bold mb-14'>
            <span className='text-white'>Contact </span>
            <span className='text-orange-500'>me</span>
          </h1>
          {/* My form */}
          <Form />
        </div>

        {/* profile card */}
        <div id='profile-card' className='max-w-90 overflow-hidden rounded-t-2xl order-1 md:order-2'>
          {/* Background Image */}
          <div className="relative h-full">
            <img 
                  src= {cardPfp}
                  alt="Profile" 
                  className="w-full h-full object-cover scale-110 -translate-y-4"
            />
            <div class="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-40 backdrop-blur-md px-3"
            style={{
                background: 'linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.2), transparent)',
                backdropFilter: 'blur(4px)',
            }}>
              <div className='inline-flex items-center gap-2'>
                <h2 className='text-2xl font-medium'>Suraj Latiff</h2>
                <svg className='w-6 h-6' viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.5283 1.5999C11.7686 1.29437 12.2314 1.29437 12.4717 1.5999L14.2805 3.90051C14.4309 4.09173 14.6818 4.17325 14.9158 4.10693L17.7314 3.3089C18.1054 3.20292 18.4799 3.475 18.4946 3.86338L18.6057 6.78783C18.615 7.03089 18.77 7.24433 18.9984 7.32823L21.7453 8.33761C22.1101 8.47166 22.2532 8.91189 22.0368 9.23478L20.4078 11.666C20.2724 11.8681 20.2724 12.1319 20.4078 12.334L22.0368 14.7652C22.2532 15.0881 22.1101 15.5283 21.7453 15.6624L18.9984 16.6718C18.77 16.7557 18.615 16.9691 18.6057 17.2122L18.4946 20.1366C18.4799 20.525 18.1054 20.7971 17.7314 20.6911L14.9158 19.8931C14.6818 19.8267 14.4309 19.9083 14.2805 20.0995L12.4717 22.4001C12.2314 22.7056 11.7686 22.7056 11.5283 22.4001L9.71949 20.0995C9.56915 19.9083 9.31823 19.8267 9.08421 19.8931L6.26856 20.6911C5.89463 20.7971 5.52014 20.525 5.50539 20.1366L5.39427 17.2122C5.38503 16.9691 5.22996 16.7557 5.00164 16.6718L2.25467 15.6624C1.88986 15.5283 1.74682 15.0881 1.96317 14.7652L3.59221 12.334C3.72761 12.1319 3.72761 11.8681 3.59221 11.666L1.96317 9.23478C1.74682 8.91189 1.88986 8.47166 2.25467 8.33761L5.00165 7.32823C5.22996 7.24433 5.38503 7.03089 5.39427 6.78783L5.50539 3.86338C5.52014 3.475 5.89463 3.20292 6.26857 3.3089L9.08421 4.10693C9.31823 4.17325 9.56915 4.09173 9.71949 3.90051L11.5283 1.5999Z" stroke="#fff" stroke-width="1.5"/>
                  <path d="M9 12L11 14L15 10" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <p className='py-2'>
                Reliable customer representative with strong communication skills.
              </p>
              <div>
                <div className='inline-flex items-center gap-1 pr-2'>
                  <svg className='w-3 h-3 fill-white/80 mb-0.5' xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M12,6a4,4,0,1,0,4,4A4,4,0,0,0,12,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,12Z"/><path d="M12,24a5.271,5.271,0,0,1-4.311-2.2c-3.811-5.257-5.744-9.209-5.744-11.747a10.055,10.055,0,0,1,20.11,0c0,2.538-1.933,6.49-5.744,11.747A5.271,5.271,0,0,1,12,24ZM12,2.181a7.883,7.883,0,0,0-7.874,7.874c0,2.01,1.893,5.727,5.329,10.466a3.145,3.145,0,0,0,5.09,0c3.436-4.739,5.329-8.456,5.329-10.466A7.883,7.883,0,0,0,12,2.181Z"/></svg>
                  <p className='text-[0.9rem] text-white/80'>Greater London</p>
                </div>
                <div className='inline-flex items-center gap-1 leading-tight border-b border-white/80'>
                  <svg className='w-3 h-3 fill-white/80 mb-0.5' xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M9.878,18.122a3,3,0,0,0,4.244,0l3.211-3.211A1,1,0,0,0,15.919,13.5l-2.926,2.927L13,1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1l-.009,15.408L8.081,13.5a1,1,0,0,0-1.414,1.415Z"/><path d="M23,16h0a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V17a1,1,0,0,0-1-1H1a1,1,0,0,0-1,1v4a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V17A1,1,0,0,0,23,16Z"/></svg>
                  <p className='text-[0.9rem] text-white/80'><a href="https://files.catbox.moe/dfrhqd.pdf" target="_blank" rel="noopener noreferrer">Download CV</a></p>
                </div>
              </div>
              
              <div className='inline-flex gap-2'>
                <div className='inline-flex items-center gap-1 leading-tight border-b border-white/80'>
                <svg className='w-3 h-3 fill-white/80' xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
                  <path d="m23.263,13.885c.981.982.981,2.581,0,3.562l-5.37,5.37c-.787.787-1.821,1.18-2.855,1.18s-2.067-.393-2.854-1.18c-.763-.762-1.183-1.776-1.183-2.855s.42-2.092,1.183-2.855l4.213-4.212c.391-.391,1.023-.391,1.414,0s.391,1.023,0,1.414l-4.213,4.212c-.385.385-.597.897-.597,1.441s.212,1.056.597,1.441c.796.794,2.088.793,2.882,0l5.37-5.37c.202-.202.202-.532,0-.734-.195-.195-.537-.196-.734,0l-4.407,4.407c-.391.391-1.023.391-1.414,0s-.391-1.023,0-1.414l4.407-4.407c.951-.95,2.609-.952,3.562,0Zm.737-8.885v5c0,.552-.447,1-1,1s-1-.448-1-1v-5c0-.281-.051-.547-.124-.805l-6.341,6.342c-.945.944-2.201,1.464-3.536,1.464s-2.591-.52-3.536-1.464L2.124,4.195c-.073.258-.124.525-.124.805v9c0,1.654,1.346,3,3,3h3c.553,0,1,.448,1,1s-.447,1-1,1h-3c-2.757,0-5-2.243-5-5V5C0,2.243,2.243,0,5,0h14c2.757,0,5,2.243,5,5Zm-3.295-2.463c-.485-.337-1.071-.537-1.705-.537H5c-.634,0-1.22.2-1.705.537l6.584,6.585c.567.566,1.344.849,2.122.85.777,0,1.555-.283,2.122-.85l6.584-6.585Z"/>
                </svg>
                <p className='text-[0.9rem] text-white/80'><a href="mailto:tuanlatiff35@gmail.com" target="_blank" rel="noopener noreferrer">tuanlatiff35@gmail.com</a></p>
                </div>

                <div className='inline-flex items-center gap-1 leading-tight border-b border-white/80'>
                <svg className='w-3 h-3 fill-white/80' xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M13,1a1,1,0,0,1,1-1A10.011,10.011,0,0,1,24,10a1,1,0,0,1-2,0,8.009,8.009,0,0,0-8-8A1,1,0,0,1,13,1Zm1,5a4,4,0,0,1,4,4,1,1,0,0,0,2,0,6.006,6.006,0,0,0-6-6,1,1,0,0,0,0,2Zm9.093,10.739a3.1,3.1,0,0,1,0,4.378l-.91,1.049c-8.19,7.841-28.12-12.084-20.4-20.3l1.15-1A3.081,3.081,0,0,1,7.26.906c.031.031,1.884,2.438,1.884,2.438a3.1,3.1,0,0,1-.007,4.282L7.979,9.082a12.781,12.781,0,0,0,6.931,6.945l1.465-1.165a3.1,3.1,0,0,1,4.281-.006S23.062,16.708,23.093,16.739Zm-1.376,1.454s-2.393-1.841-2.424-1.872a1.1,1.1,0,0,0-1.549,0c-.027.028-2.044,1.635-2.044,1.635a1,1,0,0,1-.979.152A15.009,15.009,0,0,1,5.9,9.3a1,1,0,0,1,.145-1S7.652,6.282,7.679,6.256a1.1,1.1,0,0,0,0-1.549c-.031-.03-1.872-2.425-1.872-2.425a1.1,1.1,0,0,0-1.51.039l-1.15,1C-2.495,10.105,14.776,26.418,20.721,20.8l.911-1.05A1.121,1.121,0,0,0,21.717,18.193Z"/></svg>
                <p className='text-[0.9rem] text-white/80'><a href="tel:+4407438981232" target="_blank" rel="noopener noreferrer">7438-981-232</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App
