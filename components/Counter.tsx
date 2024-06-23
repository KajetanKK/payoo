'use client';

import React from 'react'
import CountUp from 'react-countup'

const Counter = ({ amount }: { amount: number }) => {
  return (
    <div className='w-full'>
      <CountUp
        duration={2}
        decimals={2}
        decimal=','
        prefix='$'
        end={amount} 
       />
    </div>
  )
}

export default Counter