const EventEmitter = require('events')

class View {
    constructor(socket) {
        this.socket = socket
        this.name = ""
        this.eventEmitter = new EventEmitter()
    }
    render() {
        Console.log("render not implemented")
    }
    writeLine(data){
        this.socket.write('\r\n' + data)
    }
}

module.exports = View