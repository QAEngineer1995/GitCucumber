package Stepdefinations;

import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.edge.EdgeDriver;


import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginIMSPOM {

       public WebDriver driver ;  
      
	
	@Given("Browser opens")
	public void browser_opens() {
		System.setProperty("webdriver.EdgeDriver", "E:\\smruti selenium\\Datadrivenframework\\Cucumberdemo\\msedgeDriver.exe");
	   
        driver = new EdgeDriver();
		
		
	    driver.manage().window().maximize();
		  
	    driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
		 	
		
	}

	@And("user is on login page")
	public void user_is_on_login_page() {
		
		driver.navigate().to("http://70.35.206.137/ins");
	}

	@When("^user enters (.*) and (.*)$")
	public void user_enters_emailid_and_password(String emailid , String password) {
		
		//LoginPages login = new LoginPages(driver);
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(5));
		
		
		  driver.findElement(By.xpath("//input[@id='candidateName']")).sendKeys("admin@ims.com");
		  driver.findElement(By.xpath("//input[@id='pass_log_id']")).sendKeys("Qwerty@123");
		     
	}

	@And("^user clicks on signin$")
	public void user_clicks_on_signin() {
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(2));
		 
		
		driver.findElement(By.xpath("//button[@class='login100-form-btn ml-2 sign-login']")).click();
	    
	}

	@Then("user get Sign In IMS")
	public void user_get_Sign_In_IMS(){
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(2));
		
		driver.findElement(By.id("sidebarToggleTop")).isDisplayed();
	}
	
	}

