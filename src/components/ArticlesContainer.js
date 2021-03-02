import React from 'react'
import { withRouter } from 'react-router-dom'
import Article from './Article'
import './article.css'
import  news from '../images/news.png';

function ArticlesContainer(props) {

  let arrayOfArticles = props.articles.map((article) => {
    return <Article 
              key={article.id}
              article={article.attributes}
            />
  })

// console.log(props.articles)
  return (
    
    <div class="background">
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    
    <div className="articles-container">
      <img src={news}/><h1>Explore latest News</h1>
      <div className="container">
        <div className="row">
          { arrayOfArticles }
        </div>
      </div>
    </div>
      
  </div>
  )
}

export default withRouter(ArticlesContainer);