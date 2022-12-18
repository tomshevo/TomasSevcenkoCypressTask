import {BasePage} from "../pageObjects/BasePage";
import {LoginPage} from "../pageObjects/LoginPage";
import {WrapPage as SendPage} from "../pageObjects/SendPage";

describe('Send page test cases', () => {
    it('Send page error message', () => {
        BasePage.visitWithMockedWallet("/")
        LoginPage.connectingWithMockWallet()
        LoginPage.selectingNetwork()
        SendPage.selectingStreamPage()
        SendPage.selectingStreamPageAdress()
        SendPage.selectingReceiver('0xD92ea85056AB223a279Cd8dEf240cB4F0F7a24aa')
        SendPage.selectingTokenButton()
        SendPage.selectingTDLToken()
        SendPage.selectingFlowRate('123')
        SendPage.validateError('You can\'t stream to yourself.')

    })

})