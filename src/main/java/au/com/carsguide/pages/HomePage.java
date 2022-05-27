package au.com.carsguide.pages;

import au.com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage(){
        PageFactory.initElements(driver,this);
    }

    @CacheLookup
    @FindBy(xpath ="//a[contains(text(),'buy + sell')]")
    WebElement buyAndSelltab;

    @CacheLookup
    @FindBy(xpath ="//a[contains(text(),'Search Cars')]")
    WebElement searchCarsLink;

    @CacheLookup
    @FindBy(linkText ="Used")
    WebElement usedCars;

    @CacheLookup
    @FindBy(linkText ="Find a Dealer")
    WebElement findADealer;


    public void mouseHoverOnBuyAndSellLinkInHomePage(){
        mouseHoverToElement(buyAndSelltab);
        log.info("Clicking on Buy+Sell tab "+buyAndSelltab.toString());}

    public void clickOnSearchCarsLinkInHomePage() {
        clickOnElement(searchCarsLink);
        log.info("Clicking on SearchCars link" +searchCarsLink.toString());
    }
    public void clickOnUsedCarsInhomePage(){
        clickOnElement(usedCars);
        log.info("Clicking On Used Link" + usedCars.toString());
    }
    public void clickONFindADealer(){
        clickOnElement(findADealer);
    }
}
