---
path: "/blog/apollo-server-2-0-auth-with-google-signin"
title: "Apollo server 2.0 - auth with Google signIn"
date: "2018-06-10"
featuredImage: "../images/2018/06/apollo-google-sign-in.jpg"
---

In the [first post](http://www.dzurico.com/apolloserver-2-0-how-to-create-a-graphql-server/) we set up an apollo server but we didn't talk about **authentication** and **authorisation** so today let's step further using google-sign-in as identity server. What we want to achieve is something like that: ![](http://www.dzurico.com/wp-content/uploads/2018/06/apollo2-google-auth.jpg) The client will login with google, will send the token to our server that, using a google library, will decode it. In case the authentication fails we'll return an unauthorised message to the client, otherwise will check in our db if the user is present. If present, we'll return back to the client the user fetched from the db otherwise we'll store the new user and we'll return it to the client. Before starting we need to setup our google-sign-in api: 1. Go to the [Google API Console](https://console.developers.google.com/projectselector/apis/library?supportedpurview=project); 2. From the project drop-down, select an existing project, or create a new one by selecting Create a new project; 3. In the sidebar under "APIs & Services", select Credentials, then select the OAuth consent screen tab; 3.1. Choose an Email Address, specify a Product Name, and press Save; 4. In the Credentials tab, select the Create credentials drop-down list, and choose OAuth client ID; 5. Under Application type, select Web application Register the origins from which your app is allowed to access the Google APIs, as follows. An origin is a unique combination of protocol, hostname, and port; 5.1. In the Authorized JavaScript origins field, enter the origin for your app. You can enter multiple origins to allow for your app to run on different protocols, domains, or subdomains. You cannot use wildcards. In the example below, the second URL could be a production URL;

http://localhost:8080
https://myproductionurl.example.com

5.2. The Authorized redirect URI field does not require a value. Redirect URIs are not used with JavaScript APIs; 5.3. Press the Create button; 6. From the resulting OAuth client dialog box, copy the Client ID. The Client ID lets your app access enabled Google APIs.

Now we can move back to our server project and we can install _google-auth-library_:

npm install --save google-auth-library

In our _server.ts_ file we need to import it:

import schemas from "./schemas/schema";
export const CLIENT_ID = "YOUR_CLIENT_ID";
export const client = new OAuth2Client(CLIENT_ID);

Google will give us some information of the user (if the token is valid) such as:

- email
- name
- picture
- given_name
- family_name
- locale

So the best thing to do is to create a UserSchema with these fields for our mongo db. Open _models/user.ts_ : \[gist id="a553d0fef54f501cbbd99737fe4850f6"\]

We can move on our graphQl schema and resolver. In _schemas/user.schema.ts_ we need to add our new "endpoint" called "_validateUser_" (**line 12**): \[gist id="79ed2ba391f17b6e51c04553d0405bde"\]

In _resolvers/user.resolver.ts_ we need to implement it (**line 12**): \[gist id="66d0c510b8c75b6e8052ed6b54d6c1a6"\]

The last missed piece is the userController that will implement the steps described at the beginning of the post: \[gist id="ed21bea7fd193d58c5b2394e98cc69ba"\]

1\. We first check if the token is valid otherwise we return authorised false (**9-11**); 2. We \`verifyGoogleToken\` (**line 29-34**) and in case it is valid it will return a payload with all the user information; 3. We check if the user exists in our database (**line 20-22**); a. If it does, we return it to the client (**line 15**); b. If it doesn't, we store the user in our db (**line 23-27**) and we return it (**line 17**);

We're ready to restrict the access to same endpoints. For example we don't want that the client being able to retrieve all the users if is not logged in. To achieve that we need to perform 2 changes and we ready to go.

Open \`_server.ts_\`: \[gist id="5965a7effdf056436199e078f5ee7894"\]

The only change we made is from line **31 to 37** adding the context property that will perform exactly the same steps we did before and will return authorised true or false.

The last change is in the _user.resolver.ts_: \[gist id="65c393a1cee0ce8b3adc17fb6336ec8f"\]

1\. At line 7 we have added an extra parameter called context; 2. In case the user is not authorised (**line 10-12**) we throw an error to the client; 3. If everything is good we return all the available users to the client.

# Resources

\- https://developers.google.com/identity/sign-in/web/backend-auth - https://www.apollographql.com/docs/guides/access-control.html#context

## Stay Tuned

In the next section we'll try to add realtime data :)

If you enjoyed it please follow me on twitter [@DZurico](https://twitter.com/DZurico)
