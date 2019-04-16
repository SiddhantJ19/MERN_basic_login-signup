# MERN_basic_login-signup

Install Dependencies with:   
`npm install`

Production mode:
`npm start`


Completed Till now:

Backend is completed and ready to be deployed.
Implemented a User Register and Login form considering various validations like emptyfield, right format and Email Verification.

To setup email verification, change `<email>` and `<password>` in routes/api/users.js file, line number #71 to email and password of 
an original gmail account.

Every user can login through a common field of Username or Email, which is taken care at backend since both username and email are unique for all users.

The DB schema is present in models folder.

To learn more about the project, feel free to open an issue and ping me @SiddhantJ19.


To be implemented:
React-Redux client.

To see the implementation:
Download Postman
Linux:  `snap install postman`  
and go to following endpoints

`http://localhost:8000/api/users/register`
 here is a screenshot of what fields are required
 ![registerAPI](https://user-images.githubusercontent.com/38999317/56204180-78ba9280-6064-11e9-8a6c-3a4fae2a7acd.png)

`http://localhost:8000/api/users/login`
![loginAPI](https://user-images.githubusercontent.com/38999317/56204181-79532900-6064-11e9-85fa-395722060a4a.png)

`http://localhost:8000/api/users/confirmation/2263b40af3095a8ad154891a96673c98`

![EmailConfirmationAPI](https://user-images.githubusercontent.com/38999317/56204183-79532900-6064-11e9-9efd-80d57d2ed587.png)
