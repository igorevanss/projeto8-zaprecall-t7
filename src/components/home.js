import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home">
      <img src="./images/logo-big.png" alt=""/>

      <h2>ZapRecall</h2>
      
      <Link to='/questions'>
      <button><p>Iniciar Recall!</p></button>
      </Link>
    </div>
  )
}