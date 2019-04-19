Feature: Login Function with Parameters
Description: This feature will test login Function

# login  with parameters
Scenario: login with right username and password in featurefile
Given invoke browser
When enter the url "http://practice.automationtesting.in/"
And click on my account
And Enter username "pavanoltraining" and password "Test@selenium123"
And click on login 
Then user should log in successfully 
Then Browser closes



Scenario Outline: login with right username and password in featurefile
Given invoke browser
When enter the url "http://practice.automationtesting.in/"
And click on my account
And Enter username "<username>" and password "<password>"
And click on login 
Then user should log in successfully 
Then Browser closes


Examples:

|      username     |       password		|
|   milinpatel      |      Test@12345		|
|	MilinPatel		|		test@13243		|
|	pavanoltraining	|	Test@selenium123	|	
