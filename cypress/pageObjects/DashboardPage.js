import {BasePage} from "./BasePage";

const CLAIM_BUTTON = ".MuiListItemSecondaryAction-root"
const TOKENS_CLAIM_BUTTON = "[id=':ra:']"
const ERROR_MESSAGE = ".MuiAlert-message"
const DASHBOARD_PAGE_NETWORK = "[data-cy=change-network-button]"


export class DashboardPage extends BasePage {


    static claimingTokensDashboardPage() {
        this.click(CLAIM_BUTTON)

    }

    static selectingNetworkDashboardPage() {
        this.click(DASHBOARD_PAGE_NETWORK)

    }

    static claimButtonDashboardPage() {
        this.click(TOKENS_CLAIM_BUTTON)

    }

    static validateError(message) {
        this.hasText(ERROR_MESSAGE, message)


    }
}