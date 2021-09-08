import React from "react";
import { IoMdHome } from "react-icons/io";
import Link from "next/link";
import styles from "../styles/components/header.module.css";

export function Header() {
  return (
    <div className={styles.container}>
      <Link href={"/"}>
        <div className={styles.icon}>
          <IoMdHome />
          <spam>Home</spam>
        </div>
      </Link>

      <div className={styles.content}>
        <nav>
          <Link href="/posts">
            <button>Postagens</button>
          </Link>

          <Link href="/albums">
            <button>Albuns</button>
          </Link>

          <Link href="/todos">
            <button>To-Do</button>
          </Link>
        </nav>
      </div>
    </div>
  );
}
