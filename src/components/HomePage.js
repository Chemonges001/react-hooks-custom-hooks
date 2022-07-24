import About from "./About";
import ArticleList from "./ArticleList";
import useQuery from "../hooks/useQuery";

function HomePage() {
  const { data: posts, isLoaded } = useQuery("http://localhost:4000/posts");
  

  return (
    <>
      <About />
      {isLoaded ? <ArticleList posts={posts} /> : <h3>Loading...</h3>}
    </>
  );
}

export default HomePage;
