import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import axios from 'axios';
import { useSelector } from "react-redux";
import { message , Button } from 'antd';
import {  useNavigate } from 'react-router-dom';
import { render } from 'react-dom';
import { FormattedMessage } from 'react-intl';

const Page = () => {
    const navigate = useNavigate()
    const [add, setAdd] = useState([]);
    const idToken = useSelector(state => state.Auth.idToken);
    const [click , setClick] = useState(null)
    const [loading , setLoading] =useState(false)
    const language = useSelector(state => state.LanguageSwitcher.language);

    const columns = [

        {
            title: <FormattedMessage id='type' />,
            dataIndex: 'key',
            key: 'key',
        },
        {
            title: <FormattedMessage id='value' />,
            dataIndex: 'value',
            key: 'value',
        },

        {
            title: <FormattedMessage id='actions' />,
            dataIndex: 'action',
            key: 'action',
            render : (text , record) => 
            <div className='flex justify-center gap-2'>
              {/*  <Button type='primary' onClick={()=>navigate(`/dashboard/settings/show/${record.id}`)} ><FormattedMessage id='show' /></Button> */}
                <Button type='primary' className='bg-[#165e34]'  onClick={()=>navigate(`/dashboard/settings/edit/${record.id}`)} ><FormattedMessage id='edit' /></Button>
            </div>
                    
        },
    ];

    

    const request = () => {
        axios.get("https://backend.masrad.com.sa/api/admin/settings" , 
            { headers : {
            Authorization:`Bearer ${idToken}`
            }}
        ).then((res) => {
            setAdd(res.data.data)
             
            }).catch((err) => {
                
                message.err(`Failed to save data`)
            })
    }

    useEffect(() => {
        request()
    }, []);

    // const deleteHandler = (id) =>{
    //     setClick(id)
    //     axios.delete(`https://backend.masrad.com.sa/api/admin/settings/${id}` , 
    //         { headers : {
    //             Authorization:`Bearer ${idToken}`
    //             }}
    //     ).then((res)=>{
    //         request()
    //     }).catch(()=>{})
    // }

    return (
        <div className=''>
  
            <Table loading={loading} columns={columns} dataSource={add} />
        </div>
    );
};

export default Page;
