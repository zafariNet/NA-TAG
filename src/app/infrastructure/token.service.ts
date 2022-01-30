export class TokenService{
    getToken(): string | null{
        return localStorage.getItem('token')
    }
    setToken(token:string){
        localStorage.setItem('token',token)
    }
}