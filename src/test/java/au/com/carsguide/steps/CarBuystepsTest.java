package au.com.carsguide.steps;

import au.com.carsguide.pages.HomePage;
import au.com.carsguide.pages.NewAndUsedCarSearchPage;
import au.com.carsguide.pages.UsedCarsForSalePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class CarBuystepsTest {
    @Given("^Iam on homepage$")
    public void iamOnHomepage() {
    }

    @When("^I mouse hover on 'buy\\+sell' tab$")
    public void iMouseHoverOnBuySellTab() {
        new HomePage().mouseHoverOnBuyAndSellLinkInHomePage();
    }

    @And("^I click 'Search cars' link$")
    public void iClickSearchCarsLink() {
        new HomePage().clickOnSearchCarsLinkInHomePage();
    }

    @Then("^I navigate to 'new and used car search' page$")
    public void iNavigateToNewAndUsedCarSearchPage() {
        String expectedMessage = "New & Used Car Search - carsguide";
        Assert.assertEquals(expectedMessage, new NewAndUsedCarSearchPage().verifyMessageNewAndUsedCarsSearch());
    }

    @And("^I select make \"([^\"]*)\"$")
    public void iSelectMake(String make) {
        new NewAndUsedCarSearchPage().selectCarMakeFromDropDown(make);

    }

    @And("^I select model \"([^\"]*)\"$")
    public void iSelectModel(String model) {
        new NewAndUsedCarSearchPage().selectCarModelFromDropDown(model);
    }

    @And("^I select location \"([^\"]*)\"$")
    public void iSelectLocation(String location) {
        new NewAndUsedCarSearchPage().selectLocationOfCarFromDropDown(location);

    }

    @And("^I select price \"([^\"]*)\"$")
    public void iSelectPrice(String price) {
        new NewAndUsedCarSearchPage().selectPriceOfCarFromDropDown(price);

    }

    @And("^I click on find My Next Car tab$")
    public void iClickOnFindMyNextCarTab() {
        new NewAndUsedCarSearchPage().clickOnFindMyNextCar();
    }

    @And("^I click 'Used' link$")
    public void iClickUsedLink() {
        new HomePage().clickOnUsedCarsInhomePage();
    }

    @Then("^I navigate to 'Used Cars For Sale' page$")
    public void iNavigateToUsedCarsForSalePage() {
        String expectedMessage1 = "Used Cars For Sale";
        Assert.assertEquals(expectedMessage1, new UsedCarsForSalePage().verifyUsedCarsForSalePageHeading());
    }

    @And("^I select make \"([^\"]*)\" in Used Car For Sale Page$")
    public void iSelectMakeInUsedCarForSalePage(String make) {
        new UsedCarsForSalePage().selectCarMakeFromDropDown(make);

    }

    @And("^I select location \"([^\"]*)\" in Used Car For Sale Page$")
    public void iSelectLocationInUsedCarForSalePage(String location) {
        new UsedCarsForSalePage().selectLocationOfCarFromDropDown(location);

    }

    @And("^I select price \"([^\"]*)\" in Used Car For Sale Page$")
    public void iSelectPriceInUsedCarForSalePage(String price) {
        new UsedCarsForSalePage().selectPriceOfCarFromDropDown(price);

    }

    @And("^I click on find My Next Car tab in Used Car For Sale Page$")
    public void iClickOnFindMyNextCarTabInUsedCarForSalePage() {
        new UsedCarsForSalePage().clickOnFindMyNextCar();
    }



    @Then("^I should see the make \"([^\"]*)\" in results$")
    public void iShouldSeeTheMakeInResults(String make)  {

    }

    @And("^I select model \"([^\"]*)\" in Used Car For Sale  Page$")
    public void iSelectModelInUsedCarForSalePage(String model){
        new NewAndUsedCarSearchPage().selectCarModelFromDropDown(model);
    }
}

