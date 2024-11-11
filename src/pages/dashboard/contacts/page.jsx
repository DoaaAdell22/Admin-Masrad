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
            title: <FormattedMessage id='full-name' />,
            dataIndex: 'full_name',
            key: 'full_name',
        },
        {
            title: <FormattedMessage id='phone' />,
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: <FormattedMessage id='email' />,
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: <FormattedMessage id='messages' />,
            dataIndex: 'message',
            key: 'message',
        },

    //     {
    //         title: <FormattedMessage id='actions' />,
    //         dataIndex: 'action',
    //         key: 'action',
    //         render : (text , record) => 
    //         <div className='flex justify-center gap-2'>
    //             <Button type='primary' onClick={()=>navigate(`/dashboard/contacts/show/${record.id}`)} > <FormattedMessage id='show' /></Button>
    //         </div>
                    
    //     },
    ];

    

    const request = () => {
        axios.get("https://backend.masrad.com.sa/api/admin/contacts?page" , 
            { headers : {
            Authorization:`Bearer ${idToken}`
            }}
        ).then((res) => {
            setAdd(res.data.data)
             
            }).catch((err) => {
                
            })
    }

    useEffect(() => {
        request()
    }, []);

    return (
        <div className=''>
            <Table loading={loading} columns={columns} dataSource={add} />
        </div>
    );
};

export default Page;
