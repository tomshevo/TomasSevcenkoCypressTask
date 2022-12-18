import {BasePage} from "./BasePage";

const WALLET_BUTTON = ('[id=":r2:"]')
const WALLET_OPTION_MOCK = "[data-testid=rk-wallet-option-mock]"
const NETWORK_BUTTON = "[data-cy=top-bar-network-button]"
const TESTNETS_BUTTON = "[data-cy=testnets-button]"
const GOERLI_NETWORK = "[data-cy=goerli-button]"


export class LoginPage extends BasePage {


    static connectingWithMockWallet() {
        this.click(WALLET_BUTTON)
        this.click(WALLET_OPTION_MOCK)
    }

    static selectingNetwork() {
        this.click(NETWORK_BUTTON)
        this.click(TESTNETS_BUTTON)
        this.click(GOERLI_NETWORK)

    }
}

