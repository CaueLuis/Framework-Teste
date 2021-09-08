import React, { useState, useEffect } from "react";
import { Table } from "antd";

import connectionApi from "../services/connectionApi";
import styles from "../styles/pages/Posts.module.css";

export default function Todos() {
  const [toDos, setToDos] = useState([]);
  useEffect(() => {
    getToDos();
  }, []);

  async function getToDos() {
    try {
      const response = await connectionApi.get("todos");
      setToDos(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "title",
      dataIndex: "title",
      key: "id",
    },
    {
      title: "userId",
      dataIndex: "userId",
      key: "id",
    },
  ];

  return (
    <div className={styles.container}>
      <Table dataSource={toDos} columns={columns} />;
    </div>
  );
}
