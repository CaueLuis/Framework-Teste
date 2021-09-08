import React, { useState, useEffect } from "react";
import { Table } from "antd";

import connectionApi from "../services/connectionApi";
import styles from "../styles/pages/Posts.module.css";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    try {
      const response = await connectionApi.get("posts");

      setPosts(response.data);
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
      title: "body",
      dataIndex: "body",
      key: "id",
    },
  ];

  return (
    <div className={styles.container}>
      <Table dataSource={posts} columns={columns} />;
    </div>
  );
}
