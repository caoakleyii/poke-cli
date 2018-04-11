
class User {
    constructor(socket) {
        this.socket = socket;
        this.eventEmitter = new EventEmitter();
        this.id = socket.remoteAddress;
        this.name = "";
        this.currentEvent = "";
        
        // register events
        this.eventEmitter.on('@Login', this.onLogin.bind(this));
        this.eventEmitter.on('@CreateTeam', this.onCreateTeam.bind(this));
    }

    onCreateTeam(data) {
        if (data ==='@CreateTeam') {
            this.writeLine('Welcome to creating a new poke-cli team.');
            this.writeLine('Search for a poke-cli by typing in their name.');
            return;
        }        
        var url = `https://pokeapi.co/api/v2/pokemon/${data.toString().toLowerCase()}`;
        console.log(url);
        fetch(url)
        .then(response => {
            response.json()
            .then(json => { 
                console.log(json);
            });
        })
        .catch(err => {
            console.log(err);
        });

    }
    
   

    /*
    * Receive and interpret data coming from client
    */
    receiveData(data) {
        data = this.cleanInput(data);
        if (data.indexOf("@") === 0){
            this.handleEventCommand(data);
        }

        if (!data.toString()) {
            return;
        }

        this.eventEmitter.emit(this.currentEvent, data);
        
    }

    /*
    * Handle events coming from client.
    */
    handleEventCommand(event){
        if (event === "@Quit") {
            this.socket.end('Goodbye!\n');
            return;
        } else {
            this.currentEvent = event;
            return;
        }

        this.writeLine("Invalid Command")
    }
    
    /*
    * Cleans the input of carriage return, newline
    */
    cleanInput(data) {
        return data.toString().replace(/(\r\n|\n|\r)/gm,"");
    }

    writeLine(data) {
        this.socket.write('\r\n' + data)
    }
};

module.exports = User;