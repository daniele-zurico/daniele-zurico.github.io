---
path: "/blog/react-useref-hook"
title: "React - useRef Hook"
date: "2019-01-16"
featuredImage: "../images/2019/01/REF.png"
---

If you already read my previous [post](https://www.dzurico.com/react-usereducer-hook/) we talk about how to create a simple todo with _useState_ and _useReducer_. Today we'll see how we can use **useRef** to refer to our element.

**UseRef** returns a mutable ref object whose _.current_ property is initialised to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.

const refContainer = useRef(initialValue);

To clarify better how we can use useRef we take the previous example and we'll apply the required changes. React few days ago release a new version 16.8.0-alpha.0 and if you want to use hooks you need to change your package.json:

react": "16.8.0-alpha.0",
"react-dom": "16.8.0-alpha.0",

In the previous [post ](https://www.dzurico.com/react-usereducer-hook/)the result was:

https://gist.github.com/daniele-zurico/dcfe43771bb3fec51189d40d009521b7

We honestly don't need to perform too many changes but let's do it togheter:

- The first thing we need to do is to declare our **useRef** element:

const todoInputRef = useRef("");

- Now we need to use todoInputRef and for that we'll change our input:

input type="text" placeholder="Todo" ref={todoInputRef}

As you can see we removed the value and the onChange handler.

- In our todoAddHandler we'll extract the value using our todoInputRef:

const todoAddHandler = () => {
const todoName = todoInputRef.current.value;
dispatch({ type: "ADD", value: todoName }); };

This is the full code:

https://gist.github.com/daniele-zurico/ca46a2aaba159e96062ac0f4711ec336

If you interested on hooks I wrote two other posts:

- [useContext;](https://www.dzurico.com/react-compound-components-with-usecontext-hook/)
- [useReducer.](https://www.dzurico.com/react-usereducer-hook/)

If you find something not correct please feel free to comment below.

Follow me on twitter @DZurico
