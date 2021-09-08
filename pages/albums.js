import React, { useState, useEffect } from "react";
import { Table } from "antd";

import connectionApi from "../services/connectionApi";
import styles from "../styles/pages/Posts.module.css";

export default function Albums() {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    getAlbums();
  }, []);

  async function getAlbums() {
    try {
      const response = await connectionApi.get("albums");
      console.log(response.data);
      setAlbums(response.data);
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
      <Table dataSource={albums} columns={columns} />;
    </div>
  );
}
