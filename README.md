# KhunMalen Diary Web

KhunMalen Diary Web is a web-based application for managing and viewing personal diaries. This project includes a variety of frontend components and resources for creating a user-friendly and interactive diary management system.

## Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Information Architechture](#information-technology)
- [UI Prototype & UI Design Screen & Flow Guide](#ui-ux)
- [Conventions](#conventions)
- [Style Guide](#style-guide)

## Introduction

I have to create a brand new website called “Daily Application” . For the main purpose of this mission is practice what I learn in the recommended course such as Figma UX/UI Design, UX/UI Design, Website bootcamp 2024 (include HTML, CSS, CSS framework like Bootstrap and the important one is JavaScript) but in this mission I will use Tailwind for style instead of using bootstrap depend on the reason Tailwind is more flexible than Bootstrap. This mission is different from the second because in this mission I have to create one to-do-list website application by practice and explore the CRUD concept (create, read, update and delete). What I expect after I finish this mission is to know how to design UX/UI ,and also the flow of building frontend of a website, especially having more knowladge about the CRUD concept and discovering what is localStorage.

## Features

- Create, edit, and delete ,and view diary entries
- Responsive design for mobile and desktop
- Dynamic Calendar
- About us that describe about the website
- Contact us that has a developer information
- User Interactions: interactive elements such as buttons and forms.
- Navigation components
- Sidebar component
- Frompopup component
- Developer Information component
- About Us component
- Footer component

## Technologies Used

- HTML: Markup language for creating the structure of the web pages.
- CSS: Stylesheet language for designing the presentation of the web pages.
- JavaScript: Programming language for adding interactivity and functionality to the web pages.
- GitLab: use GitLab to control website code

## Installation

+++[Prerequistites]
    1. Git Install: You need to install git control system in your computer if you don't have it but, if you have already had it in your computer just check it by open ternimal and type 'git --version' command.

+++[Steps]: Below this step to start installation
    1. Create a Repository: You have to create Repository
    2. Clone a Repository: 
        - Create new folder then open folder with Visual Studio Code
        - open ternimal use the 'git clone' finally paste the URL of the remote repository that you copy from (example: GitHub or GitLab)
    3. View the website
        - Open the index.html file in your text editor and code editor.
        - Right-click on the index.html file and select "Open with" or "Open in Browser" 

## Usage

1. Open index.html in your web browser.
2. Click on the "New" button on the Navigation Bar to create a new entry.
3. Fill in the date, title, and description, then submit the form.
4. If you don't want to create just click on cancel button 
5. In case you click on create button the new note will be displayed in the notes list.
6. Use the edit button to manage update an entry.
7. Use the delete button to manage delete an entry
8. You can everywhere in entry to view entry accept only edit and delete button if you click one of them it will do its functionally as mention abbove

## Folder Structure

++[public]
   - This folder use for storing all HTML file accept index.html file that percentance  of public folder, src folder, .gitignore file, README.md file and .reviewboardrc
++[src]
   - This folder is used for storing source , inside it also has one important folder called ‘assets folder’ that it stores such as image and css folder inside (works for style). More than that, I use it to store many important folders called ‘js’ stand for JavaScript that inside have file main.js , create-entry.js , data folder and component folder.

-- [Folder]

KhunMalen-Diary-Web/
├── .vscode/
│   └── settings.json
├── khunmalen-diary-web/
│   ├── public/
│   │   ├── about-us.html
│   │   ├── calendar.html
│   │   └── contact-us.html
│   └── src/
│       ├── css/
│       │   ├── component/
│       │   │   ├── entry-container.css
│       │   │   ├── footer.css
│       │   │   ├── navigation-bar.css
│       │   │   ├── sidebar.css
│       │   │   └── ...
│       │   ├── about-us.css
│       │   ├── calendar.css
│       │   ├── contact-us.css
│       │   └── index.css
│       ├── image/
│       │   ├── about-us.png
│       │   ├── contact-us.png
│       │   ├── fb.svg
│       │   ├── help.png
│       │   ├── ig.svg
│       │   ├── logo.png
│       │   ├── our-mission.png
│       │   ├── our-team.png
│       │   └── ...
│       ├── js/
│       │   ├── component/
│       │   │   ├── about-us-component.js
│       │   │   ├── developer-info-component.js
│       │   │   ├── footer-component.js
│       │   │   ├── frompopup-entry-component.js
│       │   │   ├── nav-bar-component.js
│       │   │   ├── side-bar-component.js
│       │   │   └── ...
│       │   ├── data/
│       │   │   ├── about-us-data.js
│       │   │   ├── developer-info-data.js
│       │   │   ├── footer-data.js
│       │   │   ├── nav-bar-data.js
│       │   │   ├── side-bar-data.js
│       │   │   └── ...
│       │   ├── calendar.js
│       │   ├── create-entry.js
│       │   └── main.js
├── .gitignore
├── .reviewboardrc
├── index.html
└── README.md

## Information Architecture
Link: https://www.figma.com/board/GLvFq9HwKdN25MAOwfc6Ub/Information-Architecture?node-id=0-1&t=auzO3M58XN79OlJB-1

## UI Prototype & UI Design Screen & Flow Guide
Link: https://www.figma.com/design/KNsqcVqRe3xnOBJthfd2eu/Daily-Website-Application?node-id=32-893&t=02xLKRpnues65UxE-1

## Conventions
Link: https://www.notion.so/Convention-Guide-For-3rd-Mission-075e70a262f94b168f1f7458bb2b28c1?pvs=4
Below are in Convention

## Style Guide
:root {
  /* For font */
  --font-style: "Andika", sans-serif;
  --font-small: 16px;
  --font-large: 32px;

  /* For Gap */
  --spacing-gap: 2rem;

  /* For color and backgroun-color */
  --color-dark-blue: #2c4759;
  --color-white: white;
  --icon-search-bg: #e9e9e9;
  --bg-main-color: rgb(236, 177, 118);
  --side-bar-bg: #ead8c0;
  --color-dark-red: #941313;
  --bg-entry-color: #DED0B6;
  --popup-text-color: #C7C8CC;
  --calendar-bg: #F8F4E1;
  --about-us-odd-color: #E0FBE2;
  --about-us-even-color: #CAF4FF;

  /* For border radius */
  --radius-circle: 100%;
  --border-radius-medium: 30px;
  --border-radius-ten: 10px;

  /* For padding */
  --padding-button: 5px;
  --padding-ml: 15px;
  --padding-large: 40px;
  --padding-center: 0 50px;
  --icon-search: 20px 0 0 20px;

  /* For Margin */
  --margin-top: 40px;
  --margin-top-high: 50px;
  --margin-top-ten: 10px;
  --main-entry-margin-top : 13px;
}

