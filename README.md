# SubReddit

SubReddit allows users to view and favorite posts on the r/evilbuildings subreddit. 

## Technologies

The project is a single page application written in React with two routes: one for viewing top posts and another for viewing favorites. No styling frameworks have been used in this project, all CSS and animations are custom developed in order to keep the project as lean as possible. External dependencies include:

* The react-router library is used for routing and integration with the browser history api.

* Axios is employed for loading external JSON data from the Reddit API.

* React-timeago is employed for translating dates to the 'n seconds/minutes/days ago' format. This proved to be a lighter and more purpose-built solution than something like moment.js.

* All icons are SVGs that have been obtained from FontAwesome. FontAwesome is the creator of all such Icons and no modifications aside from meta-data (classnames) have been made. Use of these assets is permitted under the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/legalcode).

This project was bootstrapped using create-react-app (CRA) and deployment eased thanks to react-gh-pages.

## Supported Browsers

As of its initial release SubReddit has been tested and confirmed to work appropriatly in the most recent versions of Chrome and Firefox (Debian Stretch) as well as on the Android version of Chrome and Firefox. Please note that the content blocking setting recently added to Firefox for Android may interfere with loading much of the application.

## Roadmap

SubReddit is very much at a 1.0 release stage. High priority features on the project roadmap include:

1. Implementation of a rigorous test system to ensure code quality and enable TDD.
1. The ability for users to store favorite post data in browser storage for future visits.
1. infinite-loading or load-more button to allow users to access additional top-posts from the subreddit.
1. A tasteful exit-animation when removing favorited posts in the favorites view.
1. The ability for users to follow add additional subreddits to follow.
1. lazy-loading

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run deploy`

To deploy this code to a live site via GitHub Pages, you and `deploy` which will build the code and deploy to the GH-Pages branch of this project on GitHub Pages. If working in a fork, be sure to update the `homepage` key in `Package.json` to match your GitHub user and repository name. 

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

## License

Copyright (C) 2018 J.D. Bean

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.

