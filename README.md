#Program 2

#By Rayaan Irani & Westley Giadolor

#About:
This program was assigned as a part of Westley and my Databases class at SMU. 
The purpose of the program was to implement an API that primitave supports for parking allocation and management.
To complete this project we completed multiple routes including a POST /Accout which registers a user, a POST /Session which provides a user 
with a session token, a GET Session which given that token proivdes all of the user's account info.
A GET /Spots which generates all spots which meet multiple (optional) filters
A POST /Allocation which generates a parking allocation which is where a given vehicle would park
A PUT /Allocation which updates a parking allocation
A DELETE /Allocation which deletes a parking allocation

#Setup:
This program is a RESTful API wirtten in JS and which employs the express framework.

To run this program first, make sure that node is installed by runnung the command:
brew install node (or npm install -g node)

Once you have done this, you need to update the information in the knexfile.js file to match your username, password, and the location of your database.

Then run the following commands:
1. npm init -y
2. npm install
3. node index.js

#Usage of API:

#POST /Account
This route is used to register a user.

An example of a valid input and response is given:
![](../../../../../../var/folders/vy/7y1jdct53qsfvy12s014cdj00000gn/T/TemporaryItems/NSIRD_screencaptureui_S8IJH2/Screen Shot 2022-04-15 at 10.22.28 PM.png)

When no parameters are inputed the error response is,
![](../../../../../../var/folders/vy/7y1jdct53qsfvy12s014cdj00000gn/T/TemporaryItems/NSIRD_screencaptureui_A2vIMj/Screen Shot 2022-04-15 at 10.23.25 PM.png)

#POST /Session
This route is used to create a session token for a user.
![](../../../../../../var/folders/vy/7y1jdct53qsfvy12s014cdj00000gn/T/TemporaryItems/NSIRD_screencaptureui_wXnDP7/Screen Shot 2022-04-15 at 10.24.44 PM.png)

When the incorrect parameters are inputed the error response is,
![](../../../../../../var/folders/vy/7y1jdct53qsfvy12s014cdj00000gn/T/TemporaryItems/NSIRD_screencaptureui_RgQcRI/Screen Shot 2022-04-15 at 10.25.15 PM.png)

#GET /Session
This route is used to get all of the user's account info.
