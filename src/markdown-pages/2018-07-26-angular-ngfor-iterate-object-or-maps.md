---
path: "/blog/angular-ngfor-iterate-object-or-maps"
title: "Angular - ngFor iterate object or Maps"
date: "2018-07-26"
featuredImage: "../images/2018/07/forLoop.jpg"
type: "blog"
---

Sometimes you got an object or a maps and you want to iterate it with an ngFor but until today it was impossible to do without implementing your custom pipe or use some nice library. Today angular release a new version 6.1 and looking on the [release notes](https://github.com/angular/angular/blob/master/CHANGELOG.md) I found a nice feature that has been added:

common: introduce KeyValuePipe (#24319) (2b49bf7)

Using this new pipe is quite easy and straightforward. Our template will look something like that:

\[gist id="d8c14ede5a99a0ec3e8fe5023de400b7"\]

As you can see the only new thing we added is the **keyvalue** pipe at the end of our ngFor.

The component instead will be something like that:

\[gist id="20124dad9b936ae667ebac000dfb8639"\]

If you need this feature go on and update your angular dependencies to 6.1.

If you enjoyed this post leave a comment and follow me on twitter [@DZurico](https://twitter.com/DZurico?lang=en)
