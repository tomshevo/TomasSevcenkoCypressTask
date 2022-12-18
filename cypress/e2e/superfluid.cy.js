import {BasePage} from "../pageObjects/BasePage";
import {LoginPage} from "../pageObjects/LoginPage";

describe('Connecting and switching network', () => {
    it('Connecting with a Mock wallet and switching the network', () => {
    BasePage.visitWithMockedWallet("/")
    LoginPage.connectingWithMockWallet()
    LoginPage.selectingNetwork()
  })

})