# RIVERFORD CODE TEST

To run this test please do the following

* clone the repository
* cd into the directory you just created
* run `node(mon) server.js`
* this will start the react app and the back end
* visit [localhost:8080](http://localhost:8080/) in your browser. You can check things are working by visiting [localhost:8080/ping](http://localhost:8080/ping)

Sadly I havent had enough time to write tests or make the app look pretty. I have not been well and have a day job too.

In an ideal world I would have imported the recipies into a database (probably MongoDB) and used that to search them and then create the Rest API from there. Again due to time constraints I haven't been able to do this. What I have done is weritten a few lines of javascript that loads all the txt files into memory and uses simple regexp matching. It's actually quite fast but of course under load it would explode.

Also as one last thing. Can I make a suggestion. Having to deal with well over 1000 text files as part of a demo project is actually quite a lot. 100 might well have been enough to show things working.

## tests I would have written

* I would have used cypress to enter "chocolate" in the search box, then clicked on a random entry in the list and grepped for the word "chocolate" in the recipie. Then the same for "choc" etc.
* I would have used jest for snapshot tests to catch breaking visual changes
* I would have used either jest, react testing library or something similar to really test the logic for things like formatting list enteries etc.

If I had lots of time I would have made the web server, react app, database etc into a docker image. C'est la guerre.
