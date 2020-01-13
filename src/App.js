import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Article extends Component {
  static propTypes ={
    author: PropTypes.string.isRequired
  }

  render () {
    const {
      title,
      author,
      date,
      children
    } = this.props

    return (
      <section style={{ borderBottom: '1px solid #000', marginBottom: 50 }}>
        <h2>{title}</h2>
        {author && <p><em>Escrito por {author}</em></p>}
        <date>{date}</date>
        <article>
          {children}
        </article>
      </section>
    )
  }
}


class App extends Component {
  render () {
    return (
      <div className="App">
        <h4>Children props</h4>
        <Article
          date={new Date().toLocaleDateString()}
          title='Artículo sobre la prop children'
        >
          <p>El contenido que envolvemos dentro del component Article será
          enviado <strong>Y mantiene las etiquetas que hayáis añadido dentro</strong>
          </p>
        </Article>
      </div>
    )
  }
}

export default App
