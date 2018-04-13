const View = require('./view')

class MainMenu extends View {
    constructor(user){
        super(user.socket);
        this.user = user;
        
    }
    render(){
        this.writeLine(`Welcome ${this.user.name}.`)
        this.writeLine('Main Menu')
        this.writeLine('@FindMatch | @CreateTeam | @ViewTeam | @EditTeam \r\n')
    }
}

module.exports = MainMenu