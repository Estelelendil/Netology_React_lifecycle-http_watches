import moment from 'moment';
import React, { useEffect, useState } from 'react';

export default function Watch({item, remove}) {
  const setTime=()=>{
    if(item.time[0]==='-'){
       return moment().subtract('hours', Number(item.time.slice(1)))
    }else{
      return moment().add('hours', Number(item.time))
    }
  }
  
 const[date, setDate]=useState(setTime())

 useEffect(() => {
   const timer=setInterval(()=>setDate(setTime()), 1000)
   return ()=>clearInterval(timer)
  }, []);

  return (
    <div>
      <div>
      <h2>{item.name}</h2>
<button onClick={()=>remove(item.id)}>Х</button>
      </div>
      {date.format('hh:mm:ss')}
    </div>
  );
}
