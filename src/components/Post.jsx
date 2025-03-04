import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Avatar } from "./Avatar.jsx";
import { Comment } from "./Comment.jsx";
Avatar;
import styles from "./Post.module.css";
export function Post({ author, publishedAt }) {
  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'as' HH:mm'h'",
    { locale: ptBR }
  );
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} alt="" />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title="04 de março às 12:30h" dateTime="2025-03-04 12:30:00">
          {publishedDateFormatted}
        </time>
      </header>
      <div className={styles.content}></div>

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
