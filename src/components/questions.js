import React from 'react'
import Footer from './footer'
import Header from './header'

export default function Questions() {
  const [question, setQuestion] = React.useState('flash-card')

  return (
    <div className="questions">
      <Header />
      <div div className="deck">
        <div
          className={question}
          onClick={() => {
            setQuestion('question')
          }}
        >
          <strong>Pergunta 1</strong>

          <p /*className="reply"*/>
            JSX é uma sintaxe para escrever HTML dentro do JS
          </p>

          <span>O que é JSX?</span>

          <ion-icon name="play-outline"></ion-icon>

          <img
            onClick={() => {
              setQuestion('answer')
            }}
            src="./images/setinha.png"
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}
