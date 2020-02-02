import React from 'react';
import '../../assets/styles/components/loader.scss';

export default function Loader({loading}) {
  return (
    <>
    <div className={loading ? "loader-cover" : 'hide'}>
      <div className='lds-ripple'><div></div><div></div></div>
    </div>
    </>
  )
}
