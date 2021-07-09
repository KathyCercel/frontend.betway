package com.frontend_betway.pages;

import com.frontend_betway.utilities.Driver;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage {
    public HomePage(){
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(xpath = "//ul[@class='sp-c-sport-navigation__inner gs-o-list-inline']")
    public WebElement primaryNavigation;

    @FindBy(xpath = "//body/div[@id='orb-modules']/div[@id='u021158674860176196']/div[1]/nav[1]/div[1]/div[1]/ul[1]/li[2]/a[1]")
    public WebElement primaryFootball;

    @FindBy(xpath = "//ul[@id='sp-nav-secondary']")
    public WebElement secondaryNavigation;

    @FindBy(xpath = "//h1[@id='page']")
    public WebElement secondaryNavigationHeader;

    @FindBy(xpath = " //ul[@id='sp-nav-secondary']")
    public WebElement datePicker;

    @FindBy(xpath = "//ul[@id='sp-timeline-current-dates']")
    public WebElement todaysDate;

    @FindBy(xpath = "/html[1]/body[1]/div[4]/div[2]/div[1]/div[3]/div[1]/div[1]/span[1]/div[1]")
    public WebElement ariaLiveLeagues;

    }
