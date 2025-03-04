import { Header } from "./components/header.jsx";
import { Post } from "./Post.jsx";
export function App() {
  return (
    <div>
      <Header />
      <Post author="Patrick" content="Hello world" />
    </div>
  );
}
