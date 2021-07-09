package com.frontend_betway.runner;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
     features = "@target/rerun.txt",
        glue="com/frontend_betway/step_def/"
)
public class FailedTestRunner {
}
