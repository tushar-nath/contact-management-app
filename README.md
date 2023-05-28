# Contact Management App

This is a contact management app built using ReactJS, TypeScript, TailwindCSS, React Router v6, and React Query (TanstackQuery). The app allows users to manage their contacts and also provides charts and maps to visualize COVID-19 data.

## Features

### Contacts

- Add new contacts using a form.
- View a list of all added contacts.
- View contact details.
- Edit and delete contacts.
- Contact data is stored using Redux.

### Charts and Maps

- Dashboard with a line graph showing the fluctuations in COVID-19 cases worldwide.
- A React Leaflet map with markers indicating the country name, total number of active, recovered cases, and deaths in each country. Popup displays the details.
- Data for charts and maps is fetched from the following APIs:
  - World wide data of cases: [https://disease.sh/v3/covid-19/all](https://disease.sh/v3/covid-19/all)
  - Country-specific data of cases: [https://disease.sh/v3/covid-19/countries](https://disease.sh/v3/covid-19/countries)
  - Graph data for cases with date: [https://disease.sh/v3/covid-19/historical/all?lastdays=all](https://disease.sh/v3/covid-19/historical/all?lastdays=all)

## Instructions

To run the app locally, follow these steps:

1. Clone this repository: `git clone <repository-url>`
2. Navigate to the app's directory: `cd contact-management-app`
3. Install the required dependencies: `npm install`
4. Start the development server: `npm start`

The app will be running at [http://localhost:3000](http://localhost:3000).

## Development Setup

To set up the basic structure of the app and configure the necessary tools, follow these steps:

1. Install create-react-app globally: `npm install -g create-react-app`
2. Create a new React app with TypeScript: `npx create-react-app contact-management-app --template typescript`
3. Change to the app's directory: `cd contact-management-app`
4. Install React Query: `npm install react-query`
5. Install TailwindCSS: `npm install tailwindcss`
6. Install React Router v6: `npm install react-router-dom@next`
7. Set up TailwindCSS by creating a configuration file: `npx tailwindcss init`
8. Configure TailwindCSS by updating the `tailwind.config.js` file with the necessary configurations.
9. Set up Redux by installing the required dependencies: `npm install react-redux redux @types/react-redux`
10. Create the necessary Redux files (actions, reducers, store) for managing the contact data.

## Screenshots

![Screenshot 2023-05-28 at 8 00 47 PM](https://github.com/tushar-nath/contact-management-app/assets/50198727/785e41cf-9f90-4dd5-9192-7aef92a109ab)

![Screenshot 2023-05-28 at 8 01 38 PM](https://github.com/tushar-nath/contact-management-app/assets/50198727/17f16157-8d24-4c78-a2e0-52b3dbcc259f)
