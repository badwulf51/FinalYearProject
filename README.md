# Image Recognition CNN


## this is our project for our 4th year application
The aim of this project was to create a CNN which could recognize objects. We built a cnn using keras which we got up to 96% on the testing set. We also build a flask backend which we posted to heroku. We also built a simple web client with flask which is available on heroku at <br/>
https://lit-mountain-89099.herokuapp.com/. 
 
 ## Fruit currently supported
 As we wanted to treat this as a classification problem, we only needed a small amount of fruit. We chose apple, orange, pineapple and strawberry as all had fairly distinct shapes and different colors.

## steps to run
We have implemented our own convolutional neural network which uses a Jupyter notebook, to see our networks running all you need to do is clone the repository, open a jupyter notebook from the directory you have cloned your repository from and run the kernel.

We have also placed our neural network. on heroku however we were not able to place our most successful weights on heroku due to the size of the weight file, as such to see our most successful model you will need to run the app locally. This can be done through flask, with the following commands: <br/>
export FLASK_APP=flask_backend.py <br/>
flask run



We have also created a mobile application with expo in order to show our application. This can be viewed from the expo store as it was published here. <br/> https://expo.io/@jamesk416/react_native_frontend
However to view this application you will need to download the expo client application and be on an android phone.

## Work breakdown
We both implemented the project together. However James focused slightly more on the CNN with Aron taking slightly more of the Web development side of the App.  
however as we decided we would not make any commits without the other person present all commits were made through jamesk4167.

## Previous githubs
As stated in the dissertation we also unsucessfully tried to implement our own CNN. while I had not intended to include this in the project as it was unsuccessful, at the advice of our cordinator I have included the relevant files inside our own CNN and the previous github account can be viewed at https://github.com/jamesk4167/ImageRecognitionCNN

We have uploaded a video of our expo application working and places it on youtube. it can be viewed at: <br/>
https://www.youtube.com/watch?v=nrK8mWLofb0&feature=youtu.be
