import React, { Component } from 'react'
import axios from 'axios';


export const CategoriaContext = React.createContext();
export const CategoriaProvider = CategoriaContext.Provider
export const CategoriaConsumer = CategoriaContext.Consumer


export default class CategoriasComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {categorias : []}
    }

    componentDidMount() {
        this.consultarApi();

    }
    consultarApi = async () => {
    const resultado =     await axios.get("https://www.eventbriteapi.com/v3/categories/?token=C3RUOGZC3BIYYWBCV6YB")
    this.setState({
        categorias :resultado.data.categories
    })
    }

    render() {
        return (
            <CategoriaContext.Provider
            value  = {{ categorias : this.state.categorias}}
            >
                    {this.props.children}
            </CategoriaContext.Provider>
        )
    }
}
