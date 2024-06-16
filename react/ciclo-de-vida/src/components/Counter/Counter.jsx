import React from 'react';

export class Counter extends React.Component {

    constructor() {
        super(); 

        this.state = { 
            contador: 0
        }

        console.log('Construindo a classe Counter!');
    }

    shouldComponentUpdate() {
        return true;
    }


    UNSAFE_componentWillMount() {
      console.log('O componente vai montar')
    } 

// Não é recomendado utilizar o metodo acima, na verdade o metodo utilizado agora é o de baixo

    componentDidMount() {
        console.log('O componente foi montado')

        document.addEventListener('scroll',this.consoleScroll)
    }

    componentWillUpdate() {
        console.log('O componente será atualizado!');
    }

    componentDidUpdate() {
        console.log('O componente foi atualizado')
    }

    componentWillUnmount() {
        console.log('O componente será desmontado')

        document.removeEventListener('scroll', this.consoleScroll);
    }

    consoleScroll() {
        console.log('Ta dando roladas')
    }

    render() {
        console.log('Renderizando o componente counter')
        return (
            <div>
                <h1>{this.state.contador}</h1>

                <button onClick={
                    () => {
                        this.setState({
                            contador: this.state.contador - 1
                        });
                    }
                }>Diminuir</button>
                <button onClick={
                    () => {
                        this.setState({
                            contador: this.state.contador + 1
                        });
                    }
                }>Aumentar</button>
            </div>
        )
    }
}