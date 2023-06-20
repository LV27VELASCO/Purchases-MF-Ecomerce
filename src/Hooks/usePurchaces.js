import axios from 'axios';
import React, { useState } from 'react'

const usePurchaces = () => {
    const [compras, setCompras] = useState([])
    const GetPurchaces=()=>{
        const storage = localStorage.getItem('token');
        const token =storage?storage:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxMTM0LCJmaXJzdE5hbWUiOiJqb2huIiwibGFzdE5hbWUiOiJkdWUiLCJlbWFpbCI6ImpvaG5AZ21haWwuY29tIiwicGhvbmUiOiIxMjM0NTY3ODkiLCJjcmVhdGVkQXQiOiIyMDIzLTA1LTEyVDIwOjI4OjE2LjY1NFoiLCJ1cGRhdGVkQXQiOiIyMDIzLTA1LTEyVDIwOjI4OjE2LjY1NFoifSwiaWF0IjoxNjg3MTM5OTcwfQ.817DZLKbSr3EuwnmmXk-2syeM1iSkX7vm17zfVD2StA';
    
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases';
        axios.get(url,{
          headers: {
          Authorization: `Bearer ${token}`
        }})
        .then((res)=>{
          if(res.status==200){
            setCompras(res.data)
          }
        })
        .catch(err=>console.log(err))
      }
    
      return {GetPurchaces,compras}
}

export default usePurchaces