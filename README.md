# Frontend Technical Test

This document defines a coding test focused on frontend tech skills

We'd like you to put togeather a small **responsive** app (preferably in Angular, but React is fine), that has the following features / capabilities: 				
* a login page				
* a page where the user can upload or delete the files (for example images or files are listed: up to you)				
* Please use Bootstrap or Tailwind 				
* Please use some state management (Rxjs, store...)				
* Please write unit tests		

The **specification** below contains the basic elements of the application. You are free to implement as much or as little detail as you like and as a rule of thumb: **don't spend more than a few hours on the test overall**.

## Specification:

1. create the registration (if no user) and login (if user) page. 
Fields: 
 * first name 
 * last name
 * email address
 * password (?) 

1. Listing page

   After a successful login, the user is redirected to a listing page, where the user sees the uploaded images or files listed.
1. The user should be able to **upload** and **delete** files 
1. Show action status messages (after upload/delete)
1. The list should be sortable and filterable.

> Bonus: Grouping for example using an accordion. Copy and move feature. Error handling

You don't need to implement any backend state. We are only interested in your frontend knowledge.
*(Tip: To store 'data' you can use: local storage, session storage, cookies, etc..)*
			
We want you to present your skills and competencies in the in the way you feel reflects those best. It is not necessary to complete all tasks. It's more important that the completed tasks reflect the quality of your work. 

If you have other projects that would you share with us / or would be interesting for us, we are happy to look at them, but keep in mind you only need to do the given/described task. 

## Criteria / what we're looking for:

1. planning
2. implementation
3. deployment (git handling, commit message quality)
4. documentation 
5. testing

Preferred Tech Stack:
 * TypeScript
 * Angular or React 
 * RxJS/NgRx
 * Bootstrap/Tailwind (SCSS/PostCSS etc..)
 * Jest

To develop and submit your solution please follow these steps:

1. Create a public repo in your own GitHub account and push the technical test there
2. Develop your solution and push your changes to your own public GitHub repo
3. Once you're happy with your solution send us a link to your repo
