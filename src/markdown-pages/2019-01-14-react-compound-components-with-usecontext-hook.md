---
path: "/blog/react-compound-components-with-usecontext-hook"
title: "React - Compound components with useContext Hook"
date: "2019-01-14"
featuredImage: "../images/2019/01/context.png"
type: "blog"
---

If you are a React expert I'm pretty sure that you already heard about Compound components.

If you never heard about it, the best description has been given by **Kent C. Dodds**. He describes them as: **"Think of compound components like the _select_ and _option_ elements in HTML. Apart they don't do too much, but together they allow you to create the complete experience. The way they do this is by sharing implicit state between the components. Compound components allow you to create and use components which share this state implicitly."**

Today we want to do another step implementing **compound components with Hooks**, an upcoming feature that lets you use state and other React features without writing a class and more specifically with **UseContext** that lets you subscribe to React context without introducing nesting.

const context = useContext(Context);

It Accepts a context object (the value returned from React.createContext) and returns the current context value, as given by the nearest context provider for the given context.When the provider updates, this Hook will trigger a rerender with the latest context value.

To clarify better how we can use **useContext** let’s implement a simple tabPanel. For luck of simplicity I’ll not use any style so our final result will not look pretty but feel free to add all the style you want.

React few days ago release a new version **16.8.0-alpha.0** and if you want to use hooks you need to change your package.json:

"react": "16.8.0-alpha.0",
"react-dom": "16.8.0-alpha.0",

To impement our tabPanel we need:

1. Context;
2. TabSwitcher: the container;
3. Tab: the tab that allow use to switch between different content
4. TabPanel: the content of each panel.

We'll use it in that way:

https://gist.github.com/daniele-zurico/35237db3c83b12a24c44acd662e2ca01

- Let's start with our **context**:

const context = createContext({
activeTabId: "a",
changeTab: (id: string) => {}
});

our context accept an Object that tell'us which one is the active tab and allow us to switch between different tabs.

- **TabSwitcher** is a functional component that use **useState** and the **Provider**. With useState we'll set the active tab and we'll "store" the active one. It will accept props.children that give us the ability to "inject" whetever component or element we want:

https://gist.github.com/daniele-zurico/58f390762309a6608d15c52b9887657e

- **TabPanel** and **Tab** are quite similar they'll use **useContext**, the first one to decide if it need to be displayed or not, the second to switch between tabs.

https://gist.github.com/daniele-zurico/108cc245335781444f53946609c89244

our compound component now is finished and despite it will not look so pretty it does exactly what it's suppose to do allowing us to customise as much as we want.

For reference this is the full code:

https://gist.github.com/daniele-zurico/0071cfa2667bfd0d20cad5044a84f617

If you interested on the useReducer hook have a look on my previous [post.](https://www.dzurico.com/react-usereducer-hook/)

If you find something not correct please feel free to comment below.
Follow me on twitter [@DZurico](https://twitter.com/dzurico)
