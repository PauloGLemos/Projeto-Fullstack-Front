import React from "react";
import Card from '../../components/stucture/Card/Card';
import List from "../../components/stucture/List/List";
import './Home.css';

const Home = () => {
    return (
        <div className="container home">
            <h1 className="text-center">Listagem de Tarefas</h1> 
            <List/>  
        </div>
    )
}

export default Home