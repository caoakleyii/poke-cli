class User {
    constructor(socket) {
        this.socket = socket
        this.id = socket.remoteAddress
        this.name = ""
        this.currentPage = undefined;        
    }

    writeLine(data){
        this.socket.write('\r\n' + data)
    }
    
}

module.exports = User