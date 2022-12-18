# Library Management Page

## Description Of The Project

This project includes the frontend part of library management system where any user can request a book that is available from the list of books and can return the book once the purpose of taking the book is satisfied.
Now let us explore the features or functionalities of this webpage.

### 1) Overall View of the WebPage
![photo1](https://user-images.githubusercontent.com/94974857/208284197-d5be1578-e9ff-4699-a83b-1091c2a15dd4.png)

![photo2](https://user-images.githubusercontent.com/94974857/208284264-203340f7-a2f0-4fe9-a30d-570bc1818262.png)

The WebPage contains two tabs namely 'Request Books' and 'My Books'.
In Request Books tab, a user can be able to see all the books listed. A book can be requested by marking the checkbox and clicking on Request Book.
![photo3](https://user-images.githubusercontent.com/94974857/208284277-3fbf317e-2564-467f-bb7b-2d52cd494b87.png)

In My Books tab, a user can be able to see all the books that he/she has requested. And if the user wants to return then he can select the by marking on checkbox and clicking on return book button.
![photo4](https://user-images.githubusercontent.com/94974857/208284339-031d2c89-a519-4eae-9aed-1348d4757dfa.png)

![photo5](https://user-images.githubusercontent.com/94974857/208284342-102de505-b5e6-4648-9d9b-131c2c7aab48.png)

Note: Paging is formed on the list of books such that 10 books can be viewed per page.

### 2) Applying Filters

A user can be able to filter the books based on the BookName,Author and ISBN by selecting any option from the Drop down List.

![photo6](https://user-images.githubusercontent.com/94974857/208284445-347ea929-0536-4add-93a5-2502cbdea49e.png)

### 3) Count Of Books

This page maintains the count of available items and if a user requests for the book, the count decreases by 1 on successful action.
Similarly the count increases by 1 if the user returns the book.

![photo7](https://user-images.githubusercontent.com/94974857/208284512-a1e147bb-6e4b-499a-a12a-59a357d405bf.png)

Note: If the books are not available then prompts a message like 'Out of Stock'.


#How To Run The Project

1) Install Nodejs on the system (if it is not available on the system).
2) Open the Project Folder in the VSCode .
3) Open the new Terminal -> Install all the dependencies and requirements by using the command:
   ```
   npm install
   ```
4) After successful installation of Node modules, run the project file by using the command:
   ```
   npm start
   ```
5) Finally a local host server on the default Browser.

Note: If any vulnerabilities are found while installing the dependencies at step 3 then try fixing it y using below commands:

      ```
      npm install react-scripts
      ```
      ```
      npm audit fix --force
      ```
