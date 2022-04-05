# Groww Bank Details app

## Start the server locally

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Hosted on Netlify

Open [https://bankgroww.netlify.app/](https://bankgroww.netlify.app/) to open the hosted website

# Features Implemented
- ✅ Developed a Single Page Application using ReactJS.
- ✅ The application  renders a list of banks fetched from the API mentioned below.
- ✅  There is a dropdown to select cities (Take only 5 Cities), another dropdown for search categories (IFSC, branch, bank_name) etc., and a search bar.

- ✅  Based on the values of these dropdowns and the search query, user will locally filter
the bank list and get the results .
- ✅  There are be 2 routes.<br>
   --> A. /all-banks => This route will house the Bank List component and the
    filter/search logic.<br>
   --> B. /bank-details/{city}/{ifsc_code} => This route will display details of an
individual bank with corresponding ifsc_code

- ✅ Each Bank row in the table takes the user to the corresponding bank’s
details page.
- ✅  By default (no filters/search query), the application renders all the data
for MUMBAI by default.
- ✅  Pagination has been implemented and each page renders 10 banks at
once by default.
- ✅  Search results are shown right after the user has stopped typing. (No
search/submit button)
- ✅ API response is cached.
- ✅  Basic Error, Loading, Not Found states has been implemented.
- ✅  Added proper validations and safe checks wherever necessary.

### Advanced features
- ✅  Row size (Number of banks on each page) is 10 by default, but users can
change this to a desired number.
- ✅  Deploy this application on Heroku, GitHub, Netlify
