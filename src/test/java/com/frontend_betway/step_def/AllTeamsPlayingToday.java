package com.frontend_betway.step_def;

import com.frontend_betway.pages.HomePage;
import com.frontend_betway.utilities.BrowserUtils;
import com.frontend_betway.utilities.ConfigurationReader;

import com.frontend_betway.utilities.Driver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.ArrayList;
import java.util.List;


public class AllTeamsPlayingToday {

    String mainPageUrl = ConfigurationReader.get("HOMEPAGE_URL");

    HomePage homePage = new HomePage();

    @Given("a BBC  Sport player I navigate to {string} page")
    public void a_BBC_Sport_player_I_navigate_to_page(String sportsSelection) {

        Driver.get().get(mainPageUrl);

  /*
  *
  * The implementation - getting all the sports from a list NavMenu will throw me some errors
  * The String I am looking to use to make this test step dynamic it won't work at this moment
  * So I won't be able to click which ever sport I assign from the String since the shape of xpath selector
  * In this case I will use a Football selector directly
  *
  *
  * SyntaxError: Failed to execute 'evaluate' on 'Document': The string 'Home
  * Olympics' is not a valid XPath expression.
  */

  // BrowserUtils.getElements(homePage.primaryNavigation);

//        List<WebElement> getElements = Driver.get().
//                findElements(By.xpath(homePage.primaryNavigation.getText()));
//
//        List<String> elemTexts = new ArrayList<>();
//        for (WebElement sports : getElements) {
//            elemTexts.add(sports.getText());
//        }
//
//        if (elemTexts.equals(sportsSelection)){
//            homePage.primaryNavigation.click();
//        }
        homePage.primaryFootball.click();
    }

    @When("i select the {string} tab")
    public void i_select_the_tab(String sportsUnderSelection) {

           WebElement element = Driver.get().findElement(By.xpath("//a[@data-stat-title='"+sportsUnderSelection+"']"));
           element.click();

        Assert.assertTrue("Actual Header Is Displayed", homePage.secondaryNavigationHeader.getText().contains(sportsUnderSelection));

    }

    @Then("i am expecting to see if there are any matches today")
    public void i_am_expecting_to_see_if_there_are_any_matches_today() {

        homePage.todaysDate.click();
        BrowserUtils.waitFor(3);

        List<WebElement> getElements = Driver.get().
                findElements(By.xpath(homePage.ariaLiveLeagues.getText()));
        System.out.println("MATCHES " + getElements);

        // the reason of failing I suppose is related to the dynamic elements like:
        // Columbus Crew because of the following error:
        // SyntaxError: Failed to execute 'evaluate' on 'Document': The string 'SCOTTISH LEAGUE CUP
        // Columbus Crew' is not a valid XPath expression.

        String expected = "Football Scores & Fixtures";
        Assert.assertTrue("Actual Header Is Displayed", homePage.secondaryNavigationHeader.getText().contains(expected));
    }
}
