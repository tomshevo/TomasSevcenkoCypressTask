import HDWalletProvider from "@truffle/hdwallet-provider";
import {ethers} from "ethers";

export class BasePage {

    static click(selector){
        cy.get(selector).click()
    }

    static type(selector, message){
        cy.get(selector).type(message)
    }


    static hasText(selector,text){
        cy.get(selector).should('have.text', text ).and('be.visible')
    }

    static hasTextFirst(selector,text){
        cy.get(selector).first().should('have.text', text ).and('be.visible')
    }

    static visitWithMockedWallet(page) {
        cy.visit(page, {
            onBeforeLoad: (win) => {
                const hdwallet = new HDWalletProvider({
                    privateKeys: ["4096b4d75e5351653841c31068644742c63f947382461748c2b7823ca971c237"],
                    url: "https://rpc-endpoints.superfluid.dev/eth-goerli",
                    chainId: 5,
                    pollingInterval: 1000,
                });
                win.mockSigner = new ethers.providers.Web3Provider(hdwallet).getSigner();
            }

        })

    }
}