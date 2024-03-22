///<reference types = "cypress"/>
import { CommonPage } from "../pageObject/commonPage";
import { LeavePage } from "../pageObject/leavePage";

const commonPage = new CommonPage();
const leavePage = new LeavePage();


describe("User should test OrangeHRM", () => {

    before(()=>{
        cy.login("Admin","admin123")
    })

    it("User should navigate to dashboard",()=>{
        commonPage.assertHeaderTitle().should("include.text","Dashboard");
    })

    it("User should Apply the leave",()=>{
        commonPage.selectSidebarMenu("Leave");
        commonPage.assertHeaderTitle().should("include.text","Leave");
        leavePage.roleNavigation("Apply");
    })



    after(()=>{
        cy.wait(1000)
        common.clickOnUserDropdown();
        common.selectUserDropdownList("Logout")
    })

});
