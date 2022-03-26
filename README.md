# CatYummy

## Capstone Project of the IT bootcamp at neuefische

CatYummy allows you to track your cat's decisions about its food. After adding the food your cat likes or does not, CatYummy will help your memory out when you will stand in front of a long row with cat food products in the supermarket or pet supplies shop next time, trying to remember which food your cat has already tested...and didn' t like it. CatYummy will save your money, helps to reduce waste and makes your cat happier.

CatYummy is under construction.

From the landing page the most important features are just one click away without any login for a better user experience while shopping time, but you will find even more inside. To leave the app there is a button (cat nearby an open door) on all main navigation pages in the upper right corner.  
A good start is the form to add a listcontent: how did your cat accept the last food you gave to it. Then you can see the new listitem on the according voting page. The data is stored in the local storage of your browser, so the app will (most probably) not loose them, when you reload or re-open the app. Cats don't change their mind so often, but maybe you want to remove an item from one of your lists nevertheless. You can do this with a click of the bin in the upper right corner of each listed card.  
There is a searchbar in the list of not liked food, so you can search for catfood (you have already added) with its name, taste or its preparation without scrolling along the whole list. On the page with the list of cat food your cat like I have added a function to sort the listitems according to key words, also used in the form (as i added the date later, this item cannot get sorted at the moment). Informations about your cat you can add to the profile page including a picture upload. For more informations about cat breeds you can use the cat info page clicking on the little cat in the right bottom corner.

LandingPage  
Photo by [Charlie Deets](https://unsplash.com/@charliedeets?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/@charliedeets?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) - many thanks for that awesome picture :sparkles:

As the design goes with "mobile first" you will have to use your mobile in portrait orientation to get the full effect of that image.

### Deployment

You can have a look at the last update of CatYummy on Vercel: [DemoVersion](https://capstone-project-catyummy.vercel.app/)

### Tech Stack

- [React](https://reactjs.org/) - [React Docs BETA](https://beta.reactjs.org/)
- [React Router](https://reactrouter.com/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) / [Jest](https://jestjs.io/)
- [Storybook](https://storybook.js.org/)
- [styled components](https://styled-components.com/)
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript#tutorials)
- [npm](https://www.npmjs.com/package/npm)
- [axios](https://axios-http.com/)
- [nanoid](https://www.npmjs.com/package/nanoid)
- [Vercel](https://vercel.com)

### Project Setup

you can clone this repository  
exit `npm install` in the terminal to install all the files and dependencies the app needs to run

`npm start` runs the app and opens http://localhost:3000 to view it in your browser. Or you will be asked to confirm another port if this one isn't available.

`.env.local` API_KEY=example123456-3456similar You need this file with an api_key from [The Cat API](https://thecatapi.com/) for the CatInfoPage, please check whether you have added `env.local` in your `.gitignore`
