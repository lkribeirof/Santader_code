import React from 'react';

import './styles.css';


/*  this.props = {
        title: "exemplo"

        this.props.thumbnail -- altera thumb
        this.props.title -- altera titulo
        this.props.provider -- altera o provedor
        this.props.description -- altera a descrição
    }

    quando é passado uma propriedade no componente dentro do App.jsx ele é 'pego' com a propridade 'this'
    */ 


export class Article extends React.Component {

   

    render() {
        return (
            <article id='article'>
                <img src={this.props.thumbnail} alt={this.props.title} />

                <div className="article-infos">
                    <h2>{this.props.title}</h2>

                    <h3>{this.props.provider}</h3>

                    <p>{this.props.description}</p>

                </div>
            </article>
        )
    }
}