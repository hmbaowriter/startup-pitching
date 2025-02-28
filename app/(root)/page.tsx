import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "Humiba" },
      _id: 1,
      description: "This is a description",
      image:
        "https://ceblog.s3.amazonaws.com/wp-content/uploads/2023/05/18140417/notion-brand-logo.png",
      category: "Robots",
      title: "We Robots",
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>
        <ul className="card_grid mt-7">
          {posts?.length > 0 &&
            posts.map((post: StartupCardType, index: number) => (
              <StartupCard
                key={post?._id}
                post={post}
              />
            ))}
        </ul>
      </section>
    </>
  );
}
