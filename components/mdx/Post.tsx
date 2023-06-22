import Button from "@mui/material/Button";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";

import { PostType } from "../../types/post";

type IndexProps = {
  posts: PostType[];
};

export const Contents = ({ posts }: IndexProps) => {
  console.log(posts);

  return (
    <div className="flex justify-center">
      <div className="mx-auto grid grid-cols-2 gap-2">
        {/* view mdx all posts */}
        {posts.map((post) => (
          <article className="mt-12" key={post.slug}>
            <div className="flex justify-center">
              <Button color="secondary" size="large" variant="outlined">
                <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
                  <div className="">
                    <Image
                      alt="logo"
                      className="mx-auto object-cover"
                      height="100"
                      src={post.image}
                      width="400"
                    />
                    <div className="lowercase">{post.title}</div>
                    <div className="lowercase">{post.description}</div>
                  </div>
                  <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                    {format(parseISO(post.date), "MMMM dd, yyyy")}
                  </p>
                </Link>
              </Button>
            </div>

            {/* <h1 className="mb-2 text-xl">
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
            </p> */}
          </article>
        ))}
        {/* <div>
          <Button color="secondary" size="large" variant="outlined">
            <div className="">
              <Image alt="logo" height="100" src="/LightMode_CreateNextApp.avif" width="400" />
              <div className="lowercase">Next.js</div>
              <div className="lowercase">Next.jsでフルスタックアプリケーションを作りましょう!</div>
            </div>
          </Button>
        </div>
        <div>
          <Button color="secondary" size="large" variant="outlined">
            <div className="">
              <Image alt="logo" height="100" src="/react.png" width="400" />
              <div className="lowercase">React</div>
            </div>
          </Button>
        </div>
        <div>
          <Button color="secondary" size="large" variant="outlined">
            <div className="">
              <Image alt="logo" height="100" src="/firebase.png" width="400" />
              <div className="lowercase">firebase</div>
            </div>
          </Button>
        </div>
        <div>
          <Button color="secondary" size="large" variant="outlined">
            <div className="">
              <Image alt="logo" height="100" src="/express.jpg" width="400" />
              <div className="lowercase">express</div>
            </div>
          </Button>
        </div> */}
      </div>
    </div>
  );
};

export const Navbar = () => {
  return <div></div>;
};
