const EventEmitter = require('events');

class View {
    constructor(socket) {
        this.socket = socket;
        this.name = "";
        this.eventEmitter = new EventEmitter();
    }
    render(){
        Console.log("render not implemented");
    }
}

module.exports = View;