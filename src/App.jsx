import { Header } from "./components/header.jsx";
import { Post } from "./Post.jsx";
import { Sidebar } from "./components/Sidebar.jsx";

import styles from "./components/App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post author="Patrick Ventura" content="Fala galeraa 👋" />
          <Post author="Patrick Ventura" content="Fala galeraa 👋" />
        </main>
      </div>
    </div>
  );
}
