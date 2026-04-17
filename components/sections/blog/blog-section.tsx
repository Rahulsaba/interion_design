import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    date: "20 Aug",
    author: "Alicia Davis",
    title: "There Are Many Variations Of Passages Orem Available.",
    excerpt:
      "It is a long established fact that a reader will majority have suffered distracted readable.",
  },
  {
    id: 2,
    date: "25 Aug",
    author: "Alicia Davis",
    title: "Generator Internet Repeat Tend Word Chunk Necessary.",
    excerpt:
      "It is a long established fact that a reader will majority have suffered distracted readable.",
  },
  {
    id: 3,
    date: "28 Aug",
    author: "Alicia Davis",
    title: "Survived Only Five Centuries But Also The Leap Into.",
    excerpt:
      "It is a long established fact that a reader will majority have suffered distracted readable.",
  },
];

export default function BlogSection() {
  return (
    <section className="bg-[var(--section-bg)] py-10">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="text-center">
          <span className="inline-flex h-8 items-center gap-2 rounded-full bg-[var(--primary-color)] px-3 text-xs font-semibold text-white">
            <i className="fa-regular fa-newspaper" />
            Our Blog
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-[var(--secondary-color)] md:text-4xl">
            Our Latest News &amp; Blog
          </h2>
          <span className="mx-auto mt-3 block h-1 w-14 rounded-full bg-[var(--primary-color)]" />
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="rounded-2xl border border-[#ececec] bg-white p-3 shadow-sm"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="/images/blogs/blog_1.webp"
                  alt={post.title}
                  width={420}
                  height={250}
                  className="h-[180px] w-full object-cover"
                />
                <span className="absolute right-2 top-2 rounded-full bg-[var(--primary-color)] px-3 py-1 text-xs font-semibold text-white">
                  {post.date}
                </span>
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 border-b border-[#ececec] pb-3 text-xs text-[#6a7894]">
                <span className="inline-flex items-center gap-1">
                  <i className="fa-regular fa-user text-[var(--primary-color)]" />
                  By {post.author}
                </span>
              </div>

              <h3 className="mt-3 text-lg font-extrabold leading-snug text-[var(--secondary-color)]">
                {post.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-[#4f5d78]">{post.excerpt}</p>

              <Link
                href="/contact"
                className="mt-4 inline-flex h-9 items-center rounded-md bg-[var(--primary-color)] px-4 text-sm font-semibold text-white transition hover:brightness-95"
              >
                Read More
                <i className="fa-solid fa-arrow-up-right-from-square ml-2 text-[11px]" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
