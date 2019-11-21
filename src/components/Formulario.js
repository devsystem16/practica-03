import React, { Component } from 'react'
import { CategoriaConsumer } from './context/CategoriasComponent'

// import { UserConsumer } from './context/ContextApp'


export default class Formulario extends Component {
    render() {

        return (
            <CategoriaConsumer>
                {(value) => {
                    return (
                        <form>
                            <div className="row col-md-12">
                                <div className="form-group form-inline mt-4">

                                    <input type="text" name="busqueda" className="form-control"></input>

                                    <select className="form-control" name="categoria">
                                        <option value="1">Op1</option>
                                    </select>

                                    <button name="buscar" className="btn btn-primary" >Buscar</button>

                                </div>
                            </div>
                        </form>
                    )
                }}
            </CategoriaConsumer>



        )

    }
}
