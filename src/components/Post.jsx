import { Avatar } from "./Avatar.jsx";
import { Comment } from "./Comment.jsx";
Avatar;
import styles from "./Post.module.css";
export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/patrick2026.png" alt="" />

          <div className={styles.authorInfo}>
            <strong>Patrick Ventura</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="04 de março às 12:30h" dateTime="2025-03-04 12:30:00">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          {" "}
          👉 {""} <a href="#">patrick.web/developer</a>
        </p>
        <p>
          <a href="#">#novoprojeto </a> <a href="#">#nlw</a>{" "}
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
