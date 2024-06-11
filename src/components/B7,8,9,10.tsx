import React, { useState } from 'react'
import './B7,8,9,10.css'
import StudentTable from './StudentTable'
import Form from './Form'
export default function SinhVien() {
    const [checked,setChecked]=useState<number>(0);
    const statusCheck=()=>{
        setChecked(1);
    }
  return (
    <div>
        <header>
            <div><h5>Quản lý sinh viên</h5></div>
            <button onClick={()=>{setChecked(1)}}>thêm mới sinh viên</button>
        </header>
        <StudentTable status={setChecked} check={checked}></StudentTable>
    </div>
  )
}
