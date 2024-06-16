import React from "react";
import './styles/App.css';

import { Navbar } from "./components/navbar/navbar.jsx";
import { Article } from "./components/article/Article.jsx";
import { Counter } from "./components/counter/Counter.jsx";

import article1Img from './assets/images/article1.svg'
import article2Img from './assets/images/article2.svg'
import article3Img from './assets/images/article3.svg'



// Componente em classe é uma classe que herda a classe //Component do React, e retorna HTML dentro do metodo render

class App extends React.Component {


  //   <> 
  //      <Navbar />
  //      <Article />
  //   </>
  // Fragment é oque envolve os dois componentes 

  // Método utilizado para renderizar o conteúdo HTML do componente
  render() {
    return (
      <> 
          <Navbar />

          <Counter />
        
        <section id="articles">
          <Article 
          thumbnail={article1Img}
          title="Designing Dashboards" 
          provider="NASA"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."/>
          
          <Article 
          thumbnail={article2Img}
          title="Vibrant Portraits of 2020" 
          provider="SpaceNews"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dignissimos, debitis ad quasi, reprehenderit fugiat veritatis voluptatem earum quia minus hic! Quae facilis eos magni atque. Aut optio doloribus ipsum!"/>
          
          <Article 
          thumbnail={article3Img}
          title="36 Days of Malayalam type" 
          provider="Spaceflight Now"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."/>
          
          <Article 
          thumbnail={article1Img}
          title="Designing Dashboard" 
          provider="NASA"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dignissimos, debitis ad quasi, reprehenderit fugiat veritatis voluptatem earum quia minus hic! Quae facilis eos magni atque. Aut optio doloribus ipsum!"/>

        </section>
      </>
     );
  }
}

export default App;


