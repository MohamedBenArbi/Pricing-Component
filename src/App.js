import { useRef, useState } from 'react';
import './App.css';
import Card from './Card';

function App() {


  return (
    <>
      <div className='flex flex-col items-center justify-center '>
        <div className='flex flex-col items-center justify-center mt-5 '>
          <p className='text-[40px] p-8 '> Our Pricing</p>

          <div className='flex items-center justify-center pb-8'>

          </div>

        </div>

        <div className='flex items-center justify-center w-screen'>
          <Card type="Basic" price="$ 19.99" op0="500 GB Storage" op1="2 Users Allowed" op2="Send up to 3 GB" />
          <Card type="Professional" price="$ 24.99" op0="1 TB Storage" op1="5 Users Allowed" op2="Send up to 10 GB" />
          <Card type="Master" price="$ 39.99" op0="2 TB Storage" op1="10 Users Allowed" op2="Send up to 20 GB" />
        </div>
      </div>

    </>
  );

}

export default App;
