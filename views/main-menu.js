const View = require('./view')

class MainMenu extends View {
    constructor(socket){
        super(socket);
    }
    render(){
        this.writeLine(`Welcome ${data}.`)
        this.writeLine('Main Menu')
        this.writeLine('@FindMatch | @CreateTeam | @ViewTeam | @EditTeam \r\n')
    }
}

module.exports = Main