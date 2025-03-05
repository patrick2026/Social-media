import { Header } from "./components/header.jsx";
import { Post } from "./components/Post.jsx";
import { Sidebar } from "./components/Sidebar.jsx";

import styles from "./components/App.module.css";

import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/patrick2026.png",
      name: "Patrick Ventura",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "patrick.design/doctorcare" },
    ],
    publishedAt: new Date("2025-04-04 20:00:00"),
  },

  {
    id: 2,
    author: {
      avatarUrl: "../src/assets/karla.jpg",
      name: "Karla Peixoto",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "karla.design/doctorcare" },
    ],
    publishedAt: new Date("2025-04-10 15:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

// export function App() {
//   return (
//     <div>
//       <Header />

//       <div className={styles.wrapper}>
//         <Sidebar />

//         <main>
//           <Post author="Patrick Ventura" content="Fala galeraa 👋" />
//           <Post author="Patrick Ventura" content="Fala galeraa 👋" />
//         </main>
//       </div>
//     </div>
//   );
// }
