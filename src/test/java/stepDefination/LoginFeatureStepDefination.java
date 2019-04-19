
  package stepDefination;
  
  import org.openqa.selenium.By; import org.openqa.selenium.WebDriver; import
  org.openqa.selenium.chrome.ChromeDriver;
  
  import cucumber.api.java.en.Given; import cucumber.api.java.en.Then; import
  cucumber.api.java.en.When;
  
  public class LoginFeatureStepDefination {
  
  public WebDriver driver;
  
  @Given("^invoke browser$") public void invoke_browser() throws Throwable {
  System.setProperty("webdriver.chrome.driver",
  "/Users/milinpatel/Documents/workspace/CucumberJava/drivers/chromedriver");
  
  driver = new ChromeDriver();
  
  }
  
  @When("^enter the url \"([^\"]*)\"$") public void enter_the_url(String arg1)
  throws Throwable { driver.get("http://practice.automationtesting.in/");
  
  }
  
  @When("^click on my account$") public void click_on_my_account() throws
  Throwable { driver.findElement(By.linkText("My Account")).click();
  
  }
  
  @When("^Enter username and password$") public void
  enter_username_and_password() throws Throwable {
  driver.findElement(By.id("username")).sendKeys("pavanoltraining");
  driver.findElement(By.id("password")).sendKeys("Test@selenium123"); }
  
  
  @When("^Enter username \"([^\"]*)\" and password \"([^\"]*)\"$")
  public void enter_username_and_password(String username, String password) throws Throwable {
	  driver.findElement(By.id("username")).sendKeys(username);
	  driver.findElement(By.id("password")).sendKeys(password);
      
  }
  
  @When("^click on login$") public void click_on_login() throws Throwable {
  driver.findElement(By.name("login")).click();
  
  }
  
  @Then("^user should log in successfully$") public void
  user_should_log_in_successfully() throws Throwable { String s =
  driver.getTitle(); System.out.println(s);
  
  if (s.contains("My Account – Automation Practice Site")) {
  System.out.println("Test has passed"); } else {
  System.out.println("Test has failed"); }
  
  }
  
  @Then("^Browser closes$") public void browser_closes() throws Throwable {
  driver.close(); }
  
  }
 