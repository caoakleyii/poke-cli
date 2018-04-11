class Login extends View {
    constructor(user){
        super(user.socket)        
        this.user = user;
    }
    render() {

    }
    
   /*
    * Handle OnLogin Event (@Login)
    */
   onLogin(data) {
    if (data === '@Login') {
        this.writeLine('Enter your username:')
        return
    }
        console.log(data)
        this.user.name = data
        this.user.currentPage = new MainMenu(user.socket);
        this.user.currentPage.render();
   }
   
}