import React,{useState,useEffect} from 'react'
import './StudentTable.css'
import Form from './Form';
import axios from 'axios'
interface Student{
    name:string,
    status:boolean,
    id:number,
    email:string,
    address:string,
    phone:string,
    created_at:string,
}
interface Check{
    check:number,
    status:any,
}
export default function StudentTable(Props:Check) {
    const [students,setStudents]=useState<Student[]>([]);
    useEffect(()=>{
        getAllStudents();
    },)
    const getAllStudents=()=>{
        axios.get('http://localhost:8000/students')
        .then((res:any)=>setStudents(res.data))
        .catch(err=>console.log(err))
    }
    const removeById=(id:number)=>{
        if(confirm('Bạn có muốn xóa sinh viên này ko?')){
            axios.delete(`http://localhost:8000/students/${id}`)
            .then(()=>{
                    getAllStudents();
            })
            .catch(err=>console.log(err))
        }
    } 
  return  (
    <div>
        {Props.check!=0?<Form status={Props.status} check={Props.status} getStudent={getAllStudents} ></Form>:<></>}
    <table>
        <tr>
            <th><input type="checkbox" /></th>
            <th>Tên sinh viên</th>
            <th>Email</th>
            <th>Địa chỉ</th>
            <th>Số điện thoại</th>
            <th>Lựa chọn</th>
        </tr>
        <tbody>
        {students.map(function(e:Student){
                    return <tr>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.email}</td>
                        <td>{e.address}</td>
                        <td>{e.phone}</td>
                        <td>
                        <i className='bx bx-edit-alt'></i>
                        <i className='bx bxs-trash-alt' onClick={()=>{removeById(Number(e.id))}}></i>
                        </td>
                    </tr>
        })}
        </tbody>
    </table>
    </div>
  )
}
