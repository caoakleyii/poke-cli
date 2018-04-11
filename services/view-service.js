const Login = require('./Login')
const MainMenu = require('./main-menu')
const CreateTeam = require('./create-team')

class ViewService {
    processInput(user, data) {
        data = this.cleanInput(data);
        
        // user is requesting a page
        if (data.indexOf("@") === 0){
            this.renderPage(data);
        }

        if (!data) {
            return;
        }
    }
    renderPage(page, user) {
        switch(page.toLowerCase()) {
            case "@login":
            user.currentPage = new Login(user);
            user.currentPage.Render();
            break;
            case "@mainmenu":
            user.currentPage = new MainMenu(user.socket);
            user.currentPage.Render();
            break;
            case "@createteam":
            user.currentPage = new CreateTeam(user.socket);
            user.currentPage.Render();
            break;
            case "@quit":
            user.socket.end('Goodbye!\n');
            break;
            default:
            user.writeLine("Page does not exist.");
            break;
        }
    }
    
    /*
    * Cleans the input of carriage return, newline
    */
    cleanInput(data) {
        return data.toString().replace(/(\r\n|\n|\r)/gm,"")
    }
}

const viewService = new ViewService()
module.exports = viewService