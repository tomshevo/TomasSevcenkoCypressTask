import {BasePage} from "../pageObjects/BasePage";
import {LoginPage} from "../pageObjects/LoginPage";
import {DashboardPage} from "../pageObjects/DashboardPage";
import {WrapPage} from "../pageObjects/WrapPage";
import {WrapPage as SendPage} from "../pageObjects/SendPage";

describe('Add your test cases here', () => {
    it('Connecting with a Mock wallet and switching the network', () => {
    BasePage.visitWithMockedWallet("/")
    LoginPage.connectingWithMockWallet()
    LoginPage.selectingNetwork()
  })
    it('Something went wrong in the Dashboard page', () => {
      BasePage.visitWithMockedWallet("/")
      LoginPage.connectingWithMockWallet()
      DashboardPage.claimingTokensDashboardPage()
      DashboardPage.selectingNetworkDashboardPage()
      DashboardPage.claimButtonDashboardPage()
      DashboardPage.validateError('Something went wrong, please try again')
  })

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