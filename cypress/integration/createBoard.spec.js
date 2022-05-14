import boards from "../pages/boards.json";
import lists from "../pages/lists.json";
import loginModel from "../pages/loginModel.json";
import navigation from "../pages/navigation.json";
import registerModel from "../pages/registerModel.json";
import taskDetails from "../pages/taskDetails.json";
import tasks from "../pages/tasks.json";
import dataUser from "../fixtures/data.json"
import { data } from "ospath";

describe("Create board", () => {

it("Create new board", () => {
    cy.visit("")
cy.get(boards.createNewBoard).click();
cy.get(boards.createNewBoardInput).type("Hello board")
cy.get(boards.saveNewBoardButton).click()
cy.get(boards.optionsBoardDropdown).click()


})

it("Create new list", () => { 
    cy.visit("")
cy.get(lists.clickOnBoard).eq(0).click();
cy.get(lists.createListClick).click();
cy.get(lists.createListInput).type("Hello list")
cy.get(lists.saveListButton).click()
cy.get(lists.optionsListDropdown).click()
cy.get(lists.deleteListDropdown).click()

})

it("Create new task", () => { 
    cy.visit("")
    cy.get(lists.clickOnBoard).eq(0).click();
    cy.get(lists.createListClick).click();
    cy.get(lists.createListInput).type("Hello list")
    cy.get(lists.saveListButton).click()
    cy.get(tasks.addNewTask).click()
    cy.get(tasks.newTaskTitle).type('add new task')
    cy.get(tasks.addTaskTitleButton).click()
    cy.get(tasks.checkTask).eq(0).click()
    cy.get(boards.optionsBoardDropdown).click()
    cy.get(boards.deleteBoardDropdown).click()

})

    it.skip("Register new user", () => {

        cy.visit("")
        cy.get(navigation.loginButton, {timeout: 30000}).click({force: true});
        cy.get(loginModel.singUpButton).eq(0).click();
        cy.get(registerModel.signUpEmailInput).type(dataUser.user.email)
        cy.get(registerModel.singUpPasswordInput).type(dataUser.user.password)
        cy.get(registerModel.checkboxEmail).click()
        cy.get(registerModel.singUpButton).eq(1).click()

        
    });

    it.skip("Logout",()=>{

        cy.get(navigation.logoutDropdown).eq(0).click({force: true})
        cy.get(navigation.logoutButtomn).click({force: true})

    })
});