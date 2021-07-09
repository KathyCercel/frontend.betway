$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/allTeamsPlayingToday.feature");
formatter.feature({
  "name": "Make Records for specific sports :",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@WIP"
    }
  ]
});
formatter.scenario({
  "name": "As a user I want to output all team names with a match today",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@WIP"
    }
  ]
});
formatter.step({
  "name": "a BBC  Sport player I navigate to \"Football\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "AllTeamsPlayingToday.a_BBC_Sport_player_I_navigate_to_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i select the \"Scores \u0026 Fixtures\" tab",
  "keyword": "When "
});
formatter.match({
  "location": "AllTeamsPlayingToday.i_select_the_tab(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i am expecting to see if there are any matches today",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTeamsPlayingToday.i_am_expecting_to_see_if_there_are_any_matches_today()"
});
formatter.result({
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Unable to locate an element with the xpath expression SCOTTISH LEAGUE CUP\nKelty Hearts\n19:45\nDundee United\nEdinburgh City\n19:45\nHamilton Academical\nIRISH PREMIER DIVISION\nFinn Harps\n17:45\nWaterford\nDundalk\nP\nBohemians\nP\nMatch postponed - Other\nSt Patrick\u0027s Athletic\n19:45\nDerry City\nBRAZILIAN SERIE A\nChapecoense\n0\nCorinthians\n0\nHT\nUNITED STATES MAJOR LEAGUE SOCCER\nNashville SC\n1\nAtlanta United\n1\n14 mins\nNew York Red Bulls\n0\nPhiladelphia Union\n0\n20 mins\nUNITED STATES MAJOR LEAGUE SOCCER\nFC Cincinnati\n00:30\nColumbus Crew because of the following error:\nSyntaxError: Failed to execute \u0027evaluate\u0027 on \u0027Document\u0027: The string \u0027SCOTTISH LEAGUE CUP\nKelty Hearts\n19:45\nDundee United\nEdinburgh City\n19:45\nHamilton Academical\nIRISH PREMIER DIVISION\nFinn Harps\n17:45\nWaterford\nDundalk\nP\nBohemians\nP\nMatch postponed - Other\nSt Patrick\u0027s Athletic\n19:45\nDerry City\nBRAZILIAN SERIE A\nChapecoense\n0\nCorinthians\n0\nHT\nUNITED STATES MAJOR LEAGUE SOCCER\nNashville SC\n1\nAtlanta United\n1\n14 mins\nNew York Red Bulls\n0\nPhiladelphia Union\n0\n20 mins\nUNITED STATES MAJOR LEAGUE SOCCER\nFC Cincinnati\n00:30\nColumbus Crew\u0027 is not a valid XPath expression.\n  (Session info: chrome\u003d91.0.4472.124)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00273.9.0\u0027, revision: \u0027698b3178f0\u0027, time: \u00272018-02-05T14:26:55.441Z\u0027\nSystem info: host: \u0027DESKTOP-8IRE5RH\u0027, ip: \u0027192.168.1.120\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 91.0.4472.124, chrome: {chromedriverVersion: 91.0.4472.101 (af52a90bf870..., userDataDir: C:\\Users\\caty2\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:54347}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: f9259725cde8d29a7868f960274fdaca\n*** Element info: {Using\u003dxpath, value\u003dSCOTTISH LEAGUE CUP\nKelty Hearts\n19:45\nDundee United\nEdinburgh City\n19:45\nHamilton Academical\nIRISH PREMIER DIVISION\nFinn Harps\n17:45\nWaterford\nDundalk\nP\nBohemians\nP\nMatch postponed - Other\nSt Patrick\u0027s Athletic\n19:45\nDerry City\nBRAZILIAN SERIE A\nChapecoense\n0\nCorinthians\n0\nHT\nUNITED STATES MAJOR LEAGUE SOCCER\nNashville SC\n1\nAtlanta United\n1\n14 mins\nNew York Red Bulls\n0\nPhiladelphia Union\n0\n20 mins\nUNITED STATES MAJOR LEAGUE SOCCER\nFC Cincinnati\n00:30\nColumbus Crew}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:160)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:398)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsByXPath(RemoteWebDriver.java:477)\r\n\tat org.openqa.selenium.By$ByXPath.findElements(By.java:356)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:359)\r\n\tat com.frontend_betway.step_def.AllTeamsPlayingToday.i_am_expecting_to_see_if_there_are_any_matches_today(AllTeamsPlayingToday.java:76)\r\n\tat ✽.i am expecting to see if there are any matches today(file:src/test/resources/features/allTeamsPlayingToday.feature:7)\r\n",
  "status": "failed"
});
});