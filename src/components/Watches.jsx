import React, { useState } from 'react';
import Watch from './Watch';
import WatchForm from './WatchForm';

export default function Watches() {
    const [watches, setWatches]=useState([])


const deleteWatch=(id)=>{
  setWatches((prevWatches)=>prevWatches.filter(item=>item.id!==id))
}
  return (
    <div>
      <WatchForm watches={watches} setWatches={setWatches}></WatchForm>
  

      {
        watches.map(watch=>{
            console.log(watch)
            return <Watch key={watch.id} item={watch} remove={deleteWatch}/>
        })
      }
    </div>
  );
}
