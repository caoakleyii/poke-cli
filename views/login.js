class Login extends View {
    
   /*
    * Handle OnLogin Event (@Login)
    */
   onLogin(data) {
    if (data === '@Login') {
        this.writeLine('Enter your username:');
        return;
    }
    console.log(data);

    this.name = data;
    this.writeLine(`Welcome ${data}.`);
    this.writeLine('Main Menu');
    this.writeLine('@FindMatch | @CreateTeam | @ViewTeam | @EditTeam \r\n');

    }
   
}