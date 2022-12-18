import {BasePage} from "../pageObjects/BasePage";
import {LoginPage} from "../pageObjects/LoginPage";
import {WrapPage} from "../pageObjects/WrapPage";

describe('Wrap page test cases', () => {
    it('Wrap page max button', () => {
        BasePage.visitWithMockedWallet("/")
        LoginPage.connectingWithMockWallet()
        LoginPage.selectingNetwork()
        WrapPage.wrapPage()
        WrapPage.wrapPageMaxButton()
        WrapPage.validateError('You are wrapping out of native asset used for gas. You need to leave some gas tokens for the transaction to succeed.')


    })

    it('Wrap page not enough balance', () => {
        BasePage.visitWithMockedWallet("/")
        LoginPage.connectingWithMockWallet()
        LoginPage.selectingNetwork()
        WrapPage.wrapPage()
        WrapPage.inputWrapAmount("5")
        WrapPage.validateError('You do not have enough balance.')
    })

})