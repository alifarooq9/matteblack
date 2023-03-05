import { type NextPage } from "next";
import HeadTag from "~/components/headTag";

const Home: NextPage = () => {
  return (
    <>
      <HeadTag />
      <main>
        <h1>Hello World</h1>
      </main>
    </>
  );
};

export default Home;
