const View = require('./view');
const MainMenu = require('./main-menu')
class Login extends View {
    constructor(user){
        super(user.socket)        
        this.user = user;
    }

    render() {
        this.writeLine('Enter your username:')
    }

    processInput(data) {
        console.log(this.user.name);
        if (!this.user.name) {
            this.user.name = data
            this.user.currentPage = new MainMenu(this.user);
            this.user.currentPage.render();
        }
    }
   
}

module.exports = Login;