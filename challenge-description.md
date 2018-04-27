##The Challenge

Our backend engenieers have been building a powerful API to sell event tickets, but we didn't had time to create a Web Frontend, so we need your help to get this bussines spinning. Crowder's UX Team has desgined a simple to use UI, and our designers just finished working on the UI, so you will receive a set of static HTML files, with CSS and some assets.

###What needs to be done
* List all available events
	- Call the events endpoint to get the list of available events. It's not necessary to implement an infinit scroll, but we would love to see that.
* Show event details and let the user pick a date, sector, rate and quantity
	- Once the date is selected, you will have to load the available sectors and rates, if a rate is unavailable, it should be grayed out. 
	- The rate includes the maximum amount of tickets that a user can buy.
* Ask the user for personal details and payment information
	- Ask the user for contact details and payment information. No validation is requiered, but if you think something should be validated, go ahead.
* Show the result page after submiting the order
	- Show the user the result after submiting the order.

**Please include a README with setup instructions, and any tests or other documentation you created as part of your solution.**

###What you will get
* The documentation of the API 
* HTML and CSS files so you can focus on coding (inside the design folder in this repository)

###What language, framework, build tool... should I use?
* You may use whatever you like as long as the solution is built using React and Redux.

###What else you can use
* Anything you want, as long as it makes sense.

###Found a bug in the API?
* Create an issue in this repository and our backend engineers will fix it.