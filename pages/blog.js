import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export default function Blog({ post }) {
  return (
    <>
      <div className="">
        <Head>
          <title>RedeSF - Blog</title>
        </Head>
        <div className="relative mt-3 md:py-0">
          <div>
            <Image
              src="/blog/blog-cover.jpg"
              alt="Blog - Rede Sem Fronteiras"
              layout="responsive"
              width={1920}
              height={550}
              objectFit="cover"
            />
          </div>
          <div className="absolute top-0 bg-black opacity-50 w-full h-full flex items-center justify-center">
            <div className=" text-gray-50 text-xl xl:text-5xl font-semibold text-center">
              Blog - Rede Sem Fronteiras
            </div>
          </div>
        </div>
        {/*  */}
        
            <div className="md:grid lg:grid-cols-3 container px-4 mx-auto space-x-6">
              {post &&
                post.map((post) => (
                  <div>
                    <Link href={`/${post.slug}`} key={post.id}>
                      <a>
                    <div className="flex max-w-xl mt-10 bg-white shadow-lg border rounded-lg overflow-hidden mx-auto">
                      <div className="flex items-center w-full">
                        <div className="w-full">
                        
                          <div className="" />
                          <div className="text-gray-400 font-medium text-sm mb-7 mt-6 mx-3 px-2">
                            <Image
                              src={post.cover.url}
                              alt="Blog - Rede Sem Fronteiras"
                              layout="responsive"
                              width={post.cover.width}
                              height={post.cover. height}
                              objectFit="cover"
                            />
                          </div>
                          <div className="text-gray-600 font-semibold text-lg mb-2 mx-3 px-2">
                            {post.title}
                          </div>
                          <div className="text-gray-500 font-thin text-sm mb-6 mx-3 px-2">
                            {post.resume}
                          </div>
                          
                          <div className="flex w-full border-t border-gray-100">
                            <div className="mt-3 mx-5 flex flex-row">
                              <div className="flex text-gray-700 font-normal text-sm rounded-md mb-2 mr-4 items-center">
                                Author:
                                <div className="ml-1 text-gray-400 font-thin text-ms">
                                {post.author}
                                </div>
                              </div>
                              <div className="flex text-gray-700 font-normal text-sm rounded-md mb-2 mr-4 items-center">
                                Comments:
                                <div className="ml-1 text-gray-400 font-thin text-ms">
                                  {" "}
                                  30
                                </div>
                              </div>
                              <div className="flex text-gray-700 font-normal text-sm rounded-md mb-2 mr-4 items-center">
                                Views:{" "}
                                <div className="ml-1 text-gray-400 font-thin text-ms">
                                  {" "}
                                  60k
                                </div>
                              </div>
                            </div>
                            <div className="mt-3 mx-5 w-full flex justify-end">
                              <div className="flex text-gray-700 font-normal text-sm rounded-md mb-2 mr-4 items-center">
                                Categories:
                                <div className="ml-1 text-gray-400 font-thin text-ms">
                                {post.id}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="relative flex items-center self-center w-full max-w-xl p-4 overflow-hidden text-gray-600 focus-within:text-gray-400">
                            <img
                              className="w-10 h-10 object-cover rounded-full shadow mr-2 cursor-pointer"
                              alt="User avatar"
                              src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
                            />
                            <span className="absolute inset-y-0 right-0 flex items-center pr-6">
                              <button
                                type="submit"
                                className="p-1 focus:outline-none focus:shadow-none hover:text-blue-500"
                              >
                                <svg
                                  className="w-6 h-6 transition ease-out duration-300 hover:text-blue-500 text-gray-400"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                              </button>
                            </span>
                            <input
                              type="search"
                              className="w-full py-2 pl-4 pr-10 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400 focus:bg-white focus:outline-none focus:border-blue-500 focus:text-gray-900 focus:shadow-outline-blue"
                              style={{ borderRadius: "25px" }}
                              placeholder="Post a comment..."
                              autoComplete="off"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    </a>
                    </Link>
                  </div>
                ))}
            </div>
         
        
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://cryptic-retreat-90035.herokuapp.com/posts");
  const post = await res.json();

  return {
    props: {
      post,
    },
    revalidate: 1,
  };
}
