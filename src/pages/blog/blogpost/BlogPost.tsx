import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import type { PostInterface } from "../../../variables";
import logo from "../../../assets/logo.png";
import { LiaComments } from "react-icons/lia";
import "./blogPost.css";

export default function BlogPost({
  post,
}: {
  post: PostInterface | null | undefined;
}) {
  return (
    <div className="blog-post">
      <div className="blog-post-main">
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
            <p key={i} className="blog-post-text">
              {text}
            </p>
          ))}
        </div>
        <div className="blog-post-share">
          <h3>Gostou do Conteúdo ? Compartilhe!</h3>
          <div className="blog-share-buttons">
            <Link className="blog-share-button" target="_blank" to="https://www.instagram.com/geduc.educacao">
              <AiOutlineInstagram size={24} className="top-social-icon" />
            </Link>
            <Link className="blog-share-button"
              target="_blank"
              to="https://api.whatsapp.com/send/?phone=5585994323201"
            >
              <AiOutlineWhatsApp size={24} className="top-social-icon" />
            </Link>
            <Link className="blog-share-button"
              target="_blank"
              to="https://www.linkedin.com/company/geduc-soluções/"
            >
              <FaLinkedin size={24} className="top-social-icon" />
            </Link>
          </div>
        </div>
      </div>
      <div className="blog-post-comments">
        <div className="post-comments-header">
          <h3>Comentarios</h3>
          <LiaComments size={26} />
        </div>
        <div className="post-comments-cards">
          {post?.comments.map((comment, i) => (
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
        <div className="posts-comments-button">
          <button className="button">Adicionar Comentario</button>
        </div>
      </div>
    </div>
  );
}
