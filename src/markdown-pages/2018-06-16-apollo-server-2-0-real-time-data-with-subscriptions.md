---
path: "/blog/apollo-server-2-0-real-time-data-with-subscriptions"
title: "Apollo server 2.0 - real time data with subscriptions"
date: "2018-06-16"
featuredImage: "../images/2018/06/apollo-stream.jpg"
---

In the [previous post](http://www.dzurico.com/apollo-server-2-0-auth-with-google-signin/) we set up our server using google-sign-in as identity server and we restricted access to the authenticated users. Today we'll add real-time update thanks to **GraphQL subscriptions**. The scenario we'll implement is quite easy: we want to see in real-time when a new post is added to our list.

The first thing to do is to define the schema of our database creating the file **posts.ts** with author and comment: \[gist id="599f866262ac9cc7aa8babf39a1656bc"\]

After that we need to create the GraphQL schema **post.schema.ts**: \[gist id="5549040ef27e5ab7025cfdb9204739a4"\]

We defined: - a query to retrieve all the posts (line **11**); - a mutation to store a new post (line **14**).

The resolver that implements all the functionalities **post.resolver.ts**: \[gist id="13a620013c546f38d0f8740b3ac9a173"\]

The controller "**post.controller.ts**" that will interact with our mongoDb: \[gist id="77030b30c751bea38e47a1c7cbb0dacc"\]

Our setup is completed and it's time to add real-time data. Apollo Server 2.0 supports GraphQL subscriptions without additional configuration or packages.

In the **post.schema.ts**: \[gist id="d80dbdd04840ad9f6a2f5ded7025bb84"\] We added **line 20-22** where we expect to receive all the new posts that are added and the related controller **post.controller.ts** that will interact with our mongoDB: \[gist id="efdb6c090ae8bf9073352f8424b5af86"\]

We added: - **line 19** to publish the new change; - **line 7-11** to add the subscription.

One small thing that makes me struggle quite a lot is the **server.ts**. In case you have defined a context remember to add: \[gist id="ff53e986163a71b284efecf40db6800c"\]

As you can see **Apollo Server 2.0** allows realtime data without invasive changes to existing code. For a full working example please have a look to [this repo](https://github.com/daniele-zurico/apollo2-subscriptions-how-to).

@Update I'm proud to say that I wrote as well the documentation for subscriptions in the official doc of apollo and the repo I've create is [linked](https://www.apollographql.com/docs/apollo-server/v2/features/subscriptions.html) there too!

If you enjoyed this post follow me on twitter [@DZurico](https://twitter.com/DZurico?lang=en)
