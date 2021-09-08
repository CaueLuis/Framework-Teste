import styles from "../styles/pages/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Seja Bem-Vindo ao meu Teste da Framework
      </div>

      <div className={styles.body}>
        <ul>
          <li>
            Para o teste, utilizei a tecnologia React em conjunto com o NextJS
            para sua fácil paginação.
          </li>
          <li>Para o consumo da API foi utilizado o Axios.</li>
          <li>
            Para tabulação das informações redebidas da API, utilizei a
            biblioteca Anti-Design.
          </li>
        </ul>
      </div>
    </div>
  );
}
