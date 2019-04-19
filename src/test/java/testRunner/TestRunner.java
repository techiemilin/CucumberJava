package testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		
		
		
		features = "features", // the path of the feature files
		glue = "stepDefination", // the path of the step definition files
		dryRun = false, // check for mapping of methods in step definition and feature files
		monochrome = true, // display the proper output steps in console
		format = { "pretty", "html:test/output", "junit:junit_xml_output/cucumber.xml",
				"json:json_output/cucumber.json" }, //
		// format - generate the different types of reports
		strict = true // it will check if any step is not defined in step definition file
)

public class TestRunner {

}
