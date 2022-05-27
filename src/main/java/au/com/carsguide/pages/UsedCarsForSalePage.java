package au.com.carsguide.pages;

import au.com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class UsedCarsForSalePage extends Utility {
    private static final Logger log = LogManager.getLogger(UsedCarsForSalePage.class.getName());
    public UsedCarsForSalePage(){
        PageFactory.initElements(driver,this);
    }

    @CacheLookup
    @FindBy(xpath ="//div[@class='heading main-heading item-ad-wrapper ']")
    WebElement usedCarsForSalePageHeading;

    @CacheLookup
    @FindBy(xpath ="//select[@id='makes']")
    WebElement makeOfCar;

    @CacheLookup
    @FindBy(xpath ="//select[@id='models']")
    WebElement modelOfCar;

    @CacheLookup
    @FindBy(xpath ="//select[@id='locations']")
    WebElement locationOfCar;

    @CacheLookup
    @FindBy(xpath ="//select[@id='priceTo']")
    WebElement priceOfCar;

    @CacheLookup
    @FindBy(id ="search-submit")
    WebElement findMyNextCar;

    public String verifyUsedCarsForSalePageHeading(){
        return   getTextFromElement(usedCarsForSalePageHeading);
    }
    public void selectCarMakeFromDropDown(String carMake){
        selectByValueFromDropDown(makeOfCar,carMake);
        log.info("Selecting choice of car make " +makeOfCar.toString());

    }
    public void selectCarModelFromDropDown(String carModel){
        selectByValueFromDropDown(modelOfCar,carModel);
        log.info("Selecting Model Of Car " + modelOfCar.toString());
    }

    public void selectLocationOfCarFromDropDown(String carLocation){
        selectByValueFromDropDown(locationOfCar,carLocation);
        log.info("Selecting Location Of Car " + locationOfCar.toString());

    }
    public void selectPriceOfCarFromDropDown(String carPrice){
        selectByValueFromDropDown(priceOfCar,carPrice);
        log.info("Selecting Price Of Car " + priceOfCar.toString());

    }
    public void clickOnFindMyNextCar(){
        clickOnElement(findMyNextCar);
        log.info("Checking If Searched Criteria Matches" +findMyNextCar.toString());
    }


}
