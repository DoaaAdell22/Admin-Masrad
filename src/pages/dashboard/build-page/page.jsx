import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { message, Spin } from "antd";
import { useNavigate } from "react-router-dom";
import { Divider } from "antd";
import { Button, Form, Input, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { FormattedMessage } from "react-intl";

const Page = () => {
  const [form] = Form.useForm();

  const navigate = useNavigate();
  const idToken = useSelector((state) => state.Auth.idToken);
  const [loading, setLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const language = useSelector((state) => state.LanguageSwitcher.language);

  const onFinish = (values) => {
    setIsSubmitting(true);
    axios
      .post("https://backend.masrad.sa/api/admin/update-build-page", values, {
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      })
      .then((res) => {
        message.success(res.data.message);
      })
      .catch((err) => {
        message.error(err.response.data.message || "حدث خطأ ما");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const request = () => {
    setLoading(true);
    axios
      .get("https://backend.masrad.sa/api/admin/show-build-page", {
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      })
      .then((res) => {
        form.setFieldsValue({
          ...res.data.data[0],
        });
      })
      .catch((err) => {
        message.error(err.response.data.message || "حدث خطأ ما");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    request();
  }, []);

  return (
    <div className=" ">
      {/* <h1 className="text-3xl text-white font-bold text-center">
        <FormattedMessage id="build" />
      </h1> */}
      <Spin spinning={loading}>
        <div className="flex flex-col items-center justify-center max-w-5xl mx-auto text-center">
          <Form
            name="basic"
            form={form}
            layout="vertical"
            style={{ width: "100%" }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Divider orientation="left">القسم الأول</Divider>
            <section className="mb-16 border p-8 rounded-lg bg-white dark:bg-neutral-800 shadow-[0_0_4px_1px_rgba(0,0,0,0.1)] ">
              <Form.Item
                label=" العنوان الرئيسي"
                name="main_title_sec_1"
                rules={[{ required: true, message: "This field is required" }]}
              >
                <Input size="large" />
              </Form.Item>
              <Form.Item
                label="العنوان"
                name="title_sec1"
                rules={[{ required: true, message: "This field is required " }]}
              >
                <Input size="large" />
              </Form.Item>
              <Form.Item
                label="الوصف"
                name="des_sec1"
                rules={[{ required: true, message: "This field is required " }]}
              >
                <Input.TextArea rows={6} size="large" />
              </Form.Item>
            </section>
            <Divider orientation="left">القسم الثاني</Divider>
            <section className="mb-16 border p-8 rounded-lg bg-white dark:bg-neutral-800 shadow-[0_0_4px_1px_rgba(0,0,0,0.1)] ">
              <Form.Item
                label=" العنوان الرئيسي"
                name="main_title_sec_2"
                rules={[{ required: true, message: "This field is required" }]}
              >
                <Input size="large" />
              </Form.Item>
              <Form.Item
                label="العنوان"
                name="title_sec2"
                rules={[{ required: true, message: "This field is required " }]}
              >
                <Input size="large" />
              </Form.Item>
              <Form.Item
                label="الوصف"
                name="des_sec2"
                rules={[{ required: true, message: "This field is required " }]}
              >
                <Input.TextArea rows={6} size="large" />
              </Form.Item>
              <h3 className="mb-3">عناصر القسم</h3>

              <Form.List name="components_sec2">
                {(fields, { add, remove }) => (
                  <Fragment>
                    {fields.map(({ key, name, ...restField }, index) => (
                      <div
                        key={key}
                        style={{
                          display: "flex",
                          gap: 10,
                          marginBottom: 8,
                          width: "100%",
                        }}
                        align="baseline"
                      >
                        <div className="flex flex-col w-[calc(100%_-_50px)]">
                          {/* <Form.Item
                hidden
                initialValue={`slug-${index}`}
                {...restField}
                name={[name, 'slug']}
                rules={[{ required: true }]}
                >
                <Input 
                />
                </Form.Item>              
                */}
                          <Form.Item
                            {...restField}
                            name={[name, "title"]}
                            rules={[{ required: true }]}
                          >
                            <Input size="large" />
                          </Form.Item>
                          <Form.Item
                            {...restField}
                            name={[name, "desc"]}
                            rules={[{ required: true }]}
                          >
                            <Input.TextArea rows={6} size="large" />
                          </Form.Item>
                          <Divider />
                        </div>
                        <MinusCircleOutlined onClick={() => remove(name)} />
                      </div>
                    ))}
                    <Form.Item>
                      <Button
                        type="dashed"
                        onClick={() => add()}
                        block
                        icon={<PlusOutlined />}
                      >
                        اضافة
                      </Button>
                    </Form.Item>
                  </Fragment>
                )}
              </Form.List>
            </section>
            <Divider orientation="left">القسم الثالث</Divider>
            <section className="mb-16 border p-8 rounded-lg bg-white dark:bg-neutral-800 shadow-[0_0_4px_1px_rgba(0,0,0,0.1)] ">
              <Form.Item
                label=" العنوان الرئيسي"
                name="main_title_sec_3"
                rules={[{ required: true, message: "This field is required" }]}
              >
                <Input size="large" />
              </Form.Item>
              <Form.Item
                label="العنوان"
                name="title_sec3"
                rules={[{ required: true, message: "This field is required " }]}
              >
                <Input size="large" />
              </Form.Item>
              <Form.Item
                label="الوصف"
                name="des_sec3"
                rules={[{ required: true, message: "This field is required " }]}
              >
                <Input.TextArea rows={6} size="large" />
              </Form.Item>
            </section>
            <Form.Item className="text-center">
              <Button
                loading={isSubmitting}
                className="px-8"
                type="primary"
                size="large"
                htmlType="submit"
              >
                <FormattedMessage id="edit" />
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Spin>
    </div>
  );
};

export default Page;
