# Hacka Pride
This is a repository to manage the building of one-page website made for Hacka Pride 2020.

## Running the project locally
***
* ### Required softwares
1. Git
2. Node
3. Npm

* ### Installation
1. You need to clone this repository by using the command `git clone https://github.com/citi-onboarding/pride-hack`

2. To install all the dependencies you must:
   - 2.1 Run the command `npm install`or `yarn install` on both folders `/client` and `server`

3. Writing the necessary scripts
   - 3.1 Create an empty folder called `public` at `/server/`
   - 3.2 If you´re using Windows Go to `/client/package.json`
   - 3.3 In `Debug`section you need to paste `"serverwin": "react-scripts build && rd /q ..\\server\\public && move .\\build ..\\server\\public"`
   - 3.4 Run the command `npm run serverwin`

4. Copy `.env-template` and fill the empty sections

5. To run the project go to `/server` and run the command `npm install` or `node .`

## Contribution Structure
***
* ### Adding a new funcionality
1. Create a new branch by using the name `feature/<name of the branch>` and commit `feature(<name of the branch>): title`
2. Make commits about your contribution using the template 
3. Make a pull request

* ### Debug or optimize a funcionality
1. To debug, create a new branch by using the name `bugfix/<name of the branch>` and make the two other steps mentioned above

2. To optimize, create a new branch by using the name `hotfix/<name of the branch>` and make the two other steps mentioned above

## Software description
***
* ### Made With
    - `React` - a frontend library
    - `KeystoneJS` - framework to CMS services
    - `NodeJS` - Execute enviromment to run the server with JavaScript
    - `MongoDB`- data storage 
    - `Cloudinary`- image storage

* ### Componentes
not made yet

* ### Endpoints (API's)
   - `/api/ticket`: send the ticket link to the database
   - `/api/banner`: send a title, a description and a DataTime (UTC) to the database
   - `/api/notice`: send the notice to the database
   - `/api/goal`: send a local, a data, a goal and the prizes to the database
   - `/api/social`: send a name and the links to the social media to the databse
   - `/api/collaborators`: send image, name, social media and a description to the datase about staffs and mentors
   - `/api/company`: send description and social media about CITi and name and logo about the partners
