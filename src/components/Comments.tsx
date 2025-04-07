import { useContext, useState } from "react";

import { updateDoc, doc, arrayUnion, arrayRemove } from "firebase/firestore";
import { CommentsInterface, PostProps } from "./PostList";
import { db } from "firebaseApp";
import AuthContext from "context/AuthContext";
import { toast } from "react-toastify";

interface CommentProps {
  post: PostProps;
  getPost: (id: string) => Promise<void>;
}

export default function Comments({ post, getPost }: CommentProps) {
  const [comment, setComment] = useState("");
  const { user } = useContext(AuthContext);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { name, value },
    } = e;

    if (name === "comment") {
      setComment(value);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
    try {
      if (post && post?.id) {
        console.log(post);
        const postRef = doc(db, "posts", post.id);

        if (user?.uid) {
          const commentObj = {
            content: comment,
            uid: user.uid,
            email: user.email,
            createdAt: new Date()?.toLocaleDateString("ko", {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            }),
          };

          await updateDoc(postRef, {
            comment: arrayUnion(commentObj),
            updateDated: new Date()?.toLocaleDateString("ko", {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            }),
          });
          // 문서 업뎃
          await getPost(post.id);
        }
      }
      toast.success("댓글이 생성되었습니다.");
      setComment("");
    } catch (e: any) {
      console.log(e);
      toast.error(e?.code);
    }
  };

  const handleDeleteComment = async (data: CommentsInterface) => {
    const confirm = window.confirm("해당 댓글을 삭제하시겠습니까?");
    if (confirm && post.id) {
      const postRef = doc(db, "post", post?.id);

      await updateDoc(postRef, {
        comments: arrayRemove(data),
      });

      toast.success("댓글을 삭제하였습니다.");
      // 문서 업뎃
      await getPost(post.id);
    }
  };

  return (
    <div className='comments'>
      <form onSubmit={onSubmit} className='comments__form'>
        <div className='form__block'>
          <label htmlFor='comment'>댓글입력</label>
          <textarea name='comment' id='comment' required value={comment} onChange={onChange} />
        </div>
        <div className='form__block form__block-reverse'>
          <input type='submit' value='입력' className='form__btn-submit' />
        </div>
      </form>

      <div className='comments__list'>
        {post?.comments
          ?.slice(0)
          ?.reverse()
          .map((comment) => (
            <div key={comment?.createAt} className='comment_box'>
              <div className='comment__profile-box'>
                <div className='comment__email'>{comment?.email}</div>
                <div className='comment__date'>{comment?.createAt}</div>
                {comment.uid === user?.uid && (
                  <div
                    className='comment__delete'
                    onClick={() => {
                      handleDeleteComment(comment);
                    }}
                  >
                    삭제
                  </div>
                )}
              </div>
              <div className='comment__text'>{comment?.content}</div>
            </div>
          ))}
      </div>
    </div>
  );
}
