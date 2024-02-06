package TestRunner;

import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;
import io.cucumber.testng.TestNGCucumberRunner;

@CucumberOptions(features = "src/test/Resources/Search.feature",
                 glue = {"Stepdefinations"},
                // plugin = {"pretty","html:target/cucumber.html"},
                 monochrome = true )
                 //publish = true)

/*public class TestRunner{
	private TestNGCucumberRunner testNGCucumberRunner;

	@BeforeClass(alwaysRun=true)
	public void setUpClass() throws Exception{*/
		/*testNGCucumberRunner = new TestNGCucumberRunner (this.getClass());*/
		
public class TestRunner extends AbstractTestNGCucumberTests {
	/*
	 * @Override
	 * 
	 * @DataProvider(parallel = true) public Object[][]scenarios(){ return
	 * super.scenarios(); }
	 */
}
	