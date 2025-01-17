# ProShop E-Commerce App

ProShop is a single page application (SPA) built using the MERN full stack. This project app simulates an e-commerce web app
with payment functionality simulated via PayPal API in developer mode.

## Author

Josh Gregory:
* My GitHub: https://github.com/joshtype
* App Repo:  https://github.com/joshtype/ProShopReactProject
    
## MERN Full Stack

* *M*:
    * MongoDB NoSQL cloud DB
* *E*:
    * Express JS web framework
* *R*:
    * React JS frontend UI
* *N*:
    * Node JS web server

## Other Technologies

* Mongoose
    * Data modeling, manipulation, CRUD queries
* Compass
    * Database connection
* Axios
    * Data fetching between frontend & backend
* Redux 
    * State management
* PayPal dev API
    * Electronic payment processing 

## Architecture:

* Client React UI <---> Express JS framework <---> Node JS server <-Mongoose-> MongoDB

## Features

* Fast SPA via React JS with pagination via React Router.
* Modern UI styling via React custom Bootstrap CSS.
* Data management via Mongoose & Node JS.
* Product database seeded via custom script.
* Dynamic product inventory & order carts.
* User authentication via JSON token HTTP-only cookies.
* User profiles & order histories.
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

## Credits

* Based on project by Brad Traversy: https://github.com/bradtraversy/proshop-v2.
* Navbar logo and icon edited from Shutterstock ID: 2193560861.
