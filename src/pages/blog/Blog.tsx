import "./blog.css";
import { posts, type PostInterface } from "../../variables";
import { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import notebook from "../../blog/notebook.png";
import BlogPost from "./blogpost/BlogPost";

export default function Blog() {
  const [commentId, setCommentId] = useState<number | null>(null);
  const [currPost, setCurrPost] = useState<PostInterface>({} as PostInterface);

  function handleChangePost(id: number) {
    setCommentId(id);
    window.scrollTo({ top: 0 });
  }

  useEffect(() => {
    setCurrPost(posts.find((_, i) => i === commentId) as PostInterface);
  }, [commentId]);

  return (
    <div className="blog">
      {commentId == null ? (
        <div className="blog-banner">
          <div className="blog-banner-texts">
            <h2 className="blog-banner-texts-title">
              <span className="title-emphasis">Este é o Coração do Blog!</span>{" "}
              O nosso dever é educar, informar, engajar e converter.
            </h2>
            <p className="blog-banner-texts-desc">
              Descubra artigos, dicas e tendências para simplificar a
              administração escolar, engajar alunos e impulsionar resultados.{" "}
              <br />
              Acesse Já!
            </p>
            <div className="blog-banner-buttons">
              <a
                className="button"
                href="https://semed.geduc.com.br/index.php?class=LoginForm"
                target="_blank"
              >
                Conheça a Plataforma
              </a>
              <button className="button--inverted button">Seja Parceiro</button>
            </div>
          </div>
          <div className="blog-banner-img">
            <div className="blog-banner-circle-top"></div>
            <img src={notebook} alt="" />
            <div className="blog-banner-circle-bottom"></div>
          </div>
        </div>
      ) : (
        <BlogPost post={currPost} />
      )}
      <div className="blog-posts">
        {commentId == null ? (
          <div className="blog-posts-header">
            <span className="posts-header-overtitle">Posts Recentes</span>
            <h2 className="posts-header-title">Acesse todos os Conteúdos</h2>
            <p className="posts-header-desc">
              Aqui transmitimos uma comunicação e transparência sem igual,
              usando a tecnologia como principal ferramenta de transformação.
            </p>
          </div>
        ) : (
          <div className="blog-posts-header--articles">
            <p>Artigos que podem te interessar</p>
          </div>
        )}
        <div className="blog-posts-cards">
          {posts.map(
            (post, i) =>
              i !== commentId && (
                <div className="blog-posts-card" key={i}>
                  <div className="posts-card-img">
                    <img src={post.img} alt="" />
                  </div>
                  <div className="posts-cards-texts">
                    <h2 className="posts-cards-texts-title">{post?.title}</h2>
                    <p className="posts-cards-texts-text">{post?.cardText}</p>
                    <button
                      className="button--underline post-cards-link"
                      onClick={() => handleChangePost(i)}
                    >
                      Ler mais
                    </button>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
