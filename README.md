# Use Case of Gallery App

### Create a react App with the following specifications:

1. HomePage : This will be the landing page where you can view all the users. </br> Display the following fields for each user:
- Name (should be a clickable hyperlink)
- Username
- Email
- Number of Albums
</br></br>Provide a search bar to filter the list of users.
On clicking on the name of the user it should open the Albums page.

2. Album page: On this page you can view all the albums created by a user. Display the
following:

- Title (should be a clickable hyperlink)

- Number of photos in the album
On Clicking the title of the album it should open the gallery page

3. Gallery page: On this page all the photos of an album should be displayed in a grid of 4 columns (desktop) or grid of 1 column (mobile).

4. All the pages should be responsive and should work on mobiles and desktops.

5. The api specification is as follows:

APIs :
1. Get all users:
- Method: GET
- URL: https://jsonplaceholder.typicode.com/users
2. Get one user:
- Method: GET
- URL: https://jsonplaceholder.typicode.com/users/{userid}
- Example: https://jsonplaceholder.typicode.com/users/1
3. Get all albums for a user:
- Method: GET
-- URL: https://jsonplaceholder.typicode.com/users/{userid}/albums
c. Example: https://jsonplaceholder.typicode.com/users/1/albums
4. Get one album:
- Method: GET
- URL: https://jsonplaceholder.typicode.com/albums/{albumid}
- Example: https://jsonplaceholder.typicode.com/albums/1
5. Get all photos of an album:
- Method: GET
- URL: https://jsonplaceholder.typicode.com/albums/{albumid}/photos
- Example: https://jsonplaceholder.typicode.com/albums/1/photos
