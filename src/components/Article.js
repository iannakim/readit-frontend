import React from 'react'
import { withRouter } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import './article.css'

class Article extends React.Component {
  

  handleClick(url) {
      //open modal with form [pre-filled with article title, image, description, url and empty content]
    console.log("you clicked me!", url.url)

  }


  render(){
    // console.log(this.props.article)
    let {title, source, author, description, date, content, url, image} = this.props.article
    
    return(
      <div className="col">

          <Card style={{ width: '18rem'}}>
            <Card.Img src={ image } />
            <Card.Body>
              <Card.Title>{ title }</Card.Title>
              <Card.Text>
                {description}
              </Card.Text>
              <a href={url} target='_blank'><Button onClick={()=>{this.handleClick({url})}} variant="primary">Read More</Button></a>
            </Card.Body>
          </Card>

      </div>
    )
  }
}

export default withRouter(Article)