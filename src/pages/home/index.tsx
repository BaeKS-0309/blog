import Header from "components/Header";
import Footer from "components/Footer";
// import PostList from "components/PostList";
import HomeAboutMe from "components/Home/AboutMe";
import HomeBlog from "components/Home/Blog";
import HomeProject from "components/Home/Project";

export default function Home() {
  return (
    <>
      <Header />
      {/* <PostList /> */}
      <main className='main'>
        <HomeAboutMe />
        <HomeProject />
        <HomeBlog />
      </main>
      <Footer />
    </>
  );
}
