#
# **QKart**
 ![](RackMultipart20210526-4-f4493l_html_237499165a11f2b9.gif)A React.js E-commerce application

QKart is an E-commerce application offering a variety of products for customers to choose from.

- Implemented the core logic for authentication, shopping cart and checkout
- Improved UI by adding responsive design elements for uniform experience across different devices
- Utilized REST APIs to dynamically load and render data served by the backend server
- Using static backend made with Node.js and Express.js
- Utilized localStorage to persist user details at client-side
- Deployed the website using Netlify and Heroku

<p align="center">
  <img src="https://github.com/maverickRajeev/QKart/blob/main/QKart%20Architecture.png">
</p>

Features :

1. Authentication
2. Dynamic product listing
3. Search
4. Shopping cart
5. Checkout process

<p align="center">
  <img src="https://github.com/maverickRajeev/QKart/blob/main/QKart%20Component%20Architecture.png">
</p>

Technologies Used :

1. Frontend - HTML , CSS , React.js
2. Backend - Express.js
3. Database - localStorage ( Upgrade to MongoDB )
4. REST APIs

<p align="center">
  <img src="https://github.com/maverickRajeev/QKart/blob/main/Request-Response%20Cycle%20QKart.png">
</p>

To run this project on your local computer :

- Clone the repository

git clone [https://github.com/maverickRajeev/QKart.git](https://github.com/maverickRajeev/QKart.git)

- **Start the backend server**

- Execute the below commands to start the backend server. You will see a message displayed saying that the server started on port 8082

cd QKart/backend/

npm install

npm start

- We have to mention the backend endpoint in QKart/src/App.js to link the frontend with the backend server.
- **Start the React app and view it on the browser**

  - Execute **npm install**. It installs the project dependencies as listed in the package.json file. You can ignore any compilation warnings shown.
  - Execute **npm start** to start the QKart app on port 8081
  - Now, you can visit **workspace\_ip:8081** on your browser to view the web page. The workspace\_ip here has to be replaced with your workspace&#39;s public IP address
