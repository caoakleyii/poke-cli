
class User {
    constructor(socket) {
        this.socket = socket
        this.eventEmitter = new EventEmitter()
        this.id = socket.remoteAddress
        this.name = ""
        this.currentPage = undefined;
        
        // register events
        this.eventEmitter.on('@Login', this.onLogin.bind(this))
        this.eventEmitter.on('@CreateTeam', this.onCreateTeam.bind(this))
    }

    

    writeLine(data){
        this.socket.write('\r\n' + data)
    }
    
}

module.exports = User