import React, { useState } from 'react';

export default function WatchForm({watches,setWatches}) {
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
       
}
else {
    setWatches((prevTrains)=>[...prevTrains, newWatch]);
  }
  setForm({
    id:'',
    name:'',
    time:0,
  })
}
  return (
    <form onSubmit={handleSubmit}>
    <input type='text' name='name' value={form.name} onChange={handleChange}></input>
    <input type='number' name='time' value={form.time} onChange={handleChange}></input>
    <button>Добавить</button>
    </form>
  );
}
