import React from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function Home() {
  const authStatus = useSelector((state) => state.auth.status);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    appwriteService
      .getPosts()
      .then((posts) => {
        if (posts) {
          setPosts(posts.documents);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  if (!authStatus) {
    return (
      <div className="w-full h-lvh py-8  flex items-center text-center ">
        <Container>
          <div className="flex flex-wrap ">
            <div className="p-2 w-full  ">
              <h1 className=" text-3xl font-bold hover:scale-150  duration-500 ease-in-out">
                Login to read posts
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <svg
          className="animate-spin h-10 w-10 text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          ></path>
        </svg>
      </div>
    );
  }

  return (
    <div className=" p-7  bg-gray-900">
      <Container>
        <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3  gap-5">
          {posts.map((post) => (
            <div key={post.$id} className="p-4 ">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
