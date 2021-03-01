import React from 'react';
import { withRouter } from 'react-router-dom'
// import Log from './Log

function LogsContainer(props) {

  // let arrayOfArticles = props.articles.map((article) => {
  //   return <Article 
  //             key={article.id}
  //             article={article.attributes}
  //           />
  // })

  return (
    
    <div className="logs-container">
      <h1>My Reading Logs</h1>
      <div className="container">
        <div className="row">
          {/* { arrayOfArticles } */}
        </div>
      </div>
    </div>
  )
}

export default withRouter(LogsContainer);