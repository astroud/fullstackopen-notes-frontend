import React from 'react'

const Footer = () => {
  const footerStyle = {
    color: '#61AFEF',
    fontStyle: 'italic',
    fontSize: 16
  }
  return (
    <div style={footerStyle}>
      <br />
      <em>Note app, Department of Computer Science, University of Helsinki 2021</em>
      {/* build scripts work */}
    </div>
  )
}

export default Footer