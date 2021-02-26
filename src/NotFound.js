  
import React from 'react';
// import './components/entryComponents/Form.css';

export default () => {
  return (
    <div className="not-found">
      <img className="error-image" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdocs.zendframework.com%2Fzend-expressive%2Fimages%2Ferror.png&f=1&nofb=1" alt="not found" />
      <h2>Page not Found</h2>
        <h5>Sorry but the page you're looking for doesn't exist.</h5>
        <h5>Please check the URL again or <a href="/">go back</a> to the site homepage.</h5>
    </div>
  )
}