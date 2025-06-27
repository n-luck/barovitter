import PostWrapper from "@/components/Layout/Post";

const PostPage = async ({
  params,
}: {
  params: Promise<{ postId: string }>;
}) => {
  const { postId } = await params;

  return (
    <div>
      <PostWrapper postId={postId} />
    </div>
  );
};

export default PostPage;
