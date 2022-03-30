# CatYummy

## Capstone Project of the IT bootcamp at neuefische

CatYummy allows you to track your cat's decisions about its food preferences. After adding the food your cat likes or dislikes, CatYummy will store this information in its database. This will save you from trying to remember which food your cat has already tested. CatYummy will save your money, help reduce waste and will make your cat happier.

CatYummy is under construction.

From the homepage, the most important features are just one click away without any login, giving a better user experience while you're shopping. With just a few extra clicks you'll have access to even more features. To leave the app there is a button (cat nearby an open door) on all main navigation pages in the upper right corner.

A good start is the form to add an entry about how your cat responded to the last food you gave it. Then you can see the new listitem on the voting page. The data is stored in the local storage of your browser, so the app will (most probably) not lose them, when you reload or re-open the app. Cats don't change their mind so often, but maybe you want to remove an item from one of your lists nevertheless. The app allows you to do this with a click of the bin in the upper right corner of each listed card.

There is a search bar in the list of disliked food, so you can search for cat food (you have already added) with its name, taste or its preparation without scrolling along the whole list. On the page with the list of cat food your cat likes I have added a function to sort all the listed entries according to key words that are used in the form. The app can be customised to include information about your cat in the profile page including an option to upload a photo. For more information about cat breeds you can use the cat info page you can reach from the profile page.

LandingPage  
Photo by [Charlie Deets](https://unsplash.com/@charliedeets?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/@charliedeets?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) - many thanks for that awesome picture :sparkles:

As the design goes with "mobile first" you will have to use your mobile in portrait orientation to get the full effect of that image.

### Deployment

You can have a look at the last update of CatYummy on Vercel: [DemoVersion](https://capstone-project-catyummy.vercel.app/)

### Tech Stack

- [React](https://reactjs.org/) - [React Docs BETA](https://beta.reactjs.org/)
- [React Router](https://reactrouter.com/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) / [Jest](https://jestjs.io/)
- [React Hook Form](https://react-hook-form.com/)
- [Storybook](https://storybook.js.org/)
- [styled components](https://styled-components.com/)
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript#tutorials)
- [npm](https://www.npmjs.com/package/npm)
- [axios](https://axios-http.com/)
- [Cloudinary](https://cloudinary.com/home-3722)
- [nanoid](https://www.npmjs.com/package/nanoid)
- [The Cat API](https://thecatapi.com/)
- [Vercel](https://vercel.com)

### Project Setup

you can clone this repository  
exit `npm install` in the terminal to install all the files and dependencies the app needs to run

`npm start` runs the app and opens http://localhost:3000 to view it in your browser. Or you will be asked to confirm another port if this one isn't available.

`.env.local` API_KEY=example123456-3456similar You need this file with an api_key from [The Cat API](https://thecatapi.com/) for the CatInfoPage, please check whether you have added `env.local` in your `.gitignore`
