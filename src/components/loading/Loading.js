import React from 'react'
import { Rings } from  'react-loader-spinner'


function Loading() {
  return (
    <div className='loading-container'>
        <Rings
          height="80"
          width="80"
          color="#6029a1"
          radius="6"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="rings-loading"
        />
    </div>
  )
}

export default Loading