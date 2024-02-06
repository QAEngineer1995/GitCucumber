#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template

 Feature: Login IMS
 
 Scenario Outline: Login with valid credentials 
 Given Browser opens
 And user is on login page
 When user enters  <emailid> and <password>
 And user clicks on signin 
 Then user get Sign In IMS 
 
 Examples:
 | emailid | password |
 | admin@ims.com | Qwerty@123 |



