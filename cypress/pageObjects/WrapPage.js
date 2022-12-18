import {BasePage} from "./BasePage";

const WRAP_BUTTON = "[data-cy=nav-wrap-unwrap]"
const WRAP_MAX_BUTTON = "[data-cy=max-button]"
const WRAP_INPUT_FIELD = "[data-cy=wrap-input]"
const ERROR_MESSAGE = ".MuiAlert-message"

export class WrapPage extends BasePage {

    static wrapPage() {
        this.click(WRAP_BUTTON)
        this.click(WRAP_MAX_BUTTON)

    }

    static wrapPageMaxButton() {
        this.click(WRAP_MAX_BUTTON)

    }

    static validateError(message) {
        this.hasText(ERROR_MESSAGE, message)

    }

    static inputWrapAmount(amount) {
        this.type(WRAP_INPUT_FIELD, amount)

    }


}