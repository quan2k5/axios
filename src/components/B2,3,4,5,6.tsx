import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './B2,3,4,5,6.css'
interface Student{
    name:string,
    status:boolean,
    id:number,
    email:string,
    address:string,
    phone:string,
    created_at:string,
}
export default function B2() {
    const [students,setStudents]=useState<Student[]>([]);
    const [searchInput,setSearchInput]=useState<number>(0);
    const [typeSubmit,setTypeSubmit]=useState<string>('add');
    const [student,setStudent]=useState<Student>({
        name:'',
        id:0,
        email:'',
        address:'',
        phone:'',
        status:true,
        created_at:'',
    });
    useEffect(()=>{
        getAllStudents();
    })
    const resetInput=()=>{
        setStudent({  name:'',
            id:0,
            email:'',
            address:'',
            phone:'',
            status:true,
            created_at:'',})
    }
    const getAllStudents=()=>{
        axios.get('http://localhost:8000/students')
        .then((res:any)=>setStudents(res.data))
        .catch(err=>console.log(err))
    }
    const getStudentById=(id:number)=>{
        axios.get(`http://localhost:8000/students/${id}`)
        .then((res:any)=>console.log(res.data))
        .catch(err=>console.log(err))
    } 
    const removeById=(id:number)=>{
        axios.delete(`http://localhost:8000/students/${id}`)
        .then(()=>getAllStudents())
        .catch(err=>console.log(err))
    } 
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const{name}=e.target;
        const {value}=e.target;
        let temp;
        if(name==='id'){
            temp=Number(value)
        }
        temp=value;
        setStudent({...student,[name]:temp})
    }
    const createStudent=(e:React.FormEvent)=>{
        e.preventDefault();
        if(typeSubmit==='add'){
           axios.post('http://localhost:8000/students',student)
            .then(()=>{
            getAllStudents();
            resetInput();
            })
            .catch(err=>console.log(err))
        }else{
            console.log('run');
            axios.patch(`http://localhost:8000/students/${student.id}`,student)
            .then(()=>{
                getAllStudents();
                setTypeSubmit('add');
                resetInput();
            })
            .catch(err=>console.log(err))
        }

    }
    const handleUpdate=(id:number)=>{
        setTypeSubmit('update');
         axios.get(`http://localhost:8000/students/${id}`)
        .then((res:any)=>setStudent(res.data))
        .catch(err=>console.log(err))
    }
  return (
    <div>
        <div>
            <label htmlFor="">Tìm kiếm</label>
            <input  onChange={(e)=>{setSearchInput(Number(e.target.value))}} style={{marginLeft:"10px"}}type="number" />
            <button onClick={()=>{getStudentById(searchInput)}}>Search</button>
        </div>
        <br />
        <table style={{borderCollapse:"collapse", border:"1px solid black"}}>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Email</th>
                <th>NNH</th>
                <th>Status</th>
            </tr>
            <tbody>
                {students.map(function(e:Student){
                    return <tr>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.address}</td>
                        <td>{e.phone}</td>
                        <td>{e.email}</td>
                        <td>{e.created_at}</td>
                        <td>{e.status?"true":"false"}</td>
                        <td>
                            <button onClick={()=>{removeById(Number(e.id))}}>Xóa</button>
                            <button onClick={()=>{handleUpdate(Number(e.id))}}>Update</button>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
         <form action="" onSubmit={createStudent}>
            <div>
                <label htmlFor="">Name</label>
                <br />
                <input type="text"value={student.name} onChange={handleChange} name='name' />
            </div>
            <div>
                <label htmlFor="">Address</label>
                <br />
                <input value={student.address} type="text" onChange={handleChange} name='address' />
            </div>
            <div>
                <label htmlFor="">Email</label>
                <br />
                <input value={student.email} type="text" onChange={handleChange} name='email' />
            </div>
            <div>
                <label htmlFor="">Phone</label>
                <br />
                <input value={student.phone} type="text" onChange={handleChange} name='phone' />
            </div>
            <div>
                <label htmlFor="">NNH</label>
                <br />
                <input value={student.created_at} type="text" onChange={handleChange} name='created_at' />
            </div>
            <div>
                <button>SUBMIT</button>
            </div>
        </form>
    </div>
  )
}
