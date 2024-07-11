import SinglePostView from "@/components/dynamicSections/BlogPostContainer/SinglePostView";


const baseURL = "https://cmsadmin.techforing.com/api/v1";

// Function to get single post by post url
async function getSinglePost(url) {
    const res = await fetch(`${baseURL}/blog/posts/views/with/tableofcontent/${url}`,
        { next: { revalidate: 1000 } },
        { cache: 'no-store' }
    );
    if (!res.ok) {
        throw new Error("Failed to fetch the post data");
    }
    const data = await res.json();
    return data;
}

const PostPage = async ({ params }) => {
    const { slug } = params;
    const post = await getSinglePost(slug);
    return (
        <div>
            <SinglePostView viewBlogPost={post} />
        </div>
    );
};

export default PostPage;