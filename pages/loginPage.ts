import {Page} from "@playwright/test";
export default class loginPage{
    constructor(public page:Page){

    }
    async enterUserName(username: string){
       await this.page.locator("[name='username']").fill(username);
      
        
    }
    async enterPassword(password: string){
        await this.page.locator("[name='password']").fill(password);
        
    }
     async ClickLogin(){
        await this.page.getByRole("button",{name:"Login"}).click();
        
        
    }

}