import React, { Fragment ,useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from "react-redux";
import { message  } from 'antd';
import {  useNavigate } from 'react-router-dom';
import { Divider } from 'antd';
import {  Button,  Form, Input , Space} from 'antd';
import {MinusCircleOutlined,PlusOutlined} from "@ant-design/icons"
import { FormattedMessage } from 'react-intl';

const Page = () => {
    const [form] = Form.useForm();

    const navigate = useNavigate()
    const idToken = useSelector(state => state.Auth.idToken);
    const [loading , setLoading] =useState(false)
    const language = useSelector(state => state.LanguageSwitcher.language);

   
    const onFinish = (values) => {
      axios.post("https://backend.masrad.com.sa/api/admin/update-char-page" , values ,
        { headers : {
          Authorization:`Bearer ${idToken}`
          }}
      ).then((res)=>{
        message.success(res.data.message)
      }).catch(()=>{})
    }
    

    const request = () => {
        axios.get("https://backend.masrad.com.sa/api/admin/show-char-page" , 
            { headers : {
            Authorization:`Bearer ${idToken}`
            }}
        ).then((res) => {
            form.setFieldsValue({
                ...res.data.data[0]
            })
             
            }).catch((err) => {
                
                message.err(`Failed to save data`)
            })
    }

    useEffect(() => {
        request()
    }, []);
   
    return (
        <div className=' '>
        <h1 className='text-3xl text-white font-bold text-center'><FormattedMessage id='char' /></h1>
        <div className='flex flex-col items-center justify-center  text-center'>
        <Form
        name="basic"
        form={form}
        layout='vertical'
        style={{ width: '100%' }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off">
        <Divider >القسم 1</Divider>
        <Form.Item 
          label="العنوان"
          name="title_sec1"
          rules={[{ required: true, message: 'This field is required ' }]}
          >
          <Input />
        </Form.Item>
        <Form.Item 
           label="الوصف"
          name="des_sec1"
          rules={[{ required: true, message: 'This field is required ' }]}
          >
          <Input.TextArea />
        </Form.Item>
        <Divider >القسم 2</Divider>
        <Form.Item 
          label="العنوان"
          name="title_sec2"
          rules={[{ required: true, message: 'This field is required ' }]}
          >
          <Input />
        </Form.Item>
        <Form.Item 
           label="الوصف"
          name="des_sec2"
          rules={[{ required: true, message: 'This field is required ' }]}
          >
          <Input.TextArea />
        </Form.Item>
        <h3 className='mb-3'>عناصر القسم</h3>

        <Form.List name="components_sec2">
        {(fields, { add, remove }) => (
          <Fragment>
            {fields.map(({ key, name, ...restField },index) => (
              <div key={key} style={{ display: 'flex',gap:10, marginBottom: 8,width:"100%" }} align="baseline">
              <div className='flex flex-col w-[calc(100%_-_50px)]'>                <Form.Item
                hidden
                initialValue={`slug-${index}`}
                  {...restField}
                  name={[name, 'slug']}
                  rules={[{ required: true }]}
                >
                  <Input 
                    />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'title']}
                  rules={[{ required: true }]}
                >
                  <Input  />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'desc']}
                  rules={[{ required: true}]}
                >
                <Input.TextArea  />
                </Form.Item>
                <Divider />

                </div>
                <MinusCircleOutlined onClick={() => remove(name)} />
              </div>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                اضافة
              </Button>
            </Form.Item>
          </Fragment>
        )}
      </Form.List>
        <Divider >القسم 3</Divider>
        <Form.Item 
          label="العنوان"
          name="title_sec3"
          rules={[{ required: true, message: 'This field is required ' }]}
          >
          <Input />
        </Form.Item>
        <Form.Item 
           label="الوصف"
          name="des_sec3"
          rules={[{ required: true, message: 'This field is required ' }]}
          >
          <Input.TextArea />
        </Form.Item>
        <Divider >القسم 4</Divider>
        <Form.Item 
          label="العنوان"
          name="title_sec4"
          rules={[{ required: true, message: 'This field is required ' }]}
          >
          <Input />
        </Form.Item>
        <Form.Item 
           label="الوصف"
          name="des_sec4"
          rules={[{ required: true, message: 'This field is required ' }]}
          >
          <Input.TextArea />
        </Form.Item>
        <Divider >القسم 5</Divider>
        <Form.Item 
          label="العنوان"
          name="title_sec5"
          rules={[{ required: true, message: 'This field is required ' }]}
          >
          <Input />
        </Form.Item>
        <Form.Item 
           label="الوصف"
          name="des_sec5"
          rules={[{ required: true, message: 'This field is required ' }]}
          >
          <Input.TextArea />
        </Form.Item>

              <Form.Item className='text-center' >
      <Button className='px-8' type="primary" size='large' htmlType="submit">
        <FormattedMessage id='edit' />
      </Button>
    </Form.Item>
        </Form>

 
        </div>
    </div>
    );
};

export default Page;



