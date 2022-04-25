import api from "./API"

class MovieAPIService {
    constructor(){
    }
    async getAllMovie(){
        return api.get('/r-api/?api=filmes')
    }
    async getById(id: string) {
        return api.get(`/r-api/?api=filmes/${id}`)
    }
}

export default new MovieAPIService()