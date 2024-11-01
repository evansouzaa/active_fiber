import axios from "axios"

const api = axios.create({
    baseURL: 'http://eva-server.duckdns.org:4000', // URL da API
    timeout: 10000, // Tempo máximo de espera por uma requisição (10 segundos)
  });

export default api

//api.defaults.headers.common['Authorization'] = AUTH_TOKEN;