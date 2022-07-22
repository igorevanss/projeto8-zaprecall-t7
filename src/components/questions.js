import React from "react"
import Footer from "./footer"
import Header from "./header"

export default function Questions() {
  const [question, setQuestion]=React.useState("flash-card")
  const [answer, setAnswer]=React.useState("answer")

  return (
    
    <div className="questions">
      <Header />
      <div div className="deck">
        <div className={question}
        onClick={() =>{
          setQuestion("question")
        }}>
          <p>Pergunta 1</p>
          <span>O que é JSX?</span>
          <ion-icon name="play-outline"></ion-icon>
          <img src="./images/setinha.png" />
        </div>
        <div className={question}>
          <p>Pergunta 2</p> 
          <span>O que é JSX?</span>
          <ion-icon name="play-outline"></ion-icon>
          <img src="./images/setinha.png" />
        </div>
        <div className={question}>
          <p>Pergunta 3</p>
          <span>O que é JSX?</span>
          <ion-icon name="play-outline"></ion-icon>
          <img src="./images/setinha.png" />
        </div>
        <div className={question}>
          <p>Pergunta 4</p>
          <span>O que é JSX?</span>
          <ion-icon name="play-outline"></ion-icon>
          <img src="./images/setinha.png" />
        </div>
      </div>
      <Footer />
    </div>
    
  )
}