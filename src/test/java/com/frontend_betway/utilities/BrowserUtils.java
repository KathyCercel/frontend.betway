package com.frontend_betway.utilities;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import java.net.MalformedURLException;
import java.util.ArrayList;
import java.util.List;

public class BrowserUtils {

    public static void hover(WebElement element) throws MalformedURLException {
        Actions actions = new Actions(Driver.get());
        actions.moveToElement(element).perform();
    }

    public static void waitFor(int seconds) {
        try {
            Thread.sleep(seconds * 1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public static void scrollToElement(WebElement element) throws MalformedURLException {
        ((JavascriptExecutor) Driver.get()).executeScript("arguments[0].scrollIntoView(true);", element);
    }

    public static void getElements (WebElement element) {
        List<WebElement> getElements = Driver.get().
                findElements(By.xpath(element.getText()));

        List<String> elemTexts = new ArrayList<>();
        for (WebElement sports : getElements) {
            elemTexts.add(sports.getText());
        }
        System.out.println(" LIST OF PRODUCTS " + elemTexts);
    }

    public static void clickWithJS(WebElement element) {
        ((JavascriptExecutor) Driver.get()).executeScript("arguments[0].scrollIntoView(true);", element);
        ((JavascriptExecutor) Driver.get()).executeScript("arguments[0].click();", element);
    }
}