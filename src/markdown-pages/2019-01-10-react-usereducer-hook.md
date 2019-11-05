---
path: "/blog/react-usereducer-hook"
title: "React - useReducer the new amazing Hook Redux style"
date: "2019-01-10"
featuredImage: "../images/2019/01/react-hook.jpg"
---

Is almost 1 month that I'm using hooks and I can say that they're really cool and they reduce the amount of code without loosing any functionality. My code now is only based on functional component and no class (at the moment) are required. There is one hook that I didn't realise how beautiful and powerful is and this is what I want to show you today:

useReducer

UseReducer is an alternative to useState. It Accepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method. If your mind is thinking about redux yes it's right this is exactly the same behaviour.

const \[state, dispatch\] = useReducer(reducer, initialState);

To clarify better how we can use useReducer let's implement a todoList that allow us to add and remove item. For luck of simplicity I'll not use any style so our final result will not look pretty but feel free to add all the style you want.
React today release a new version **16.8.0-alpha.0** and if you want to use hooks you need to change your package.json:

"react": "16.8.0-alpha.0",
"react-dom": "16.8.0-alpha.0",

Let's start our Todo component:

https://gist.github.com/daniele-zurico/83be5492c8b76549983ce078a69a865b

Our first version of todo allow use to add a new todo in our list but what about if we want to remove one item? Well we can still use useState and instead to add the value in our todoList we can simply filter to remove it and if we want to edit or perform other operation? You can easily understand that the code will become more hard to read and we'll have different point in our component where we need to add the logic. This is where \`useReducer\` will come and help us reducing complexity and cleaning up our code.

We need to create our \`todoListReducer\`:

https://gist.github.com/daniele-zurico/523abe03fb05237b232c3e34334df779

here we're just managing add and remove but feel free to add more state on it.
The next step is to include our new hook with the todoListReducer. We need to create:

const \[todoList, dispatch\] = useReducer(todoListReducer, \[\]);

Now we can finally use it:

dispatch({ type: "ADD", value: todoName });

This is the final code:

https://gist.github.com/daniele-zurico/dcfe43771bb3fec51189d40d009521b7

If you find something not correct please feel free to comment below.

Follow me on twitter [@DZurico](https://twitter.com/dzurico)
