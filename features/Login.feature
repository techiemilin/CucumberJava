Feature: Login Function 
Description: This feature will test login Function

# login 
Scenario: login with right username and password
Given invoke browser
When enter the url "http://practice.automationtesting.in/"
And click on my account
And Enter username and password
And click on login 
Then user should log in successfully 
Then Browser closes







