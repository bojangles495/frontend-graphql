For the coding challenge I chose to replace Redux with Relay/GraphQL. I chose Relay over the other frameworks because I felt that out of the others, Relay would be both challenging to show off that I am capable of implementing new things, along with, it seems like a really powerful framework that is in it’s infancy.

I have only gotten to work with a few frameworks but having used Angular, React/Redux and now React/Relay I must say that while the learning curve is going up the solidness of applications due to correct implementation of these frameworks is also going up.

The pros for Relay are that it is very flexible and easy to read once an understanding of the framework is established. Unlike Redux all of the logic of fetching data can be composed inline with the component and because the Relay code is quite small it doesn’t break the readability of the component code. It is flexible because as the data store may change and new fields are added and removed it is as simple as updating the fragments to reflect the changes.

I do believe a benefit Redux has over Relay is that while having action creators, containers and reducers creates a lot of extra files and can become a little hard to read; keeping the business logic separate from the components allows for easier testing.

Out of all of the frameworks I think MobX would have been the easiest to implement however I think long term MobX would not have the verbosity and maintainability that the other frameworks offer. It seemed to be the paradigm to keep things simple and let the developer modify as they see fit but this has its own disadvantages as stated above.

If I were to do this over again I think I might checkout RxJS/Cycle.js as I liked the concept of placing more emphasis on making things event driven and moving the architecture over to a push data versus pull data. The main factor for not choosing to use it this time is that for how simple the components were for the challenge it added far too much complexity for the time given.

**Notes for building the project:

I believe the only real issue will be that a new GraphQL api key will need to be created and added to the /src/index.js file for the endpoints to actually fetch data. Other than that the original challenges build method should work
