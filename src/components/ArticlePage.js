import { useParams } from "react-router-dom";
import { makeEmojiList } from "../utils";
import useQuery from "../hooks/useQuery";

  function ArticlePage() {
    const { id } = useParams();
    const { data: post, isLoaded } = useQuery(
      `http://localhost:4000/posts/${id}`
    );



  if (!isLoaded) return <h3>Loading...</h3>;

  const { minutes, title, date, preview } = post;
  const emojis = makeEmojiList(minutes);

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} • {emojis} {minutes} min read
      </small>
      <p>{preview}</p>
    </article>
  );
}
export default ArticlePage;
