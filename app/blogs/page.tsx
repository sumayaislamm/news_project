import { getBlogs } from "../service/getBlogs";
import { cacheLife } from "next/cache";

const page = async () => {
  "use cache";
  cacheLife("days");
  const blogs = await getBlogs();
  console.log(blogs);
  return (
    <div className="m-20">
      Blog page
      {blogs.map((blogs: any) => (
        <div key={blogs.id} className="m-20">
          <h1>Blogs Number {blogs.id}</h1>
          <h2 className="text-red-600">Here is the Title{blogs.title}</h2>
          <p className="text-blue-900">{blogs.body}</p>
        </div>
      ))}
    </div>
  );
};

export default page;
