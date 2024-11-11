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
        axios.get(`https://backend.masrad.com.sa/api/admin/settings/${params.id}` ,
            
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
          label: 'key',
          span : 3 ,
          children: data.key,
        },
        {
          key: '3',
          label: 'value',
          span : 3 ,
          children: data.value,
        },
      ];

    return (
       <div>
        <Descriptions bordered title="settings info" layout="horizontal" items={items} />
        </div>
    )
}

export default page
