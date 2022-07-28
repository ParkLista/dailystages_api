# Daily Stages API
Creating, Updating and Tracking daily Taxi Stages in the terminals made easy with Daily ParkLista. This API simply implements the CRUD aspect of the Daily Stages API. Many changes are expected to take place as this is a learning project.

## Building Stack
This API is built with NodeJs in mind, laveraging the power of NodeJs Runtime, ExpressJs is used as the core of the endpoints.

## Taxi Properties
To add a taxi into the queue, the following properties must be made available by the taxi owner.
-   destination[array]geo
-   createdAt[date]
-   bio[text]
-   managedBy[text]
-   createdFrom[array]geo
-   name

## Data Storage
The API utilizes the magic of NoSQL database models to persist the data.