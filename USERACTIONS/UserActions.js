
 class UserActions{

    static loginUser(user,setUser){
    window.localStorage.setItem('user',JSON.stringify(user))
    setUser(user)
    }
    
    static logoutUser(){
        window.localStorage.removeItem('user')
    }
}

export default UserActions