import React from 'react'

export default function Card() {
    return (
        <div

            className='
          w-1/5
          min-w-[200px] 
          bg-gradient-to-br from-purpl-100 to-purpl-200 
          h-[30rem] 
          rounded-2xl 
          flex justify-around flex-col items-center 
          
        
        ' >

            <div className='font-bold text-white mt-7' >
                <p>Professional</p>
            </div>

            <div className='text-6xl font-bold text-white first-letter:text-2xl '>
                <p>$ 24.99</p>

            </div>



            <div className='w-4/5'>
                <hr />
                <div className='flex justify-center p-3 font-bold text-white'>


                    <p> 1 TB Storage</p>

                </div>
                <hr />


                <div className='flex justify-center p-3 font-bold text-white'>
                    <p> 5 Users Allowed </p>

                </div>
                <hr />

                <div className='flex justify-center p-3 font-bold text-white'>
                    <p>Send Up to 10 GB</p>

                </div>
                <hr />
            </div>

            <button className=' text-[14px] text-purple-900  w-4/5 rounded-xl bg-white h-[40px] mb-6'>LEARN MORE </button>



        </div>
    )
}
