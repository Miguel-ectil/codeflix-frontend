import Header from '@/components/Header'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import { InformationCircleIcon } from '@heroicons/react/24/outline'
import { PlayIcon } from '@heroicons/react/24/solid'


export default function Home() {
  return (
    <div className='relative h-screen overflow-hidden bg-gradient-to-b lg:h-[140vh]'>
      <Header />
      <main className='relative pb-24 pl-4 lg:pl-16'>
        <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
          <div className='absolute left-0 top-0 -z-10 flex h-[95vh] flex-col w-screen bg-black'>
            <Image
              src='/banner.png'
              alt='MAID'
              fill={true}
              className='h-[65vh] object-cover object-top lg:h-[95vh]'
            />
          </div>
          <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
            MAID
          </h1>
          <p className='text-shadow-md max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl'>
            After fleeing an abusive relationship, a young mother a job clening house as she fights to provide for her child and build them a better future.
          </p>
        </div>
        <div className='flex space-x-3'>
          <button 
            className='md:text-xl; flex cursor-pointer items-center gap-x-2 rounded bg-white px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5'
          >
            <PlayIcon className='h-6'/>
            Play
          </button>

          <button 
            className='md:text-xl; flex cursor-pointer items-center gap-x-2 rounded bg-gray-600 px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5'
          >
            <InformationCircleIcon className='h-6'/>
            More Info
          </button>
        </div>
        <div className='flex-col space-y-4'>
          <div className='flex space-x-4 overflow-x-scroll'>
            {[1, 2, 3, 4, 5,].map((index) => (
              <div key={index} className='group relative h-28 min-w-[200px] transform transition  duration-200 ease-in hover:scale-110'>
                <Image
                  src={`/item_${index}.png`} 
                  fill={true}
                  alt='MID'
                  className='rounded'
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
