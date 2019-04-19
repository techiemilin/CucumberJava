$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Function",
  "description": "Description: This feature will test login Function",
  "id": "login-function",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 4,
      "value": "# login"
    }
  ],
  "line": 5,
  "name": "login with right username and password",
  "description": "",
  "id": "login-function;login-with-right-username-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "invoke browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "enter the url \"http://practice.automationtesting.in/\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "click on my account",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Enter username and password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click on login",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user should log in successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Browser closes",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginFeatureStepDefination.invoke_browser()"
});
formatter.result({
  "duration": 1864748382,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://practice.automationtesting.in/",
      "offset": 15
    }
  ],
  "location": "LoginFeatureStepDefination.enter_the_url(String)"
});
formatter.result({
  "duration": 20332334853,
  "status": "passed"
});
formatter.match({
  "location": "LoginFeatureStepDefination.click_on_my_account()"
});
formatter.result({
  "duration": 4168457270,
  "status": "passed"
});
formatter.match({
  "location": "LoginFeatureStepDefination.enter_username_and_password()"
});
formatter.result({
  "duration": 196709556,
  "status": "passed"
});
formatter.match({
  "location": "LoginFeatureStepDefination.click_on_login()"
});
formatter.result({
  "duration": 4275976578,
  "status": "passed"
});
formatter.match({
  "location": "LoginFeatureStepDefination.user_should_log_in_successfully()"
});
formatter.result({
  "duration": 6809228,
  "status": "passed"
});
formatter.match({
  "location": "LoginFeatureStepDefination.browser_closes()"
});
formatter.result({
  "duration": 114099777,
  "status": "passed"
});
formatter.uri("LoginWithParameters.feature");
formatter.feature({
  "line": 1,
  "name": "Login Function with Parameters",
  "description": "Description: This feature will test login Function",
  "id": "login-function-with-parameters",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 4,
      "value": "# login  with parameters"
    }
  ],
  "line": 5,
  "name": "login with right username and password in featurefile",
  "description": "",
  "id": "login-function-with-parameters;login-with-right-username-and-password-in-featurefile",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "invoke browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "enter the url \"http://practice.automationtesting.in/\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "click on my account",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Enter username \"pavanoltraining\" and password \"Test@selenium123\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click on login",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user should log in successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Browser closes",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginFeatureStepDefination.invoke_browser()"
});
formatter.result({
  "duration": 788015634,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://practice.automationtesting.in/",
      "offset": 15
    }
  ],
  "location": "LoginFeatureStepDefination.enter_the_url(String)"
});
formatter.result({
  "duration": 5022737158,
  "status": "passed"
});
formatter.match({
  "location": "LoginFeatureStepDefination.click_on_my_account()"
});
formatter.result({
  "duration": 4562148959,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pavanoltraining",
      "offset": 16
    },
    {
      "val": "Test@selenium123",
      "offset": 47
    }
  ],
  "location": "LoginFeatureStepDefination.enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 200006153,
  "status": "passed"
});
formatter.match({
  "location": "LoginFeatureStepDefination.click_on_login()"
});
formatter.result({
  "duration": 4768815606,
  "status": "passed"
});
formatter.match({
  "location": "LoginFeatureStepDefination.user_should_log_in_successfully()"
});
formatter.result({
  "duration": 9184027,
  "status": "passed"
});
formatter.match({
  "location": "LoginFeatureStepDefination.browser_closes()"
});
formatter.result({
  "duration": 116219781,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "login with right username and password in featurefile",
  "description": "",
  "id": "login-function-with-parameters;login-with-right-username-and-password-in-featurefile",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "invoke browser",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "enter the url \"http://practice.automationtesting.in/\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "click on my account",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Enter username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "click on login",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user should log in successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Browser closes",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "login-function-with-parameters;login-with-right-username-and-password-in-featurefile;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 28,
      "id": "login-function-with-parameters;login-with-right-username-and-password-in-featurefile;;1"
    },
    {
      "cells": [
        "milinpatel",
        "Test@12345"
      ],
      "line": 29,
      "id": "login-function-with-parameters;login-with-right-username-and-password-in-featurefile;;2"
    },
    {
      "cells": [
        "MilinPatel",
        "test@13243"
      ],
      "line": 30,
      "id": "login-function-with-parameters;login-with-right-username-and-password-in-featurefile;;3"
    },
    {
      "cells": [
        "pavanoltraining",
        "Test@selenium123"
      ],
      "line": 31,
      "id": "login-function-with-parameters;login-with-right-username-and-password-in-featurefile;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 29,
  "name": "login with right username and password in featurefile",
  "description": "",
  "id": "login-function-with-parameters;login-with-right-username-and-password-in-featurefile;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "invoke browser",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "enter the url \"http://practice.automationtesting.in/\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "click on my account",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Enter username \"milinpatel\" and password \"Test@12345\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "click on login",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user should log in successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Browser closes",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginFeatureStepDefination.invoke_browser()"
});
formatter.result({
  "duration": 986832633,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://practice.automationtesting.in/",
      "offset": 15
    }
  ],
  "location": "LoginFeatureStepDefination.enter_the_url(String)"
});
formatter.result({
  "duration": 8134039379,
  "status": "passed"
});
formatter.match({
  "location": "LoginFeatureStepDefination.click_on_my_account()"
});
formatter.result({
  "duration": 4678552356,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "milinpatel",
      "offset": 16
    },
    {
      "val": "Test@12345",
      "offset": 42
    }
  ],
  "location": "LoginFeatureStepDefination.enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 174225153,
  "status": "passed"
});
formatter.match({
  "location": "LoginFeatureStepDefination.click_on_login()"
});
formatter.result({
  "duration": 3171162542,
  "status": "passed"
});
formatter.match({
  "location": "LoginFeatureStepDefination.user_should_log_in_successfully()"
});
formatter.result({
  "duration": 10151968,
  "status": "passed"
});
formatter.match({
  "location": "LoginFeatureStepDefination.browser_closes()"
});
formatter.result({
  "duration": 118812283,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "login with right username and password in featurefile",
  "description": "",
  "id": "login-function-with-parameters;login-with-right-username-and-password-in-featurefile;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "invoke browser",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "enter the url \"http://practice.automationtesting.in/\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "click on my account",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Enter username \"MilinPatel\" and password \"test@13243\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "click on login",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user should log in successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Browser closes",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginFeatureStepDefination.invoke_browser()"
});
formatter.result({
  "duration": 809852246,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://practice.automationtesting.in/",
      "offset": 15
    }
  ],
  "location": "LoginFeatureStepDefination.enter_the_url(String)"
});
formatter.result({
  "duration": 8187590251,
  "status": "passed"
});
formatter.match({
  "location": "LoginFeatureStepDefination.click_on_my_account()"
});
formatter.result({
  "duration": 4518491642,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MilinPatel",
      "offset": 16
    },
    {
      "val": "test@13243",
      "offset": 42
    }
  ],
  "location": "LoginFeatureStepDefination.enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 185754483,
  "status": "passed"
});
formatter.match({
  "location": "LoginFeatureStepDefination.click_on_login()"
});
formatter.result({
  "duration": 1789103185,
  "status": "passed"
});
formatter.match({
  "location": "LoginFeatureStepDefination.user_should_log_in_successfully()"
});
formatter.result({
  "duration": 8533586,
  "status": "passed"
});
formatter.match({
  "location": "LoginFeatureStepDefination.browser_closes()"
});
formatter.result({
  "duration": 110282000,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "login with right username and password in featurefile",
  "description": "",
  "id": "login-function-with-parameters;login-with-right-username-and-password-in-featurefile;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "invoke browser",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "enter the url \"http://practice.automationtesting.in/\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "click on my account",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Enter username \"pavanoltraining\" and password \"Test@selenium123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "click on login",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user should log in successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Browser closes",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginFeatureStepDefination.invoke_browser()"
});
formatter.result({
  "duration": 912669065,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://practice.automationtesting.in/",
      "offset": 15
    }
  ],
  "location": "LoginFeatureStepDefination.enter_the_url(String)"
});
formatter.result({
  "duration": 10610331853,
  "status": "passed"
});
formatter.match({
  "location": "LoginFeatureStepDefination.click_on_my_account()"
});
formatter.result({
  "duration": 5072569308,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pavanoltraining",
      "offset": 16
    },
    {
      "val": "Test@selenium123",
      "offset": 47
    }
  ],
  "location": "LoginFeatureStepDefination.enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 191445335,
  "status": "passed"
});
formatter.match({
  "location": "LoginFeatureStepDefination.click_on_login()"
});
formatter.result({
  "duration": 4143412049,
  "status": "passed"
});
formatter.match({
  "location": "LoginFeatureStepDefination.user_should_log_in_successfully()"
});
formatter.result({
  "duration": 5847687,
  "status": "passed"
});
formatter.match({
  "location": "LoginFeatureStepDefination.browser_closes()"
});
formatter.result({
  "duration": 109749151,
  "status": "passed"
});
});