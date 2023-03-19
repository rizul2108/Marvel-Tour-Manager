# Marvel Tour Manager
It is a Tour Manager Website for Avengers. For making this website I have used react.js for frontend and firebase as a backend service. I have used redux to maintain state of the fields where the user enters any info. I have also given option to user to upload his username and his profile picture or choose default profile picture.(Although this functionality was working fine but now it is giving me error after hosting it on netlify). Now user is taken to dashboard after registering where he is shown the previous trips he was part of. .While adding a trip user is asked to enter title for trip which is required field if he doesn't fill he can't move ahead.On moving on to next page user can enter other details of the trip like Destination, Start Date ,End Date, No. of Members of the Trip. On next page, number of cards are shown to user equal to the number of days between these 2 dates in which user can enter activities he want to do on particular day and below it is number of cards equal to number of members going to trip so that they can be assigned responsibilities. On Next Page, user is shown the preview of whole trip and he can now go back if he wants to change any particular detail of the trip except the title. Now, on clicking the save the trip button in last the trip details are saved to firebase . Earlier during all this navigation the details are saved to redux store. At only last stage detials will saved to firebase.

Now I wanted to save responsibilities and schedule of each trip to firebase and show them on next page but I wasn't able to figure it out how to do it. So, I thought that I would work on this feature later And later I also came to know about many-to-many just 1 day before submission. So I will work on it after submission and try to make the website fully functional. Other feature I left to add is show all the trips user was part of in Previous Trips and Upcoming Trips panel in dashboard.

## Visit my website using given link
[Here is the link](https://marvel-tours-manager.netlify.app/)

## **Languages Used**
1. Javascript
2. CSS
3. React JS
( Redux )
4. Bootstrap
## Dependencies
- npm i uuid 
- npm i redux react-redux redux-devtools-extension
- npm i redux-firestore react-redux-firebase
- npm i redux-thunk
- npm i firebase
- npm i react-dom 
