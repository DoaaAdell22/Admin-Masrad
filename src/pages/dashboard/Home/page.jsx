import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from "react-redux";
import { message,Space  } from 'antd';
import {  useNavigate } from 'react-router-dom';
import { Divider } from 'antd';
import {  Button,  Form, Input } from 'antd';
import { values } from '@ant-design/plots/es/core/utils';
import {MinusCircleOutlined,PlusOutlined} from "@ant-design/icons"
import { FormattedMessage } from 'react-intl';
const Page = () => {
    const [form] = Form.useForm();

    const navigate = useNavigate()
    const idToken = useSelector(state => state.Auth.idToken);
    const [loading , setLoading] =useState(false)
    const language = useSelector(state => state.LanguageSwitcher.language);
    
   
    const onFinish = (values) => {
      axios.post("https://backend.masrad.com.sa/api/admin/update-main-page" , values ,
        { headers : {
          Authorization:`Bearer ${idToken}`
          }}
      ).then((res)=>{
        message.success(res.data.message)
      }).catch(()=>{})
    }
    

    const request = () => {
        axios.get("https://backend.masrad.com.sa/api/admin/show-main-page" , 
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
    // const section2 = home.components_sec2 || []; 

    // const icons = (slug) => {
    //     if(slug === 'slug-1'){
    //         return '/spray.png';
    //     }else if(slug === 'slug-2'){
    //         return '/hand.png' ;
    //     }else if(slug === 'slug-3'){
    //         return '/time.png';
    //     }else{
    //         return "" ;
    //     }
    // }
    // const statis = home.nums_sec4 || []; 

    return (
        <div >
        <h1 className='text-3xl text-white font-bold text-center'><FormattedMessage id='home' /></h1>
        <div className='flex flex-col items-center justify-center text-center'>
        <Form
        name="basic"
        layout='vertical'
        form={form}
        style={{ width: '100%' }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off">
        <Divider >القسم 1</Divider>
        <Form.Item 
          label="العنوان"
          name="title_sec1"
          rules={[{ required: true, message: 'This field is required' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item 
           label="الوصف"
          name="des_sec1"
          rules={[{ required: true, message: 'This field is required' }]}
        >
          <Input.TextArea  />
        </Form.Item>
        <Divider >القسم 2</Divider>
        <Form.Item 
          label="العنوان"
          name="title_sec2"
          rules={[{ required: true, message: 'This field is required' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item 
           label="الوصف"
          name="des_sec2"
          rules={[{ required: true, message: 'This field is required' }]}
        >
        <Input.TextArea  />
          
        </Form.Item>
       <h3 className='mb-3'>عناصر القسم</h3>
        <Form.List  name="components_sec2">
        {(fields, { add, remove }) => (
          <Fragment>
            {fields.map(({ key, name, ...restField } , index) => (
              <div key={key} style={{ display: 'flex',gap:10, marginBottom: 8,width:"100%" }} align="baseline">
            <div className='flex flex-col w-[calc(100%_-_50px)]'>
            <Form.Item
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
          rules={[{ required: true, message: 'This field is required' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item 
           label="الوصف"
          name="des_sec3"
          rules={[{ required: true, message: 'This field is required' }]}
        >
        <Input.TextArea  />
        </Form.Item>
        <Divider >القسم 4</Divider>
        <Form.Item 
          label="العنوان"
          name="title_sec4"
          rules={[{ required: true, message: 'This field is required' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item 
           label="الوصف"
          name="des_sec4"
          rules={[{ required: true, message: 'This field is required' }]}
        >
        <Input.TextArea  />
        </Form.Item>
        <Divider >القسم 5</Divider>
        <Form.Item 
          label="العنوان"
          name="title_sec5"
          rules={[{ required: true, message: 'This field is required' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item 
           label="الوصف"
          name="des_sec5"
          rules={[{ required: true, message: 'This field is required' }]}
        >
        <Input.TextArea  />
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




        //     <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center items-center
        // gap-5 sm:text-end text-center items-stretch'>
        //     {section2.map((el) => (
        //         <div key={el.id} className="p-5 flex flex-col gap-5 sm:items-end items-center rounded-2xl shadow-custom-lg bg-white">
        //             <div className="bg-[rgba(250,229,212,0.2)] w-16 h-16 rounded-xl flex justify-center items-center">
        //                 <img className="w-10 h-10" src={icons(el.slug)} alt="" />
        //             </div>
        //             <h3 className="text-[#0C5685] text-[19px]">{el.title}</h3>
        //             <p className="text-[#7B7B7B] text-[15px]">{el.desc}</p>
        //         </div>
        //     ))}  
                    
        //     </div>

        //     <img src={home.video_sec4} />
        //     <div className="grid xl:grid-cols-4   md:grid-cols-2 grid-cols-1 gap-6 justify-center sm:text-end 
        // items-center my-5 ">
        // {statis.map((el, index) => {
        //     return (
        //       <div key={index} className="flex flex-col gap-4 justify-center md:items-end items-center">
        //         <span className="text-[#D08A40] lg:text-[48px] text-[28px] font-medium">{el.nums}</span>
        //         <p className="text-[#0C5685] text-[19px] font-bold">{el.text}</p>
        //         <div className="w-[260px] h-[1px] bg-[#FCD275]"></div>
        //       </div>
        //     );
        //   })}
        //     </div>
        //     <Divider >القسم 5</Divider>