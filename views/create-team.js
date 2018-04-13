const View = require('./view');
const fetch = require('node-fetch')

class CreateTeam extends View {
    constructor(user) {
        super(user.socket)
        this.user = user;
        this.commands = [
            ">view",
            ">add",
            ">edit"
        ];
        this.displayComands = [
            ">View [poke-name]",
            ">Add [poke-name]",
            ">Edit [poke-id]"
        ];
        this.eventEmitter.on('>View', this.onView.bind(this));
    }
    render(){
        this.writeLine('Welcome to creating a new poke-cli team.')
            this.writeLine('Manage your team with the following commands:')            
            this.displayComands.forEach(c => {
                this.writeLine(c)
            });
    }
    onView(name){
        var url = `https://pokeapi.co/api/v2/pokemon/${name.toString().toLowerCase()}`
        fetch(url)
        .then(response => {
            response.json()
            .then(json => { 
                console.log(json)
                this.writeLine('⚡');
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
    processInput(data) {      
        
        if (data.indexOf(">") === 0) {
            var commandInfo = data.split(' ');
            var command = commandInfo[0];
            var commandData = commandInfo[1];
            if (!this.commands.includes(command.toLowerCase())) {
                this.writeLine("Command doesn't exist.");
                return;
            }
            this.eventEmitter.emit(command, commandData);
        }
    }
    
}

module.exports = CreateTeam;