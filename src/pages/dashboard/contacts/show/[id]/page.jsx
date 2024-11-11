import React, { useEffect, useState } from 'react'
import { Descriptions } from 'antd';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import axios from 'axios'

const page = () => {

    const [data , setData] = useState({})

    const params = useParams();

    const idToken = useSelector(state => state.Auth.idToken);

    const language = useSelector(state => state.LanguageSwitcher.language);



      useEffect(()=>{
        axios.get(`https://backend.masrad.com.sa/api/admin/contacts/${params.id}` ,
            
            { headers : {
                Authorization:`Bearer ${idToken}`
                }}
        ).then((res)=>{
            setData(res.data.data)
        }).catch(()=>{})
    },[])

 

    

    const items = [

        {
          key: '3',
          label: 'full_name',
          span : 3 ,
          children: data.full_name,
        },
        {
          key: '3',
          label: 'phone',
          span : 3 ,
          children: data.phone,
        },
        {
          key: '3',
          label: 'email',
          span : 3 ,
          children: data.email,
        },
        {
          key: '3',
          label: 'message',
          span : 3 ,
          children: data.message,
        },
      ];

    return (
       <div>
        <Descriptions bordered title="contact info" layout="horizontal" items={items} />
        </div>
    )
}

export default page
