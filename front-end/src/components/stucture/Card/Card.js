import React from 'react';
import './Card.css'

const Card = (props) => {
    const tarefa = props.data;
    return (
        <div className="col">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{ tarefa.titulo }</h5>
                    <span className="badge bg-primary">{ tarefa.prioridade }</span>
                    <span className="badge bg-primary">{ tarefa.status }</span>
                    <p className="card-text">{ tarefa.descricao }</p>
                    <br/><button type="submit" className="btn btn-success">Editar</button>
                    <br/><button type="submit" className="btn btn-danger">Excluir</button>  
                </div>
            </div>
        </div>
    )
}

export default Card
