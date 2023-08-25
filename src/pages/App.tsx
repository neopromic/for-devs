
import "../styles/App.css"
import Header from "../components/Header";
import Main from "../components/Main";
import PostCard from "../components/PostCard";

function App() {
  return (
    <>
      <Header />
      <Main />
      <PostCard postTime="1 dia" postTitle="Working with react..." postDescription="Hi, im working finally with react." username="neopromic"/>
    </>
  );
}

export default App;
