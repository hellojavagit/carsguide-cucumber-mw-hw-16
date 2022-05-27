package au.com.carsguide.steps;

import au.com.carsguide.pages.FindDealersResultPage;
import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.testng.asserts.SoftAssert;

import java.util.List;



public class FindDealersSteps {
    @And("^I click ‘Find a Dealer’$")
    public void iClickFindADealer() {
    }

    @And("^I should see the dealer names <dealersName> are display on page$")
    public void iShouldSeeTheDealerNamesDealersNameAreDisplayOnPage(DataTable dataTable) {
        List<String> dealerName = dataTable.asList(String.class);
        SoftAssert softAssertions = new SoftAssert();
        for (int i = 1; i <= dealerName.size() - 1; i++) {
            softAssertions.assertTrue(new FindDealersResultPage().isDealerDisplayed(dealerName.get(i)),"'"+dealerName.get(i)+"' dealer not found");
        }
        softAssertions.assertAll();
    }

    @Then("^I navigate to \"([^\"]*)\" url page$")
    public void iNavigateToUrlPage(String url) {
        new FindDealersResultPage().verifyCarDealersPage(url);


    }
}
