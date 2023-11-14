This is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Its a reusable table component in React that gets API invoice data and builds
the table according to the data. This is for a tech test and has taken me around
4 hours to complete.

## Getting Started

1. clone the main branch locally

In the project root directory,

2. install dependences by running `yarn`

3. run the following in terminal to get around CORS issues - this will open a
   new chrome window ready for http://localhost:3000 (This gets around CORS
   issue locally otherwise the api data will not be returned)
   
   `open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security`

   to solve the CORS issue correctly, we would need to update the server side to
   configure the backend to allow for Cross origin request

   Another way would be to make proxy server - simmilar to this link
   https://github.com/Rob--W/cors-anywhere


4.First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with the browser from
point 3. to see the result.

This project uses
[`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to
automatically optimize and load Inter, a custom Google Font.

