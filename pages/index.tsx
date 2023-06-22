import { Product } from "@stripe/firestore-stripe-payments";
import React, { useState } from "react";

import AllProjects from "../components/AllProjects";
import { Header } from "../components/Header";
import { Info } from "../components/Info";
import { Intro } from "../components/intro";
import { Contents } from "../components/mdx/Post";
import useAuth from "../hooks/useAuth";
import useSubscription from "../hooks/useSubscription";
// import payments from "../lib/stripe";
import { getAllPosts } from "../lib/api";
import { PostType } from "../types/post";

import type { GetStaticProps } from "next";

interface Props {
  products: Product[];
}

// add mdx posttype
type IndexProps = {
  posts: PostType[];
};

const Home = ({ posts }: IndexProps) => {
  const [pageToggle, setPageToggle] = useState<Boolean>(false);
  const toggleBool = () => setPageToggle(!pageToggle);

  const { user, logout, loading } = useAuth();

  // console.log(user);

  const subscription = useSubscription(user);
  if (loading || subscription === null) return null;

  // if (!subscription) return <div className="text-red-600">サブスク登録必要</div>;

  return (
    <div className="">
      <Header />
      <Intro />
      <Info />
      {/* view mdx all posts 多分消す */}
      {/* {posts.map((post) => (
        <article className="mt-12" key={post.slug}>
          <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
            {format(parseISO(post.date), 'MMMM dd, yyyy')}
          </p>
          <h1 className="mb-2 text-xl">
            <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
              <div className="text-gray-900 dark:text-white dark:hover:text-blue-400">
                {post.title}
              </div>
            </Link>
          </h1>
          <p className="mb-3">{post.description}</p>
          <p>
            <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
              <div>Read More</div>
            </Link>
          </p>
        </article>
      ))} */}
      <Contents posts={posts} />
      <AllProjects />
    </div>
  );
};

export default Home;

// export const getServerSideProps = async () => {
//   const products = await getProducts(payments, {
//     activeOnly: true,
//     includePrices: true,
//   })
//     .then((res) => res)
//     .catch((error) => console.log(error.message))

//   return {
//     props: {
//       products,
//     },
//   }
// }

// get mdx
export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(["date", "description", "slug", "title", "image"]);

  return {
    props: { posts },
  };
};
