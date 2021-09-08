import "../styles/globals.css";
import "antd/dist/antd.css";
import styles from "../styles/pages/App.module.css";
import { Header } from "../components/header";

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.container}>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
