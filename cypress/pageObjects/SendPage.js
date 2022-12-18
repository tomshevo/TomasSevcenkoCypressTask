import {BasePage} from "./BasePage";


const SEND_STREAM_PAGE = '[data-cy="nav-send"]'
const SEND_STREAM_ADDRESS_BUTTON = '[data-cy="address-button"]'
const SEND_STREAM_SELECT_TOKEN_BUTTON = '[data-cy="select-token-button"]'
const SEND_PAGE_RECEIVER_FIELD = '[id=":ri:"]'
const SEND_PAGE_TDL_TOKEN = "[data-cy=TDLx-list-item]"
const SEND_PAGE_FLOWRATE_FIELD = '[id=":r9:"]'
const ERROR_MESSAGE = ".MuiAlert-message"

export class WrapPage extends BasePage {

    static selectingStreamPage() {
        this.click(SEND_STREAM_PAGE)
    }

    static selectingStreamPageAdress() {
        this.click(SEND_STREAM_ADDRESS_BUTTON)
    }

    static selectingTokenButton() {
        this.click(SEND_STREAM_SELECT_TOKEN_BUTTON)
    }

    static selectingTDLToken() {
        this.click(SEND_PAGE_TDL_TOKEN)


    }


    static selectingReceiver(receiver) {
        this.type(SEND_PAGE_RECEIVER_FIELD, receiver)


    }

    static selectingFlowRate(amount) {
        this.type(SEND_PAGE_FLOWRATE_FIELD, amount)

    }

    static validateError(message) {
        this.hasTextFirst(ERROR_MESSAGE, message)

    }
}