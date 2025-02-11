'use client'
import React, { useEffect, useState } from 'react'

const Main = () => {
  // const [state,setState] = useState({
  //   create:[],
  //   edit:'',
  //   update:'',
  //   delete:''
  // })
  // const handleAdd = () => {
  //   const addValue = document.getElementById('add') as HTMLInputElement;
  //   setState((prev:any)=>{
  //     return{
  //       ...prev,
  //           create:[...prev.create,addValue.value]
  //       }
  //     });   
  // };
  
  const[add,setAdd] = useState([])
  const[del,setDel] = useState([])
  const[edit,setEdit] = useState([])

  const handleAdd=()=>{
      let addValue = document.getElementById('add') as HTMLInputElement
      setAdd([...add,addValue.value])
      addValue.value=''
    }  
  const handleDelete=(index:any)=>{
      setDel(add.splice(index,1))
      setAdd(add)
  }
  const handleEdit=(index:any)=>{
    let addValue = document.getElementById('add') as HTMLInputElement
    let editItem = add[index]
    addValue.value=editItem
    setEdit()
  }
  const handleUpdate=(index:any)=>{

  }
  return (
    <div className='container_fluid'>
      <div className='form'>
      <input type="text" id='add'/>
      <label htmlFor="add" onClick={handleAdd}>add</label>
      </div>
      {add?.map((item,index)=>{
        return(
      <div className='my_data' key={index}>
        <label>name:{item}</label>
        <button type="button" onClick={(e)=>handleDelete(index)}>Delete</button>
        <button type="button" onClick={(e)=>handleEdit(index)}>Edit</button>
        <label htmlFor="add" onClick={(e)=>handleUpdate(index)}>update</label>
      </div>
        )
      })}
    </div>
  )
}

export default Main