import React, { Component } from 'react'

// class Article extends Component {
//   render () {
//     return (
//       <section>
//         <h2>{this.props.title}</h2>
//         <p><em>Escrito por {this.props.author}</em></p>
//         <date>{this.props.date}</date>
//         <article>
//           {this.props.children}
//         </article>
//       </section>
//     )
//   }
// }

const Article = props => {
  return (
    <section>
      <h2>{props.title}</h2>
      <p><em>Escrito por {props.author}</em></p>
      <date>{props.date}</date>
      <article>
        {props.children}
      </article>
    </section>
  )
}

// class Button extends Component {
//   render () {
//     return (
//       <button style={{ borderColor: this.props.borderColor, display: 'block' }}>
//         {this.props.label}
//       </button>
//     )
//   }
// }

const Button = ({ borderColor, label }) => (
  <button style={{ borderColor, display: 'block' }}>
    {label}
  </button>
)

class App extends Component {
  render () {
    return (
      <div className="App">
        <h4>Stateless components</h4>
        <Article
          author='Nikolas'
          date={new Date().toLocaleDateString()}
          title='Artículo sobre la prop children'
        >
          <p>El contenido que envolvemos dentro del componente Article será enviado al componente como this.props.children.</p>
          <strong>Y mantiene las etiquetas y componentes que hayáis añadido dentro</strong>
        </Article>
        <br />
        <Button label='Comentar artículo' />
      </div>
    )
  }
}

export default App
