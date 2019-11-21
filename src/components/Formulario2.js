import React, { Component } from 'react';
import { CategoriaConsumer } from './context/CategoriasComponent'


class Formulario2 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <CategoriaConsumer>
                {(value)  =>  {
                    return (
                        <h2>okey</h2>
                    )
                } }
            </CategoriaConsumer>
        );
    }
}

export default Formulario2;