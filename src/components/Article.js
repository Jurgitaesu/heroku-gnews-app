import { Link } from 'react-router-dom';

function Article({ article, saveClick }) {
  return (
    <Link to={{ pathname: article.url }} target="_blank" className="text-decoration-none text-dark">
      <div className="card d-flex flex-column justify-content-between">
        <img src={article.image} className="card-img-top" alt={article.title} onClick={() => saveClick(article.image)} />
        <div className="card-body">
          <h5 className="card-title text-center" title={article.title} onClick={() => saveClick(article.title)}>
            {article.title}
          </h5>
          <p className="card-text text-truncate" title={article.description} onClick={() => saveClick(article.description)}>
            {article.description}
          </p>
        </div>
        <div className="card-body fst-italic">
          <div className="card-text">Published at:</div>
          <div className="card-text" onClick={() => saveClick(article.publishedAt)}>
            {new Date(article.publishedAt).toLocaleString('lt-LT')}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Article;
