$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("buy.feature");
formatter.feature({
  "line": 1,
  "name": "Search Functionality Of CarsGuide Website",
  "description": "",
  "id": "search-functionality-of-carsguide-website",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality-of-carsguide-website;search-the-buy-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Iam on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "I click \u0027Search cars\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I navigate to \u0027new and used car search\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I select make \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I select model \"\u003cmodel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select price \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should see the make \"\u003cmake\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "search-functionality-of-carsguide-website;search-the-buy-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 16,
      "id": "search-functionality-of-carsguide-website;search-the-buy-car-with-model;;1"
    },
    {
      "cells": [
        "Ford",
        "Capri",
        "NSW - All",
        "70000"
      ],
      "line": 17,
      "id": "search-functionality-of-carsguide-website;search-the-buy-car-with-model;;2"
    },
    {
      "cells": [
        "Land Rover",
        "Range Rover",
        "NSW - Central West",
        "100000"
      ],
      "line": 18,
      "id": "search-functionality-of-carsguide-website;search-the-buy-car-with-model;;3"
    },
    {
      "cells": [
        "Nissan",
        "Caravan",
        "NSW - All",
        "40000"
      ],
      "line": 19,
      "id": "search-functionality-of-carsguide-website;search-the-buy-car-with-model;;4"
    },
    {
      "cells": [
        "Hyundai",
        "Accent",
        "NSW - All",
        "15000"
      ],
      "line": 20,
      "id": "search-functionality-of-carsguide-website;search-the-buy-car-with-model;;5"
    },
    {
      "cells": [
        "Chrysler",
        "Voyager",
        "NSW - Sydney",
        "40000"
      ],
      "line": 21,
      "id": "search-functionality-of-carsguide-website;search-the-buy-car-with-model;;6"
    },
    {
      "cells": [
        "Mitsubishi",
        "380",
        "NSW - South Coast",
        "70000"
      ],
      "line": 22,
      "id": "search-functionality-of-carsguide-website;search-the-buy-car-with-model;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4521236000,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality-of-carsguide-website;search-the-buy-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Iam on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "I click \u0027Search cars\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I navigate to \u0027new and used car search\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I select make \"Ford\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I select model \"Capri\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select location \"NSW - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select price \"70000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should see the make \"Ford\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CarBuystepsTest.iamOnHomepage()"
});
formatter.result({
  "duration": 93013900,
  "status": "passed"
});
formatter.match({
  "location": "CarBuystepsTest.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 197034800,
  "status": "passed"
});
formatter.match({
  "location": "CarBuystepsTest.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 3425152500,
  "status": "passed"
});
formatter.match({
  "location": "CarBuystepsTest.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 33289200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ford",
      "offset": 15
    }
  ],
  "location": "CarBuystepsTest.iSelectMake(String)"
});
formatter.result({
  "duration": 273196800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Capri",
      "offset": 16
    }
  ],
  "location": "CarBuystepsTest.iSelectModel(String)"
});
formatter.result({
  "duration": 232772900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "CarBuystepsTest.iSelectLocation(String)"
});
formatter.result({
  "duration": 230641500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "70000",
      "offset": 16
    }
  ],
  "location": "CarBuystepsTest.iSelectPrice(String)"
});
formatter.result({
  "duration": 232651600,
  "status": "passed"
});
formatter.match({
  "location": "CarBuystepsTest.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 2283542100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ford",
      "offset": 23
    }
  ],
  "location": "CarBuystepsTest.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 77500,
  "status": "passed"
});
formatter.after({
  "duration": 2682673000,
  "status": "passed"
});
formatter.before({
  "duration": 5242506900,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality-of-carsguide-website;search-the-buy-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Iam on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "I click \u0027Search cars\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I navigate to \u0027new and used car search\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I select make \"Land Rover\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I select model \"Range Rover\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select location \"NSW - Central West\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select price \"100000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should see the make \"Land Rover\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CarBuystepsTest.iamOnHomepage()"
});
formatter.result({
  "duration": 23900,
  "status": "passed"
});
formatter.match({
  "location": "CarBuystepsTest.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 193068300,
  "status": "passed"
});
formatter.match({
  "location": "CarBuystepsTest.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 2033643500,
  "status": "passed"
});
formatter.match({
  "location": "CarBuystepsTest.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 52672000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Land Rover",
      "offset": 15
    }
  ],
  "location": "CarBuystepsTest.iSelectMake(String)"
});
formatter.result({
  "duration": 261905700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Range Rover",
      "offset": 16
    }
  ],
  "location": "CarBuystepsTest.iSelectModel(String)"
});
formatter.result({
  "duration": 282709800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Central West",
      "offset": 19
    }
  ],
  "location": "CarBuystepsTest.iSelectLocation(String)"
});
formatter.result({
  "duration": 243459200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100000",
      "offset": 16
    }
  ],
  "location": "CarBuystepsTest.iSelectPrice(String)"
});
formatter.result({
  "duration": 236455400,
  "status": "passed"
});
formatter.match({
  "location": "CarBuystepsTest.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 1564029300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Land Rover",
      "offset": 23
    }
  ],
  "location": "CarBuystepsTest.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 49600,
  "status": "passed"
});
formatter.after({
  "duration": 872832400,
  "status": "passed"
});
formatter.before({
  "duration": 7599582400,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality-of-carsguide-website;search-the-buy-car-with-model;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Iam on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "I click \u0027Search cars\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I navigate to \u0027new and used car search\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I select make \"Nissan\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I select model \"Caravan\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select location \"NSW - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select price \"40000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should see the make \"Nissan\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CarBuystepsTest.iamOnHomepage()"
});
formatter.result({
  "duration": 13700,
  "status": "passed"
});
formatter.match({
  "location": "CarBuystepsTest.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 163139700,
  "status": "passed"
});
formatter.match({
  "location": "CarBuystepsTest.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 1812408200,
  "status": "passed"
});
formatter.match({
  "location": "CarBuystepsTest.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 45977800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nissan",
      "offset": 15
    }
  ],
  "location": "CarBuystepsTest.iSelectMake(String)"
});
formatter.result({
  "duration": 287482800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Caravan",
      "offset": 16
    }
  ],
  "location": "CarBuystepsTest.iSelectModel(String)"
});
formatter.result({
  "duration": 249404600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "CarBuystepsTest.iSelectLocation(String)"
});
formatter.result({
  "duration": 231910300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40000",
      "offset": 16
    }
  ],
  "location": "CarBuystepsTest.iSelectPrice(String)"
});
formatter.result({
  "duration": 235176700,
  "status": "passed"
});
formatter.match({
  "location": "CarBuystepsTest.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 2848246200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nissan",
      "offset": 23
    }
  ],
  "location": "CarBuystepsTest.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 41100,
  "status": "passed"
});
formatter.after({
  "duration": 1119773800,
  "status": "passed"
});
formatter.before({
  "duration": 2984401400,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality-of-carsguide-website;search-the-buy-car-with-model;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Iam on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "I click \u0027Search cars\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I navigate to \u0027new and used car search\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I select make \"Hyundai\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I select model \"Accent\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select location \"NSW - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select price \"15000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should see the make \"Hyundai\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CarBuystepsTest.iamOnHomepage()"
});
formatter.result({
  "duration": 25400,
  "status": "passed"
});
formatter.match({
  "location": "CarBuystepsTest.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 247481400,
  "status": "passed"
});
formatter.match({
  "location": "CarBuystepsTest.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 3424539200,
  "status": "passed"
});
formatter.match({
  "location": "CarBuystepsTest.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 28888700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hyundai",
      "offset": 15
    }
  ],
  "location": "CarBuystepsTest.iSelectMake(String)"
});
formatter.result({
  "duration": 257735700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Accent",
      "offset": 16
    }
  ],
  "location": "CarBuystepsTest.iSelectModel(String)"
});
formatter.result({
  "duration": 264895700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "CarBuystepsTest.iSelectLocation(String)"
});
formatter.result({
  "duration": 230917700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15000",
      "offset": 16
    }
  ],
  "location": "CarBuystepsTest.iSelectPrice(String)"
});
formatter.result({
  "duration": 235336000,
  "status": "passed"
});
formatter.match({
  "location": "CarBuystepsTest.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 1871402200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hyundai",
      "offset": 23
    }
  ],
  "location": "CarBuystepsTest.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 43000,
  "status": "passed"
});
formatter.after({
  "duration": 740214100,
  "status": "passed"
});
formatter.before({
  "duration": 6044408500,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality-of-carsguide-website;search-the-buy-car-with-model;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Iam on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "I click \u0027Search cars\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I navigate to \u0027new and used car search\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I select make \"Chrysler\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I select model \"Voyager\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select location \"NSW - Sydney\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select price \"40000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should see the make \"Chrysler\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CarBuystepsTest.iamOnHomepage()"
});
formatter.result({
  "duration": 24600,
  "status": "passed"
});
formatter.match({
  "location": "CarBuystepsTest.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 149623800,
  "status": "passed"
});
formatter.match({
  "location": "CarBuystepsTest.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 2462092800,
  "status": "passed"
});
formatter.match({
  "location": "CarBuystepsTest.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 32985400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrysler",
      "offset": 15
    }
  ],
  "location": "CarBuystepsTest.iSelectMake(String)"
});
formatter.result({
  "duration": 256327500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Voyager",
      "offset": 16
    }
  ],
  "location": "CarBuystepsTest.iSelectModel(String)"
});
formatter.result({
  "duration": 235953400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Sydney",
      "offset": 19
    }
  ],
  "location": "CarBuystepsTest.iSelectLocation(String)"
});
formatter.result({
  "duration": 245285400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40000",
      "offset": 16
    }
  ],
  "location": "CarBuystepsTest.iSelectPrice(String)"
});
formatter.result({
  "duration": 232857200,
  "status": "passed"
});
formatter.match({
  "location": "CarBuystepsTest.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 2354284800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chrysler",
      "offset": 23
    }
  ],
  "location": "CarBuystepsTest.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 30900,
  "status": "passed"
});
formatter.after({
  "duration": 682858700,
  "status": "passed"
});
formatter.before({
  "duration": 5031093700,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality-of-carsguide-website;search-the-buy-car-with-model;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Iam on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "I click \u0027Search cars\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I navigate to \u0027new and used car search\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I select make \"Mitsubishi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I select model \"380\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select location \"NSW - South Coast\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select price \"70000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should see the make \"Mitsubishi\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CarBuystepsTest.iamOnHomepage()"
});
formatter.result({
  "duration": 20300,
  "status": "passed"
});
formatter.match({
  "location": "CarBuystepsTest.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 268211600,
  "status": "passed"
});
formatter.match({
  "location": "CarBuystepsTest.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 2055904000,
  "status": "passed"
});
formatter.match({
  "location": "CarBuystepsTest.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 41795100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mitsubishi",
      "offset": 15
    }
  ],
  "location": "CarBuystepsTest.iSelectMake(String)"
});
formatter.result({
  "duration": 273599000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "380",
      "offset": 16
    }
  ],
  "location": "CarBuystepsTest.iSelectModel(String)"
});
formatter.result({
  "duration": 246196100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - South Coast",
      "offset": 19
    }
  ],
  "location": "CarBuystepsTest.iSelectLocation(String)"
});
formatter.result({
  "duration": 224174500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "70000",
      "offset": 16
    }
  ],
  "location": "CarBuystepsTest.iSelectPrice(String)"
});
formatter.result({
  "duration": 225769200,
  "status": "passed"
});
formatter.match({
  "location": "CarBuystepsTest.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 1672721400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mitsubishi",
      "offset": 23
    }
  ],
  "location": "CarBuystepsTest.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 41900,
  "status": "passed"
});
formatter.after({
  "duration": 655885400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 25,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality-of-carsguide-website;search-the-used-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "Iam on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I click \u0027Used\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I navigate to \u0027Used Cars For Sale\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I select make \"\u003cmake\u003e\" in Used Car For Sale Page",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select model \"\u003cmodel\u003e\" in Used Car For Sale  Page",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select location \"\u003clocation\u003e\" in Used Car For Sale Page",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select price \"\u003cprice\u003e\" in Used Car For Sale Page",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on find My Next Car tab in Used Car For Sale Page",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should see the make \"\u003cmake\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "search-functionality-of-carsguide-website;search-the-used-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 38,
      "id": "search-functionality-of-carsguide-website;search-the-used-car-with-model;;1"
    },
    {
      "cells": [
        "Peugeot",
        "206",
        "NSW - All",
        "25000"
      ],
      "line": 39,
      "id": "search-functionality-of-carsguide-website;search-the-used-car-with-model;;2"
    },
    {
      "cells": [
        "Renault",
        "Arkana",
        "NSW - All",
        "50000"
      ],
      "line": 40,
      "id": "search-functionality-of-carsguide-website;search-the-used-car-with-model;;3"
    },
    {
      "cells": [
        "Mazda",
        "121",
        "NT - North",
        "50000"
      ],
      "line": 41,
      "id": "search-functionality-of-carsguide-website;search-the-used-car-with-model;;4"
    },
    {
      "cells": [
        "Kia",
        "Carnival",
        "NSW - Sydney",
        "15000"
      ],
      "line": 42,
      "id": "search-functionality-of-carsguide-website;search-the-used-car-with-model;;5"
    },
    {
      "cells": [
        "BMW",
        "1 Series",
        "TAS - All",
        "90000"
      ],
      "line": 43,
      "id": "search-functionality-of-carsguide-website;search-the-used-car-with-model;;6"
    },
    {
      "cells": [
        "Audi",
        "A4",
        "ACT - All",
        "40000"
      ],
      "line": 44,
      "id": "search-functionality-of-carsguide-website;search-the-used-car-with-model;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3049957800,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality-of-carsguide-website;search-the-used-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "Iam on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I click \u0027Used\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I navigate to \u0027Used Cars For Sale\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I select make \"Peugeot\" in Used Car For Sale Page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select model \"206\" in Used Car For Sale  Page",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select location \"NSW - All\" in Used Car For Sale Page",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select price \"25000\" in Used Car For Sale Page",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on find My Next Car tab in Used Car For Sale Page",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should see the make \"Peugeot\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CarBuystepsTest.iamOnHomepage()"
});
formatter.result({
  "duration": 19300,
  "status": "passed"
});
formatter.match({
  "location": "CarBuystepsTest.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 222471300,
  "status": "passed"
});
formatter.match({
  "location": "CarBuystepsTest.iClickUsedLink()"
});
formatter.result({
  "duration": 3170397100,
  "status": "passed"
});
formatter.match({
  "location": "CarBuystepsTest.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 36794800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Peugeot",
      "offset": 15
    }
  ],
  "location": "CarBuystepsTest.iSelectMakeInUsedCarForSalePage(String)"
});
formatter.result({
  "duration": 260069100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "206",
      "offset": 16
    }
  ],
  "location": "CarBuystepsTest.iSelectModelInUsedCarForSalePage(String)"
});
formatter.result({
  "duration": 304189400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "CarBuystepsTest.iSelectLocationInUsedCarForSalePage(String)"
});
formatter.result({
  "duration": 231773100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25000",
      "offset": 16
    }
  ],
  "location": "CarBuystepsTest.iSelectPriceInUsedCarForSalePage(String)"
});
formatter.result({
  "duration": 227643500,
  "status": "passed"
});
formatter.match({
  "location": "CarBuystepsTest.iClickOnFindMyNextCarTabInUsedCarForSalePage()"
});
formatter.result({
  "duration": 2507248200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Peugeot",
      "offset": 23
    }
  ],
  "location": "CarBuystepsTest.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 54100,
  "status": "passed"
});
formatter.after({
  "duration": 1028593700,
  "status": "passed"
});
formatter.before({
  "duration": 4091388700,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality-of-carsguide-website;search-the-used-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "Iam on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I click \u0027Used\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I navigate to \u0027Used Cars For Sale\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I select make \"Renault\" in Used Car For Sale Page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select model \"Arkana\" in Used Car For Sale  Page",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select location \"NSW - All\" in Used Car For Sale Page",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select price \"50000\" in Used Car For Sale Page",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on find My Next Car tab in Used Car For Sale Page",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should see the make \"Renault\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CarBuystepsTest.iamOnHomepage()"
});
formatter.result({
  "duration": 20800,
  "status": "passed"
});
formatter.match({
  "location": "CarBuystepsTest.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 432935300,
  "status": "passed"
});
formatter.match({
  "location": "CarBuystepsTest.iClickUsedLink()"
});
formatter.result({
  "duration": 2531246300,
  "status": "passed"
});
formatter.match({
  "location": "CarBuystepsTest.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 26376100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Renault",
      "offset": 15
    }
  ],
  "location": "CarBuystepsTest.iSelectMakeInUsedCarForSalePage(String)"
});
formatter.result({
  "duration": 264473400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Arkana",
      "offset": 16
    }
  ],
  "location": "CarBuystepsTest.iSelectModelInUsedCarForSalePage(String)"
});
formatter.result({
  "duration": 232318800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "CarBuystepsTest.iSelectLocationInUsedCarForSalePage(String)"
});
formatter.result({
  "duration": 231830800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50000",
      "offset": 16
    }
  ],
  "location": "CarBuystepsTest.iSelectPriceInUsedCarForSalePage(String)"
});
formatter.result({
  "duration": 227066300,
  "status": "passed"
});
formatter.match({
  "location": "CarBuystepsTest.iClickOnFindMyNextCarTabInUsedCarForSalePage()"
});
formatter.result({
  "duration": 2676978000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Renault",
      "offset": 23
    }
  ],
  "location": "CarBuystepsTest.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 41000,
  "status": "passed"
});
formatter.after({
  "duration": 667683600,
  "status": "passed"
});
formatter.before({
  "duration": 4756240300,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality-of-carsguide-website;search-the-used-car-with-model;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "Iam on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I click \u0027Used\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I navigate to \u0027Used Cars For Sale\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I select make \"Mazda\" in Used Car For Sale Page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select model \"121\" in Used Car For Sale  Page",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select location \"NT - North\" in Used Car For Sale Page",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select price \"50000\" in Used Car For Sale Page",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on find My Next Car tab in Used Car For Sale Page",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should see the make \"Mazda\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CarBuystepsTest.iamOnHomepage()"
});
formatter.result({
  "duration": 16700,
  "status": "passed"
});
formatter.match({
  "location": "CarBuystepsTest.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 258791700,
  "status": "passed"
});
formatter.match({
  "location": "CarBuystepsTest.iClickUsedLink()"
});
formatter.result({
  "duration": 3218407900,
  "status": "passed"
});
formatter.match({
  "location": "CarBuystepsTest.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 28260500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mazda",
      "offset": 15
    }
  ],
  "location": "CarBuystepsTest.iSelectMakeInUsedCarForSalePage(String)"
});
formatter.result({
  "duration": 253747500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "121",
      "offset": 16
    }
  ],
  "location": "CarBuystepsTest.iSelectModelInUsedCarForSalePage(String)"
});
formatter.result({
  "duration": 230420100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NT - North",
      "offset": 19
    }
  ],
  "location": "CarBuystepsTest.iSelectLocationInUsedCarForSalePage(String)"
});
formatter.result({
  "duration": 229745000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50000",
      "offset": 16
    }
  ],
  "location": "CarBuystepsTest.iSelectPriceInUsedCarForSalePage(String)"
});
formatter.result({
  "duration": 233725900,
  "status": "passed"
});
formatter.match({
  "location": "CarBuystepsTest.iClickOnFindMyNextCarTabInUsedCarForSalePage()"
});
formatter.result({
  "duration": 1992627400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mazda",
      "offset": 23
    }
  ],
  "location": "CarBuystepsTest.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 33900,
  "status": "passed"
});
formatter.after({
  "duration": 641114600,
  "status": "passed"
});
formatter.before({
  "duration": 3028234800,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality-of-carsguide-website;search-the-used-car-with-model;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "Iam on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I click \u0027Used\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I navigate to \u0027Used Cars For Sale\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I select make \"Kia\" in Used Car For Sale Page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select model \"Carnival\" in Used Car For Sale  Page",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select location \"NSW - Sydney\" in Used Car For Sale Page",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select price \"15000\" in Used Car For Sale Page",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on find My Next Car tab in Used Car For Sale Page",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should see the make \"Kia\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CarBuystepsTest.iamOnHomepage()"
});
formatter.result({
  "duration": 21300,
  "status": "passed"
});
formatter.match({
  "location": "CarBuystepsTest.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 210259600,
  "status": "passed"
});
formatter.match({
  "location": "CarBuystepsTest.iClickUsedLink()"
});
formatter.result({
  "duration": 3379488500,
  "status": "passed"
});
formatter.match({
  "location": "CarBuystepsTest.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 27411500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kia",
      "offset": 15
    }
  ],
  "location": "CarBuystepsTest.iSelectMakeInUsedCarForSalePage(String)"
});
formatter.result({
  "duration": 270495100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Carnival",
      "offset": 16
    }
  ],
  "location": "CarBuystepsTest.iSelectModelInUsedCarForSalePage(String)"
});
formatter.result({
  "duration": 256656800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Sydney",
      "offset": 19
    }
  ],
  "location": "CarBuystepsTest.iSelectLocationInUsedCarForSalePage(String)"
});
formatter.result({
  "duration": 239205600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15000",
      "offset": 16
    }
  ],
  "location": "CarBuystepsTest.iSelectPriceInUsedCarForSalePage(String)"
});
formatter.result({
  "duration": 230255300,
  "status": "passed"
});
formatter.match({
  "location": "CarBuystepsTest.iClickOnFindMyNextCarTabInUsedCarForSalePage()"
});
formatter.result({
  "duration": 1470803500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kia",
      "offset": 23
    }
  ],
  "location": "CarBuystepsTest.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 43600,
  "status": "passed"
});
formatter.after({
  "duration": 939526900,
  "status": "passed"
});
formatter.before({
  "duration": 5950154100,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality-of-carsguide-website;search-the-used-car-with-model;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "Iam on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I click \u0027Used\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I navigate to \u0027Used Cars For Sale\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I select make \"BMW\" in Used Car For Sale Page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select model \"1 Series\" in Used Car For Sale  Page",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select location \"TAS - All\" in Used Car For Sale Page",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select price \"90000\" in Used Car For Sale Page",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on find My Next Car tab in Used Car For Sale Page",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should see the make \"BMW\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CarBuystepsTest.iamOnHomepage()"
});
formatter.result({
  "duration": 18500,
  "status": "passed"
});
formatter.match({
  "location": "CarBuystepsTest.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 160627000,
  "status": "passed"
});
formatter.match({
  "location": "CarBuystepsTest.iClickUsedLink()"
});
formatter.result({
  "duration": 2217503800,
  "status": "passed"
});
formatter.match({
  "location": "CarBuystepsTest.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 27996700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 15
    }
  ],
  "location": "CarBuystepsTest.iSelectMakeInUsedCarForSalePage(String)"
});
formatter.result({
  "duration": 257566300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1 Series",
      "offset": 16
    }
  ],
  "location": "CarBuystepsTest.iSelectModelInUsedCarForSalePage(String)"
});
formatter.result({
  "duration": 307290600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TAS - All",
      "offset": 19
    }
  ],
  "location": "CarBuystepsTest.iSelectLocationInUsedCarForSalePage(String)"
});
formatter.result({
  "duration": 245281100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "90000",
      "offset": 16
    }
  ],
  "location": "CarBuystepsTest.iSelectPriceInUsedCarForSalePage(String)"
});
formatter.result({
  "duration": 234753400,
  "status": "passed"
});
formatter.match({
  "location": "CarBuystepsTest.iClickOnFindMyNextCarTabInUsedCarForSalePage()"
});
formatter.result({
  "duration": 2509826000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 23
    }
  ],
  "location": "CarBuystepsTest.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 43200,
  "status": "passed"
});
formatter.after({
  "duration": 706020900,
  "status": "passed"
});
formatter.before({
  "duration": 4828340800,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Search the used car with model",
  "description": "",
  "id": "search-functionality-of-carsguide-website;search-the-used-car-with-model;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "Iam on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I click \u0027Used\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I navigate to \u0027Used Cars For Sale\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I select make \"Audi\" in Used Car For Sale Page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select model \"A4\" in Used Car For Sale  Page",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select location \"ACT - All\" in Used Car For Sale Page",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select price \"40000\" in Used Car For Sale Page",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on find My Next Car tab in Used Car For Sale Page",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should see the make \"Audi\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CarBuystepsTest.iamOnHomepage()"
});
formatter.result({
  "duration": 26100,
  "status": "passed"
});
formatter.match({
  "location": "CarBuystepsTest.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 243605000,
  "status": "passed"
});
formatter.match({
  "location": "CarBuystepsTest.iClickUsedLink()"
});
formatter.result({
  "duration": 2002951800,
  "status": "passed"
});
formatter.match({
  "location": "CarBuystepsTest.iNavigateToUsedCarsForSalePage()"
});
formatter.result({
  "duration": 41994100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 15
    }
  ],
  "location": "CarBuystepsTest.iSelectMakeInUsedCarForSalePage(String)"
});
formatter.result({
  "duration": 277162200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A4",
      "offset": 16
    }
  ],
  "location": "CarBuystepsTest.iSelectModelInUsedCarForSalePage(String)"
});
formatter.result({
  "duration": 282390500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ACT - All",
      "offset": 19
    }
  ],
  "location": "CarBuystepsTest.iSelectLocationInUsedCarForSalePage(String)"
});
formatter.result({
  "duration": 227040700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40000",
      "offset": 16
    }
  ],
  "location": "CarBuystepsTest.iSelectPriceInUsedCarForSalePage(String)"
});
formatter.result({
  "duration": 238370200,
  "status": "passed"
});
formatter.match({
  "location": "CarBuystepsTest.iClickOnFindMyNextCarTabInUsedCarForSalePage()"
});
formatter.result({
  "duration": 2490444200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 23
    }
  ],
  "location": "CarBuystepsTest.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 57100,
  "status": "passed"
});
formatter.after({
  "duration": 656306900,
  "status": "passed"
});
formatter.uri("finddealers.feature");
formatter.feature({
  "line": 1,
  "name": "Find the dealers and verify",
  "description": "",
  "id": "find-the-dealers-and-verify",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3003006900,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Iam on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on \u0027buy+sell\u0027 tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click ‘Find a Dealer’",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to \"https://www.carsguide.com.au/car-dealers\" url page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I should see the dealer names \u003cdealersName\u003e are display on page",
  "rows": [
    {
      "cells": [
        "dealersName"
      ],
      "line": 9
    },
    {
      "cells": [
        "3 Point Motors Epping"
      ],
      "line": 10
    },
    {
      "cells": [
        "4WD Specialist Group"
      ],
      "line": 11
    },
    {
      "cells": [
        "5 Star Auto"
      ],
      "line": 12
    },
    {
      "cells": [
        "A \u0026 M Car Sales Pty Ltd"
      ],
      "line": 13
    },
    {
      "cells": [
        "A1 MOTORS COMPANY"
      ],
      "line": 14
    },
    {
      "cells": [
        "ANDREA MOTORI SERVICE"
      ],
      "line": 15
    },
    {
      "cells": [
        "Oxford Motors"
      ],
      "line": 16
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CarBuystepsTest.iamOnHomepage()"
});
formatter.result({
  "duration": 21200,
  "status": "passed"
});
formatter.match({
  "location": "CarBuystepsTest.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 194353800,
  "status": "passed"
});
formatter.match({
  "location": "FindDealersSteps.iClickFindADealer()"
});
formatter.result({
  "duration": 61400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.carsguide.com.au/car-dealers",
      "offset": 15
    }
  ],
  "location": "FindDealersSteps.iNavigateToUrlPage(String)"
});
formatter.result({
  "duration": 8517400,
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat org.testng.Assert.assertTrue(Assert.java:54)\r\n\tat au.com.carsguide.pages.FindDealersResultPage.verifyCarDealersPage(FindDealersResultPage.java:61)\r\n\tat au.com.carsguide.steps.FindDealersSteps.iNavigateToUrlPage(FindDealersSteps.java:30)\r\n\tat ✽.Then I navigate to \"https://www.carsguide.com.au/car-dealers\" url page(finddealers.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "FindDealersSteps.iShouldSeeTheDealerNamesDealersNameAreDisplayOnPage(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1195748900,
  "status": "passed"
});
});