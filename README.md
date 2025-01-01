# ProShop MERN App

ProShop is a project app built using the MERN full stack. ProShop simulates an e-commerce web app
with payment functionality via PayPal developer API.
    
## MERN Full Stack

* M: MongoDB
* E: Express JS
* R: React JS
* N: Node JS

## Other Technologies

* Mongoose data modeling
* Redux state management
* PayPal developer API 

## Architecture:

Client (React UI) <--> Express JS (web framework) <--> Node JS web server (via Mongoose) <--> MongoDB (database)

## Features

* Fast UI via React JS with pagination via React Router.
* Modern UI styling via React custom Bootstrap CSS.
* Dynamic product inventory & order carts.
* Data management via Mongoose & Node JS.
* Product database seeded via custom script.
* User authentication, user profiles, order histories.
* User ratings & reviews (one per verified purchased item).
* Product searching with filter functionality.
* Admin management screens for orders, payments, users.
* Checkout process (payment, shipping, order state).
* Electronic payments via PayPal API (developer mode).
* more...

## Usage

Users can create an account and are authenticated at login. User data is stored on a cloud DB.
Data includes contact info, payment info, and order histories. Users can view items for sale,
search & filter items, add items to a current order cart, purchase items using PayPal (in
developer mode), and submit a rating for purchased items (users are limited to one rating 
per verified purchased items).

## Author

Josh Gregory:
* My GitHub: https://github.com/joshtype
* App Repo:  https://github.com/joshtype/ProShopReactProject

## Credit

Based on project by Brad Traversy:
* https://github.com/bradtraversy/proshop-v2

Navbar logo and icon (edited):
* Shutterstock ID: 2193560861