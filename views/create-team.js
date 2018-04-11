class CreateTeam extends View {
    constructor(socket) {
        super(socket)
        this.commands = [
            ">View [poke-name]",
            ">Add [poke-name]",
            ">Edit [poke-id]"
        ];
        this.eventEmitter.on('>View', this.onView.bind(this));
    }
    onView(name){
        var url = `https://pokeapi.co/api/v2/pokemon/${data.toString().toLowerCase()}`
        console.log(url)
        fetch(url)
        .then(response => {
            response.json()
            .then(json => { 
                console.log(json)
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
    processInput(data) {
        if (data ==='@CreateTeam') {
            this.writeLine('Welcome to creating a new poke-cli team.')
            this.writeLine('Manage your team with the following commands:')            
            this.commands.forEach(c => {
                this.writeLine(c)
            });
            return
        }
        
        if (data.indexOf(">") === 0) {
            var commandInfo = data.split(' ');
            var command = commandInfo[0];
            var commandData = commandInfo[1];
            if (!this.commands.includes(command)) {
                this.writeLine("Command doesn't exist.");
                return;
            }
            this.eventEmitter.emit(command, commandData);
        }
    }
    
}