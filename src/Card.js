import React from 'react'

export default function Card(prps) {
    return (
        <div

            className='
            
          group
          w-1/5
          min-w-[200px] 
          hover:bg-gradient-to-br from-purpl-100 to-purpl-200 

          h-[30rem] 
          rounded-2xl 
          flex justify-around flex-col items-center 
          
        
        ' >

            <div className='font-bold text-gray-500 mt-7 group-hover:text-white' >
                <p>{prps.type}</p>
            </div>

            <div className='text-6xl font-bold text-gray first-letter:text-2xl group-hover:text-white '>
                <p>{prps.price}</p>

            </div>



            <div className='w-4/5'>
                <hr />
                <div className='flex justify-center p-3 font-bold text-gray-500 group-hover:text-white'>


                    <p>{prps.op0}</p>

                </div>
                <hr />


                <div className='flex justify-center p-3 font-bold text-gray-500 group-hover:text-white'>
                    <p>{prps.op1}</p>

                </div>
                <hr />

                <div className='flex justify-center p-3 font-bold text-gray-500 group-hover:text-white'>
                    <p>{prps.op2}</p>

                </div>
                <hr />
            </div>

            <button className=' transition duration-700 ease-in-out text-[14px] text-white  w-4/5 rounded-xl bg-purpl-200 group-hover:bg-white group-hover:text-purple-900   h-[40px] mb-6'>LEARN MORE </button>



        </div>
    )
}
