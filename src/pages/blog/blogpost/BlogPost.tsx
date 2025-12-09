import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { type PostInterface } from "../../../variables";
import logo from "../../../assets/logo.png";
import { LiaComments } from "react-icons/lia";
import "./blogPost.css";
import { useEffect, useState } from "react";

export default function BlogPost({ post }: { post: PostInterface }) {
  const user = {
    name: "usuario teste",
    image:
      "https://www.kravemarketingllc.com/wp-content/uploads/2018/09/placeholder-user-500x500.png",
  };

  const [comments, setComments] = useState(post?.comments);
  const [comment, setComment] = useState("");
  const [showComment, setShowComment] = useState(false);
  const [commentError, setCommentError] = useState({ msg: false, message: "" });

  function handleShowComment() {
    setShowComment(!showComment);
  }

  function handlePostComment() {
    if (comment.length < 8) {
      setCommentError({
        msg: true,
        message: "Escreva um comentário maior",
      });
      setTimeout(() => {
        setCommentError({ msg: false, message: "" });
        setComment("");
        setShowComment(false);
      }, 3000);
    } else if (comments.find(comment => comment.name == user.name)) {
      setCommentError({
        msg: true,
        message: "Somente um comentário por usuário",
      });
      setTimeout(() => {
        setCommentError({ msg: false, message: "" });
        setComment("");
        setShowComment(false);
      }, 3000);
    } else {
      setComment("");
      setShowComment(false);
      setComments([
        ...comments,
        { name: user.name, comment: comment, img: user.image },
      ]);
    }
  }

  useEffect(() => {
    setComments(post?.comments);
  }, [post]);

  return (
    <div className="blog-post">
      <div className="blog-post-main" data-aos="fade-right">
        <div className="blog-post-img-container">
          <div className="blog-post-img-logo">
            <img src={logo} alt="" />
          </div>
          <img className="blog-post-img" src={post?.img} alt="" />
        </div>
        <div className="blog-post-header">
          <h2 className="blog-post-title">{post?.title}</h2>
          <p className="blog-post-subtitle">{post?.subTitle}</p>
        </div>
        <div className="blog-post-texts">
          <h3 className="blog-post-texts-title">Introdução</h3>
          {post?.texts.map((text, i) => (
            <div
              key={i}
              className="blog-post-text"
              dangerouslySetInnerHTML={{ __html: text }}
            />
          ))}
        </div>
        <div className="blog-post-share">
          <h3>Gostou do Conteúdo ? Compartilhe!</h3>
          <div className="blog-share-buttons">
            <Link
              className="blog-share-button"
              target="_blank"
              to="https://www.instagram.com/geduc.educacao"
            >
              <AiOutlineInstagram size={24} className="top-social-icon" />
            </Link>
            <Link
              className="blog-share-button"
              target="_blank"
              to="https://api.whatsapp.com/send/?phone=5585994323201"
            >
              <AiOutlineWhatsApp size={24} className="top-social-icon" />
            </Link>
            <Link
              className="blog-share-button"
              target="_blank"
              to="https://www.linkedin.com/company/geduc-soluções/"
            >
              <FaLinkedin size={24} className="top-social-icon" />
            </Link>
          </div>
        </div>
      </div>
      <div className="blog-post-comments" data-aos="fade-left">
        <div className="post-comments-header">
          <h3>Comentarios</h3>
          <LiaComments size={26} />
        </div>
        <div className="post-comments-cards">
          {comments &&
            comments.map((comment, i) => (
              <div className="comments-card" key={i}>
                <div className="comments-card-poligon"></div>
                <div className="comments-card-img">
                  <img src={comment.img} alt="" />
                </div>
                <div className="comments-card-texts">
                  <h3 className="comments-card-texts-title">{comment.name}</h3>
                  <p className="comments-card-texts-desc">{comment.comment}</p>
                </div>
              </div>
            ))}
        </div>
        {!showComment ? (
          <div className="posts-comments-button">
            <button className="button" onClick={handleShowComment}>
              Adicionar Comentario
            </button>
          </div>
        ) : (
          <div className="posts-comments-comment">
            <form className="comment-form" autoComplete="off">
              <div className="comment-form-item">
                <img
                  className="comment-form-item-img"
                  src={user.image}
                  alt=""
                />
                <label htmlFor="comment"></label>
                <input
                  id="comment"
                  className="comment-form-input"
                  type="text"
                  placeholder="Adicionar comentário"
                  autoComplete="off"
                  value={comment}
                  onChange={e => setComment(e.target.value)}
                />
              </div>
              <button
                type="button"
                className="comment-form-button"
                onClick={handlePostComment}
              >
                Pubicar
              </button>
              {commentError.msg && (
                <span className="comment-form-error">
                  {commentError.message}
                </span>
              )}
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
