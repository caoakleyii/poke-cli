const Login = require('../views/login')
const MainMenu = require('../views/main-menu')
const CreateTeam = require('../views/create-team')

class ViewService {
    processInput(user, data) {
        data = this.cleanInput(data);
        
        if (!data) {
            return;
        }
        

        // user is requesting a page
        if (data.indexOf("@") === 0){
            this.renderPage(data, user);
        }
        else if (user && user.currentPage) {
            user.currentPage.processInput(data);
        }
    }
    renderPage(page, user) {
        switch(page.toLowerCase()) {
            case "@login":
            user.currentPage = new Login(user);
            user.currentPage.render();
            break;
            case "@mainmenu":
            user.currentPage = new MainMenu(user);
            user.currentPage.render();
            break;
            case "@createteam":
            user.currentPage = new CreateTeam(user);
            user.currentPage.render();
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