import React from 'react';
import '../../assets/styles/components/loader.scss';

export default function Loader({loading}) {
  return (
    <>
    <div className="loader-cover">
      <div className={loading ? 'lds-ripple' : 'hide'}><div></div><div></div></div>
      <div className="please-wait">
        Please wait
      </div>
    </div>
    </>
  )
}
