import React from 'react'
import { Card } from 'react-bootstrap'

const Project = ({ project }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Card.Img src={project.image} variant='top' />
      <Card.Body>
        <Card.Title>
          <a href={`${project.url}`}>{project.title}</a>
        </Card.Title>
        <Card.Text as='div'>
          <div className='my-3'>{project.desc}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Project
