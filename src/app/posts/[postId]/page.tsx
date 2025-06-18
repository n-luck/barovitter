import { Post } from "@/components/Layout/Post";

const PostPage = async ({ params }: { params: { postId: string } }) => {
  const { postId } = await params;
  return (
    <div>
      <Post postId={postId} />
    </div>
  );
};

export default PostPage;
