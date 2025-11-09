import React, { useDeferredValue, useEffect, useState } from "react";
import { Popconfirm, Table, Input } from "antd";
import axios from "axios";
import { useSelector } from "react-redux";
import { message, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { render } from "react-dom";
import { FormattedMessage } from "react-intl";

const Page = () => {
  const navigate = useNavigate();
  const [add, setAdd] = useState([]);
  const idToken = useSelector((state) => state.Auth.idToken);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const deferredSearch = useDeferredValue(search);
  const [deletedItem, setDeletedItem] = useState(null);
  const language = useSelector((state) => state.LanguageSwitcher.language);

  function handleClick(id) {
    setDeletedItem(id);
    axios
      .delete(`https://backend.masrad.sa/api/admin/contacts/${id}`, {
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      })
      .then((res) => {
        message.success(res.data.message);
        request();
      })
      .catch((err) => {})
      .finally(() => {
        setDeletedItem(null);
      });
  }
  const columns = [
    {
      title: <FormattedMessage id="full-name" />,
      dataIndex: "full_name",
      key: "full_name",
    },
    {
      title: <FormattedMessage id="phone" />,
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: <FormattedMessage id="email" />,
      dataIndex: "email",
      key: "email",
    },
    {
      title: <FormattedMessage id="messages" />,
      dataIndex: "message",
      key: "message",
      render: (text) => <div style={{ maxWidth: "300px" }}>{text}</div>,
    },

    {
      title: <FormattedMessage id="actions" />,
      dataIndex: "action",
      key: "action",
      render: (text, record) => (
        <div className="flex justify-center gap-2">
          <Popconfirm
            title={<FormattedMessage id="are-you-sure" />}
            onConfirm={() => handleClick(record.id)}
            okText={<FormattedMessage id="yes" />}
            cancelText={<FormattedMessage id="no" />}
          >
            <Button loading={deletedItem === record.id} type="primary" danger>
              <FormattedMessage id="delete" />
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  const request = () => {
    const params = {};
    if (deferredSearch) {
      params.search = deferredSearch;
    }
    setLoading(true);
    axios
      .get("https://backend.masrad.sa/api/admin/contacts?page", {
        params,
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      })
      .then((res) => {
        setAdd(res.data.data);
      })
      .catch((err) => {})
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    request();
  }, [deferredSearch]);

  return (
    <div className="">
      <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        <Input
          placeholder="بحث"
          type="search"
          size="large"
          onChange={(e) => setSearch(e.target.value)}
          alt="search"
        />
      </div>
      <Table loading={loading} columns={columns} dataSource={add} />
    </div>
  );
};

export default Page;
