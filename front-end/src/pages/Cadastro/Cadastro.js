import React from "react";
import './Cadastro.css';
import Api from '../../api/api';


const Cadastro = (props) => {
    const salvaDados = props.salvaDados;

    const handleSubmit = async (event) => {
        event.preventDefault();
        const titulo = event.target.titulo.value;
        const descricao = event.target.descricao.value;
        const prioridade = event.target.prioridade.value;
        const status = event.target.status.value;

        const tarefa = {
             titulo,
             descricao,
             prioridade,
             status
        }

        const request = new Request(`http://localhost:3001/tarefas`,{
            method: 'POST',
            body: JSON.stringify(tarefa),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })

        const response = await fetch(request);
        const result = await response.json();
        alert(result.message);
        salvaDados.push('/');
    }


    return (
        <div className="container cadastro">
          <div className="card mt-4">
            <div className="card-title">
              <div className="row">
                <div className="col">
                  <h3>Cadastro de Vagas</h3>
                </div>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col">
                    <div className="form-floating mb-3">
                      <input type="text" className="form-control" id="titulo" placeholder="Digite o Titulo da Tarefa"/>
                      <label htmlFor="floatingInput">Titulo</label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-floating mb-3">
                      <input type="text" className="form-control" id="descricao" placeholder="Digite a Descricao da Tarefa"/>
                      <label htmlFor="floatingInput">Descricao</label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-floating">
                      <select className="form-control" id="prioridade">
                        <option value="---">---</option>
                        <option value="Alta">Alta</option>
                        <option value="Media">Media</option>
                        <option value="Baixa">Baixa</option>
                      </select>
                      <label htmlFor="prioridade">Prioridade</label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-floating">
                      <select className="form-control" id="status">
                        <option value="---">---</option>
                        <option value="Fazer">Fazer</option>
                        <option value="Fazendo">Fazendo</option>
                        <option value="Feito">Feito</option>
                      </select>
                      <label htmlFor="status">Status</label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <button className="btn btn-primary" type="submit">Enviar</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
    )   
}

export default Cadastro 