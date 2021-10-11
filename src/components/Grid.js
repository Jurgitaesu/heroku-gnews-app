import Article from './Article';

function Grid({ articles, saveClick }) {
  return (
    <div className="row">
      {articles &&
        articles.map((article) => (
          <div key={article.url} className="col-12 col-sm-12 col-md-6 col-lg-4 mb-4">
            <Article article={article} saveClick={(detail) => saveClick(detail)} />
          </div>
        ))}
    </div>
  );
}

export default Grid;