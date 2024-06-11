import React, { useEffect } from 'react'
import axios from 'axios'
import B2 from './components/B2,3,4,5,6'
import SinhVien from './components/B7,8,9,10'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App() {
  // useEffect(()=>{
  //    lấy bản ghi users
  //   axios.get('http://localhost:8000/users')
  //   .then(res=>console.log("gia tri của data",res))
  //   .catch(err=>console.log(err))
  // })
  // useEffect(()=>{
  //   //thêm mới bản ghi trong mảng user
  //   let newUser={
  //     name:'quỳnh trang',
  //     address:'nghệ an'
  //   }
  //   axios.post('http://localhost:8000/users',newUser)
  //   .then(res=>console.log("gia tri của data",res))
  //   .catch(err=>console.log(err))
  // })
  // useEffect(()=>{
  //   //xóa 1  bản ghi trong mảng user
  //   axios.delete('http://localhost:8000/users/17')
  //   .then(res=>console.log("gia tri của data",res))
  //   .catch(err=>console.log(err))
  // })
  // useEffect(()=>{
  //   //câp nhật 1  bản ghi trong mảng user
  //   // put,patch
  //   // khi cập nhật phải bt id bản ghi cần cập nhật
  //   let updateUser={
  //     name:"đào thị quỳnh trang",
  //     address:"vinh-nghệ an"
  //   }
  //   axios.patch('http://localhost:8000/users/25')
  //   .then(res=>console.log("gia tri của data",updateUser))
  //   .catch(err=>console.log(err))
  // })
  // useEffect(()=>{
  //   //tìm kiếm 
  //   axios.get('http://localhost:8000/users?name_like=q')
  //   .then(res=>console.log("gia tri của data",res.data))
  //   .catch(err=>console.log(err))
  // })
  // useEffect(()=>{ 
  //   // tìm kiếm tên đầu
  //   axios.get('http://localhost:8000/users?name_like=^q')
  //   .then(res=>console.log("gia tri của data",res.data))
  //   .catch(err=>console.log(err))
  // })
  // useEffect(()=>{ 
  //   // SẮP XẾP sort:
  //   //tăng dần:asc
  //   // giảm dần:desc
  //   axios.get('http://localhost:8000/users?_sort=name&_order=desc')
  //   .then(res=>console.log("gia tri của data",res.data))
  //   .catch(err=>console.log(err))
  // })
  // useEffect(()=>{ 
  //   // PHÂN TRANG:
  //   axios.get('http://localhost:8000/users?_page=1&_limit=4')
  //   .then(res=>console.log("gia tri của data",res.data))
  //   .catch(err=>console.log(err))
  // })
  return (
    <div>
      {/* <B2></B2> */}
      <SinhVien></SinhVien>
    </div>
  )
}
