import React from 'react'
import { withRouter } from 'react-router-dom'

function ArticlesContainer() {
  return (
    <div className="articles-container">
      <h1>All Articles</h1>
    </div>
  )
}

export default withRouter(ArticlesContainer);