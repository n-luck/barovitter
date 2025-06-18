import useCurrentUser from "./useCurrentUser";
import usePost from "./usePost";
import usePosts from "./usePosts";
import { useLoginModal } from "./useLoginModal";
import { useCallback, useMemo } from "react";
import toast from "react-hot-toast";
import axios from "axios";

export const useLike = ({
  postId,
  userId,
}: {
  postId: string;
  userId?: string;
}) => {
  const { data: currentUser } = useCurrentUser();
  const { data: fetchedPost, mutate: mutateFetchedPost } = usePost(postId);
  const { mutate: mutateFetchedPosts } = usePosts(userId);

  const loginModal = useLoginModal();

  const hasLiked = useMemo(() => {
    const list = fetchedPost?.likedIds || [];
    return list.includes(currentUser?.id);
  }, [currentUser?.id, fetchedPost?.likedIds]);

  const toggleLike = useCallback(async () => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    try {
      let request;

      if (hasLiked) {
        request = () => axios.delete("/api/like", { data: { postId } });
        toast.success("Like removed!");
      } else {
        request = () => axios.post("/api/like", { postId });
        toast.success("Liked!");
      }

      await request();

      mutateFetchedPosts();
      mutateFetchedPost();
    } catch (error) {
      toast.error(`Something went wrong. ${error}`);
    }
  }, [
    currentUser,
    hasLiked,
    loginModal,
    mutateFetchedPost,
    mutateFetchedPosts,
    postId,
  ]);

  return { hasLiked, toggleLike };
};

export default useLike;
