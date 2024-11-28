import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button , Form , Input , message } from 'antd';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useForm } from 'antd/es/form/Form';
import { FormattedMessage } from 'react-intl';

const Page = () => {
    
    const [form] = useForm();
    const [loading, setLoading] = useState(false);
    const params = useParams();
    const idToken = useSelector(state => state.Auth.idToken);
    const navigate = useNavigate();
    const language = useSelector(state => state.LanguageSwitcher.language);

    const backHandler = () => {
        return navigate(-1);
    }

    useEffect(() => {
        axios.get(`https://backend.masrad.com.sa/api/admin/settings/${params.id}`,
            { headers: { Authorization: `Bearer ${idToken}` } }
        ).then((res) => {
            form.setFieldsValue ({
                ...res.data.data
            })
        }).catch((err) => {
            console.error(err);
        });
    }, []);

    const handler = (values) => {
        setLoading(true);
        axios.put(`https://backend.masrad.com.sa/api/admin/settings/${params.id}`, values,
            { headers: { Authorization: `Bearer ${idToken}` } }
        ).then(() => {
            message.success('successfully updated')
            setLoading(false);
            setTimeout(() => {
                backHandler();
            }, 2000);
        }).catch((err) => {
            setLoading(false);
            message.err('failed updated')
        });
    }

   

    return (
        <div>
            <Form onFinish={handler} layout='vertical' form={form}>
                <Form.Item
                    label={<FormattedMessage id='type' />} name={"key"}
                    rules={[{ required: true, message: 'please Enter key' }]}>
                    <Input size='large' disabled placeholder='please Enter key' />
                </Form.Item>
                <Form.Item
                    label={<FormattedMessage id='value' />} name={"value"}
                    rules={[{ required: true, message: 'please Enter value' }]}>
                    <Input size='large' placeholder='please Enter value' />
                </Form.Item>
                <Form.Item className='text-center' >
                <Button className='px-8' type="primary" size='large' htmlType="submit">
                  <FormattedMessage id='edit' />
                </Button>
              </Form.Item>   
            </Form>
        </div>
    )
}

export default Page;
