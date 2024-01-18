'use client'

import Image from 'next/image'
import NavigationBar from './components/NavigationBar'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

const BarChart = dynamic(async ()=> await import("./components/Chart/barChart").then((mod)=>mod.default), {ssr:false})
const DoughnutChart = dynamic(async ()=> await import("./components/Chart/doughnutChart").then((mod)=>mod.default), {ssr:false})

export default function Home() {
  return (
    <>    
    <NavigationBar/>
    <motion.div className="flex min-h-screen bg-gradient-to-br from-[#1a151e] from-0% to-[#262229] to-100% ">
      <motion.div className='w-full mt-24 flex flex-row px-5'>
        {/* left sid-bar */}
        <motion.div className="w-2/12 h-full flex items-center justify-center">
          <motion.img src="/assest/img/bg-light-left.png" alt='...' className='absolute left-0 bottom-0 bg-blend-screen' />
        <motion.div className="w-full h-36 rounded-xl bg-gradient-to-br from-[#595657]  via-transparent to-0 p-[2px] ">
          <motion.div className='bg-gradient-to-br from-[#1c171f] from-0% to-[#242027] to-100% shadow-xl rounded-xl flex flex-col items-center justify-center relative pt-[20px]'>
              <motion.div className=' flex flex-row items-center justify-center bg-[#00FFFFFF00] w-1/2 rounded-full border-[#67B1F9] border-2 before:block before:absolute before:inset-0 before:top-[36px] before:w-1/4  before:h-[2px] before:bg-[#67B1F9] '>
                <span className='text-white text-sm font-medium p-1'>Cloud Credentials</span>
              </motion.div>
              <motion.div className=''>
                  <BarChart/>
              </motion.div>
          </motion.div>
        </motion.div>

        </motion.div>
      {/* hero titles and more */}
        <motion.div className="w-6/12  h-full flex flex-col items-center justify-between">
          <motion.div className="w-full h-full bg-red-900">
            <h1>this is upper side</h1>
          </motion.div>
          <motion.div className="w-full">
            <h1>this is downside</h1>
            <motion.img src="/assest/img/bg-light-bottom-removebg-preview.png" alt='...' className='overflow-hidden bg-no-repeat bg-blend-screen' />
          </motion.div>
        </motion.div>
          {/* Right-side Bar */}
        <motion.div className="w-3/12 h-full flex items-center justify-center">
          <motion.img src="/assest/img/bg-light-right.png" alt='...' className='absolute right-0 bottom-0 bg-blend-screen' />
        <motion.div className="w-full h-36 rounded-2xl bg-gradient-to-br from-[#595657]  via-transparent to-0 p-[2px] ">
          <motion.div className='bg-gradient-to-br from-[#1c171f] from-0% to-[#242027] to-100% shadow-xl rounded-2xl flex flex-col items-center justify-center relative pt-[20px]'>
              <motion.div className=' flex flex-row items-center justify-center bg-[#00FFFFFF00] w-1/2 rounded-full border-[#67B1F9] border-2 before:block before:absolute before:inset-0 before:top-[36px] before:w-1/4  before:h-[2px] before:bg-[#67B1F9] '>
                <span className='text-white text-sm font-medium p-1'>Server Statuses</span>
              </motion.div>
              <motion.div className=''>
                  <DoughnutChart/>
              </motion.div>
          </motion.div>
        </motion.div>
        </motion.div>

      </motion.div>
    </motion.div>
    </>

  )
}


