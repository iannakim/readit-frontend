import React from 'react'
import { withRouter } from 'react-router-dom'
import Article from './Article'
import './article.css'

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
      <h1>Latest News</h1>
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