# frontend.betway

#Cucumber and/or Selenium tests.

###Instructions
Clone the repo: git@github.com:KathyCercel/frontend.betway.git

###Git command:

$ git clone "project"

###Prerequisites

In order to run browser tests, Selenium will need to be able to drive a browser installed to your system.

###Verify installation

Use Maven
Open a command window and run:

#####mvn test
This runs Cucumber features using Cucumber's JUnit runner. The @RunWith(Cucumber.class) annotation on the RunCukesTest class tells JUnit to kick off Cucumber.

Use Ant
Open a command window and run:

ant download
ant runcukes
This runs Cucumber features using Cucumber's Command Line Interface (CLI) runner. Note that the RunCukesTest junit class is not used at all. If you remove it (and the cucumber-junit jar dependency), it will run just the same.

Overriding options
The Cucumber runtime parses command line options to know what features to run, where the glue code lives, what plugins to use etc. When you use the JUnit runner, these options are generated from the @CucumberOptions annotation on your test.

Sometimes it can be useful to override these options without changing or recompiling the JUnit class. This can be done with the cucumber.options system property. The general form is:

#####Using Maven:

---mvn clean test / Running Tests in Terminal

---mvn test / Run local default browser

---mvn test "-Dbrowser=chrome"

---mvn test -Dcucumber.options="..." test

---Dcucumber.options="--help"

---mvn test -Dcucumber.options="classpath:features/my_first.feature" to run specific feature.

---mvn test -Dcucumber.options="–-plugin html:target/result-html" to generate a HTML report.

---mvn test -Dcucumber.options="–-plugin json:target/result-json" to generate a JSON report.


That should list all the available options.

####IMPORTANT

When you override options with -Dcucumber.options, you will completely override whatever options are hard-coded in your @CucumberOptions or in the script calling cucumber.api.cli.Main. There is one exception to this rule, and that is the --plugin option. This will not override, but add a plugin. The reason for this is to make it easier for 3rd party tools (such as Cucumber Pro) to automatically configure additional plugins by appending arguments to a cucumber.properties file.

Run a subset of Features or Scenarios
Specify a particular scenario by line (and use the pretty plugin, which prints the scenario back)

---Dcucumber.options="classpath:skeleton/belly.feature:4 --plugin pretty"
This works because Maven puts ./src/test/resources on your classpath. You can also specify files to run by filesystem path:

---Dcucumber.options="src/test/resources/skeleton/belly.feature:4 --plugin pretty"
You can also specify what to run by tag:

---Dcucumber.options="--tags @bar --plugin pretty"
Running only the scenarios that failed in the previous run

---Dcucumber.options="@target/rerun.txt"
This works as long as you have the rerun formatter enabled.

Specify a different formatter:
For example a JUnit formatter:

---Dcucumber.options="--plugin junit:target/cucumber-junit-report.xml"
