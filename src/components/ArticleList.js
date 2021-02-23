import React from 'react';
import ArticleItem from './ArticleItem';
import '../styles/ArticlesList.css';

const ArticleList = (props) =>{
  let articlesDisplay = props.articles.map((article, index) =>{
    return <div className = "articles-container"><ArticleItem article={article} /> </div>
  })
  return <div> {articlesDisplay} </div>
}


export default ArticleList;
