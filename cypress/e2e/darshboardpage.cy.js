import {BasePage} from "../pageObjects/BasePage";
import {LoginPage} from "../pageObjects/LoginPage";
import {DashboardPage} from "../pageObjects/DashboardPage";


describe('Dashboard page error', () => {
    it('Something went wrong in the Dashboard page', () => {
        BasePage.visitWithMockedWallet("/")
        LoginPage.connectingWithMockWallet()
        DashboardPage.claimingTokensDashboardPage()
        DashboardPage.selectingNetworkDashboardPage()
        DashboardPage.claimButtonDashboardPage()
        DashboardPage.validateError('Something went wrong, please try again')
    })


})