import {withRouter} from "react-router-dom";
import '../styles/FullArticle.css'

import React from 'react'

const FullArticle =  (props) => {

  const renderArticle = (article) =>{

    console.log(article)
    let img = article.urlToImage
    return (
    <div className = "inner-full-article-container">
      <div className = "full-article-title">{article.title}</div>
      <div className = "full-article-content">
      <div className ="full-article-text">{article.content} </div>
        <div className = "more"> want to know more {article.url} </div>
      <img className = "full-article-image" src={img} />

      </div>
     </div>
  )
  }
  const findArticle = (id) =>{
    console.log("uihfaskhnfiaj")

    let clickedArticle = props.articles.filter((article) =>{
      return article.id === id;
    })
    console.log(clickedArticle)
     return renderArticle(clickedArticle[0])
 }

 if (props.article === []){
   return <div> No article </div>
 }
 return <div className = "full-article-container"> {findArticle(parseInt(props.match.params.id))} </div>


}

export default withRouter(FullArticle); 
