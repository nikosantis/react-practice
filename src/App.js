import React, { Component } from 'react'

class Box extends Component {
  render() {
    return (
      <div style={{ border: '1px solid #000', margin: 5, padding: 5 }}>
        {this.props.children}
      </div>
    )
  }
}

class Article extends Component {
  render () {
    return (
      <section>
        <h2>{this.props.title}</h2>
        <p><em>Escrito por {this.props.author}</em></p>
        <Box>{this.props.date}</Box>
        <article>
          {this.props.children}
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
          author='Nikolas Santis'
          date={new Date().toLocaleDateString()}
          title='Artículo sobre la prop children'
        >
          <p>El contenido que envolvemos dentro del component Article será
          enviado <strong>Y mantiene las etiquetas que hayáis añadido dentro</strong>
          </p>
        </Article>
        <Article
          author='Nikolas Santis'
          date={new Date().toLocaleDateString()}
          title='Otro Artículo sobre la prop children'
        >
          <p>El contenido que envolvemos dentro del component Article será
          enviado <strong>Y mantiene las etiquetas que hayáis añadido dentro</strong>
          </p>
        </Article>
        <Article
          author='Nikolas Santis'
          date={new Date().toLocaleDateString()}
          title='Tercer Artículo sobre la prop children'
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
