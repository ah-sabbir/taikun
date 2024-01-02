'use client'

import Image from 'next/image'
import NavigationBar from './components/NavigationBar'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

const BarChart = dynamic(async ()=> await import("./components/Chart").then((mod)=>mod.default), {ssr:false})

export default function Home() {
  return (
    <>    
    <NavigationBar/>
    <motion.div className="flex min-h-screen bg-gradient-to-br from-[#1a151e] from-0% to-[#262229] to-100% ">
      <motion.div className='w-full mt-24 flex flex-row'>
        
        <motion.div className="w-3/12 h-full flex items-center justify-center">
          <motion.div className='bg-gradient-to-br from-[#1c171f] from-0% to-[#242027] to-100% shadow-xl rounded-xl border-l-4 border-t-4'>
            <BarChart/>
          </motion.div>
        </motion.div>
      
        <motion.div className="w-6/12">

        </motion.div>

        <motion.div className="w-3/12 h-full flex items-center justify-center">
          <motion.div className='bg-gradient-to-br from-[#1c171f] from-0% to-[#242027] to-100% shadow-xl rounded-md'>
              <BarChart/>
          </motion.div>
        </motion.div>

      </motion.div>
    </motion.div>
    </>

  )
}


