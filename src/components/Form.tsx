import React,{useState} from 'react'
import axios from 'axios'
interface Check{
    check:number,
    status:any,
    getStudent:any,
}
interface Student{
    name:string,
    status:boolean,
    id:number,
    email:string,
    address:string,
    phone:string,
    created_at:string,
}
export default function Form(props:Check) {
    const [student,setStudent]=useState<Student>({
        name:'',
        id:0,
        email:'',
        address:'',
        phone:'',
        status:true,
        created_at:'',
    });
    const resetInput=()=>{
        setStudent({  name:'',
            id:0,
            email:'',
            address:'',
            phone:'',
            status:true,
            created_at:'',})
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
        if(props.check===1){
            console.log('runllll');
           axios.post('http://localhost:8000/students',student)
            .then(()=>{
            props.getStudent();
            props.status();
            resetInput();
            })
            .catch(err=>console.log(err))
        }else{
            axios.patch(`http://localhost:8000/students/${student.id}`,student)
            .then(()=>{
                props.getStudent();
                resetInput();
            })
            .catch(err=>console.log(err))
        }
        }
  return (
    <form action="" onSubmit={createStudent}>
        <h5>Form thông tin sinh viên</h5>
        <div>
            <label htmlFor="">Tên sinh viên</label>
            <input type="text" value={student.name} onChange={handleChange} name='name' />
        </div>
        <div>
            <label htmlFor="">Email</label>
            <input type="text"value={student.email}  onChange={handleChange} name='email' />
        </div>
        <div>
            <label htmlFor="">Địa chỉ</label>
            <input type="text" value={student.address} onChange={handleChange} name='address' />
        </div>
        <div>
            <label htmlFor="">Số điện thoại</label>
            <input type="text"value={student.phone} onChange={handleChange} name='phone' />
        </div>
        <div>
            <button>Lưu</button>
        </div>
    </form>
  )
}
