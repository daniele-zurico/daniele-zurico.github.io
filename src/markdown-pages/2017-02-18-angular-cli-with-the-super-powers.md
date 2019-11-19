---
path: "/blog/angular-cli-with-the-super-powers"
title: "Angular-cli with the super powers"
date: "2017-02-18"
featuredImage: "../images/2017/02/CLI-SuperPower.jpg"
type: "blog"
---

Angular-cli has simplified the life of a lot of developers reducing the startup time of a project and giving the ability to focus only on the code without wasting time in configurations.

However, a lot of angular developers (me included) were not able to use angular-cli because was not possible to change the configuration, adding new plugins or in general use all the flexibility that webpack offer.

Yesterday, after a long day while I was relaxing on the couch reading some news on twitter and boooom the twitter that I was waiting for months it's finally here: Angular-cli from version 32.3 has a new feature called **eject** that allow you to generate a webpack.config.js for your project.

Let's start from scratch following all the steps that we need to have this feature in place.

First of all we need to install angular-cli globally (for whom was already using it remember that it has changed name from angular-cli to @angular/cli) :

\[gist id="a26e1a9e5077eb72cad4ff4d53bd4944"\]

We're ready to generate a new project with the cli ( I like scss so I'll use it):

\[gist id="f9e6d0209355bccb7ef75485cb81d5e6"\]

Until now nothing new, we just created a normal project with scss support.... now be ready for the magic part.

Inside your project run:

**ng eject**

In your project you'll find finally the file that you were dreaming for a long time: **webpack.config.js** and you finally are free to add the plugin that you like.

Just because I was sceptical and I was not able to believe it, I tried to change some configurations and later install a plugin and trust me it works as a charm.

I installed _smart-banner-webpack-plugin and  _I just follow the plugin instructions:

npm install *smart-banner-webpack-plugin*

\[gist id="ed0fb0c0d52b72d03fa5d777499fbf58"\]

and running:

npm run build

the result of my bundle is:

\[gist id="f584c2ec9856a1b64bee0e5b703354dd"\]

So guys we don't have anymore excuses not to use this awesome tool and we have to say thanks to the great jobs that people like Brocco, Hansl and other 195 contributors are doing.

If you enjoyed this post follow me on twitter [@Dzurico](https://twitter.com/dzurico)!
