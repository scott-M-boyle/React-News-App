import React from 'react';
import '../styles/ArticleItem.css';

const ArticleItem = ({article}) =>{
  const { title }= article;
  const date = article.publishedAt.split("T")[0]
  const { author }= article;
  const {url} = article;



  return <div className = "individual-article">
      <div className = "article-top"><a href={url}>{title}</a></div>
      <div className = "article-bottom">{date} - {author} </div>
  </div>
}

export default ArticleItem
