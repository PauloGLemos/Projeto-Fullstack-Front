const Api = {
    fetchGetAll: () => fetch(Api.url),
    fetchGetById: id => fetch(`${Api.url}/${id}`),
    fetchPost: (tarefa) => {
      return fetch(Api.url, {
        method: 'POST',
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(tarefa)
      })
    },
    fetchPut: (tarefa, id) => {
      return fetch(`${Api.url}/${id}`, {
        method: 'PUT',
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(tarefa)
      })
    },
    fetchDelete: (id) => {
      return fetch(`${Api.url}/${id}`, {
        method: 'DELETE'
      })
    }
  }
  
  export default Api;