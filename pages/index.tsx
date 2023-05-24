"use client";

import { Product } from "@stripe/firestore-stripe-payments";
import { useState } from "react";

import AllProjects from "../components/AllProjects";
import { Header } from "../components/Header";
import { Contents, Intro } from "../components/intro";
import useAuth from "../hooks/useAuth";
import useSubscription from "../hooks/useSubscription";
// import payments from "../lib/stripe";

import type { NextPage } from "next";

interface Props {
  products: Product[];
}

const Home: NextPage = () => {
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
      <Contents />
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
