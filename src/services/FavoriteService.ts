export type TypeFavoriteItem = {
    id: number,
    nome: string,
    foto: string
}
class FavoriteService {
    favoriteID: string
    constructor() {
        this.favoriteID = 'favoriteList'
    }
    getAll(): Array<TypeFavoriteItem> {
        let list = localStorage.getItem(this.favoriteID)
        return list && JSON.parse(list) || []
    }
    create(item: TypeFavoriteItem):boolean{
        let allFavorites = this.getAll()
        let exists = allFavorites.some((element) => {
            return element.id === item.id 
        })
        if (exists) return false

        allFavorites.push(item)
        localStorage.setItem(this.favoriteID, JSON.stringify(allFavorites))
        
        return true
    }
    remove(item: TypeFavoriteItem) {
        let allFavorites = this.getAll()
        let newFavorites = allFavorites.filter((element) => {
            return element.id !== item.id
        })
        localStorage.setItem(this.favoriteID, JSON.stringify(newFavorites))
    }
}

export default new FavoriteService()