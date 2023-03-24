import React, { useState } from 'react';
import Watch from './Watch';

export default function Watches() {
    const [watches, setWatches]=useState([])
    const [form, setForm]=useState({
        id:'',
        name:'',
        time:0,
    })

    const handleChange=(event)=>{
        const { name, value } = event.target;
        setForm((prevForm)=>({...prevForm,[name]:value}));
      }
const handleSubmit=(e)=>{
    e.preventDefault();
    const newWatch={
        id: Math.floor(Math.random()*100),
        name: form.name,
        time: form.time 
      };
      const index=watches.findIndex((item)=>
        item.id===newWatch.id)

        if (index !== -1) {// если найдено совпадение
            alert('Часы с таким часовым поясом уже существуют')
            return
            // setWatches((prevWatches)=>{
            //   const head = prevWatches.slice(0, index);
            //   const tail = prevWatches.slice(index + 1);
            //   const oldElement = prevWatches[index];
            //   const newElement = { ...oldElement, distance: newTrain.distance + oldElement.distance };
      
            //   const newTrains = [...head, newElement, ...tail];
            //   return newTrains.sort(dateSorter);
            // });
}
else {
    setWatches((prevTrains)=>[...prevTrains, newWatch]);
  }
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type='text' name='name' value={form.name} onChange={handleChange}></input>
      <input type='number' name='time' value={form.time} onChange={handleChange}></input>
      <button>Добавить</button>
      </form>

      {
        watches.map(watch=>{
            return <Watch key={watch.id} item={watch}/>
        })
      }
    </div>
  );
}
