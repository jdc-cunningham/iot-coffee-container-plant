### About

This is a basic photo viewer interface. This assumes everything is working correctly(python scripts run by CRON create/move photos to a public folder eg. `/var/www/html/plant-photos`).
You can see in the code eg. under `/public` there is a `plant-photos-dev` folder. That's for development as the folder name suggests.
When you build this folder will be included in the static files so I didn't want it to overwrite/interfere with the `/plant-photos` folder created by python that will have the photos from the pi cam.

Note: since the photos are not indexed/stored anywhere eg. paths stored in a database, the front end looks for photos based on current date(that the interface is running) and nearby dates.

So whenever this repo is done and if anyone runs this web interface on their own, the front end code will probably not find the photos(too far apart in date). To fix that you would just change the dates of the sample photos in `/public/plant-photos-dev/`. Will probably have this issue in `/docs` folder. I think in that case I'll just hard code the working date.

The photos in the dev folder are from [Pexels](https://www.pexels.com/).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).