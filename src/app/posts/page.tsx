import React from "react";

const getPosts = async () => {
  const data = await fetch("https://randomuser.me/api/", {
    cache: "no-store",
  });
  const posts = await data.json();

  return posts;
};

async function page() {
  const posts = await getPosts();
  return (
    <div className="flex flex-col items-center p-5">
      <h1 className="text-6xl font-extrabold text-center p-5">Blogs</h1>
      <div>{JSON.stringify(posts, null, 2)}</div>
    </div>
  );
}

export default page;
