---
path: "/blog/ngrx-from-0-to-expert-with-the-official-doc"
title: "ngrx from 0 to expert with the official doc"
date: "2018-06-22"
featuredImage: "../images/2018/06/ngrx-platform.png"
---

When I start to learn something new I use to read the blog from the community and related video from the conferences but I'm always wondering if I'm doing correctly and if I'm following the best practice so this time I decided to follow a different approach and start directly from the official repo [ngrx-platform](https://github.com/ngrx/platform). Surprisedly I found there's a complete [example-app](https://github.com/ngrx/platform/tree/master/example-app) and is quite complex and well done, so I decided to have a look on it. As a good scholar I started copy paste code until I realised that I was missing most of the import things so with a bit of initial frustration I said: **ok let's start from scratch and replicate everything in a pragmatic way**. The step I followed are:

1. create a branch contains the project folders, the routes and some pipes;
2. create auth branch setup the authentication and the guards;
3. setup ngrx (dependencies and base modules) using schematics;
4. setup ngrx for the core module;
5. setup ngrx for the books module;
6. setup ngrx for the auth module;
7. setup @ngrx/db with the provided schema and makes the Database service available.

I don't want to explain everything from scratch here because I'm sure that you (like me at the beginning) will miss the best part so I chosen to provided a repo: [https://github.com/daniele-zurico/ngrx-best-practice/tree/master](https://github.com/daniele-zurico/ngrx-best-practice/tree/master) organised by branches that perform all the steps that I described before. In each branch I added a readme file that explain what I did and some images to explain the infrastructure and the folder organisation.

I recommend to recreate your empty project and go step by step and at the end you'll realise that is worth it give a try.

Here the live [demo](https://stackblitz.com/github/daniele-zurico/ngrx-best-practice/tree/ngrx-db) **(user: test, pwd: test)**

If you enjoyed this post follow me on twitter [@DZurico](https://twitter.com/DZurico) and let me know if you find it useful or not ;)
