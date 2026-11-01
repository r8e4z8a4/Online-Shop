import RelatedBlogCard from "./RelatedBlogCard";

const RelatedBlogs = () => {
  return (
    <div className="grid grid-cols-2 gap-5">
      {Array.from({ length: 4 }).map((article, index) => (
        <RelatedBlogCard key={crypto.randomUUID()}/>
      ))}
    </div>
  );
};

export default RelatedBlogs;
