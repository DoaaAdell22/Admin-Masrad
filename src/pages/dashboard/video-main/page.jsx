import { Form } from 'antd';
import React, { useEffect, useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Player } from "video-react";
import { FormattedMessage } from 'react-intl';
const Page = () => {
    const idToken = useSelector(state => state.Auth.idToken);
    const [file, setFile] = useState(null);
    const [url, setUrl] = useState(null);

    const normFile = (e) => {
        var url = URL.createObjectURL(e.file)
        setUrl(url)
        console.log(e.file)
        if (Array.isArray(e)) {
            return e;
        }
        setFile(e && e.file); 
        return e && e.fileList;
    };

    const request = () => {
        const formData = new FormData();
        formData.append("video", file); 
        formData.append("key", "main"); 

        axios.post("https://backend.masrad.com.sa/api/admin/upload-video", formData, {
            headers: {
                Authorization: `Bearer ${idToken}`,
            }
        }).then((res) => {
            message.success('successfully updated')

        }).catch(() => {
        });
    };

    useEffect(()=>{
        axios.get("https://backend.masrad.com.sa/api/admin/show-main-page" , 
            { headers : {
            Authorization:`Bearer ${idToken}`
            }}
        ).then((res) => {
                setUrl(res.data.data[0].video_sec4)
            }).catch((err) => {
                
                message.err(`Failed to save data`)
            })    },[])

    return (
        <div>
            <Form onFinish={request}>
                <Form.Item
                    name="video"
                    label="فيديو"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                    rules={[{ required: true, message: 'Please upload a video!' }]}
                >
                    <Upload showUploadList={false}  maxCount={1} beforeUpload={() => false} listType="picture">
                        <Button icon={<UploadOutlined />}>اختر فيديو</Button>
                    </Upload>

                </Form.Item>
                {url && <Player
                    playsInline
                    src={url}
                    fluid={false}
                    width={300}
                    height={300}
                />}
                <Button  className='mt-8' type="primary" htmlType="submit"><FormattedMessage id='upload' /></Button>
            </Form>
        </div>
    );
};

export default Page;
