![PASSWORD CHECKER)](https://github.com/rentezzy/USENSE-test/assets/123960679/0e2b9640-8e79-454c-944d-7837fd3ffe6a)
## Test task for the USENSE company. React & Typescript was used for development.

Task:
Create applications to test password strength.

The essence of the assignment:
  - Create a field for entering a password, under the field add 3 sections which will show the strength of the password;
  - Changes in password strength must take place in real time;
How to calculate the strength of a password:
  - Only letters/digits/symbols - the password is easy;
  - Combination of letters-symbols/letters-digits/digits-symbols - the password is medium;
  - Has letters, symbols and numbers - the password is strong;

The color of the sections will depend on the strength of the password:
  - If the field is empty, all sections are gray;
  - If the field has less than 8 characters, all sections are red;
  - If the password is easy - the first section is red the rest are gray;
  - If the password is medium - the first two sections are yellow the last one is gray;
  - If the password is strong, all sections are green;
![HOW TO SETUP](https://github.com/rentezzy/USENSE-test/assets/123960679/c56ffa5f-98ad-4952-b4c9-a9a8a3b91234)

## The project is available on github pages, but if you want to run it locally, follow these steps:
1. Clone repository to your local folder
```CLI
git clone https://github.com/rentezzy/USENSE-test.git
```
2. Change directory
```
cd USENSE-test
```
3. Install dependencies
```
npm install
```
4. Run development server
```
npm run start
```
5. Server will be opened in localhost:3000.

