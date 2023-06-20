import Image from "next/image";
import React, { use } from "react";
import { Button } from "../components/ui/button";

const getPosts = async () => {
  const data = await fetch("https://randomuser.me/api/", {
    next: { revalidate: 15 },
  });
  const posts = await data.json();

  return posts;
};

async function page() {
  const posts = await getPosts();

  return (
    <div className="flex flex-col items-center p-5">
      <h1 className="text-6xl font-extrabold text-center p-5">Blogs</h1>
      <Image
        alt=""
        src={posts.results[0].picture.large}
        height={200}
        width={200}
        className="rounded-full"
      />
      <div className="p-5">
        <h2 className="text-2xl font-bold">
          {posts.results[0].name.first} {posts.results[0].name.last}
        </h2>
      </div>
      <Button>Refresh</Button>
    </div>
  );
}

export default page;
