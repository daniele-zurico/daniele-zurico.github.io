---
path: "/blog/angular-ngrx-with-schematics"
title: "Angular ngrx with schematics"
date: "2018-06-19"
featuredImage: "../images/2018/06/anguar-ngrx.jpg"
---

I found ngrx one of the really cool things that has been added in the Angular universe and I tried to use it as much as I can from the [really beginning](http://www.dzurico.com/ngrx-store/). The biggest problem I had all the time I started a new project was to set up the envirornment and the boilerplate that I have to copy paste all the time so I ended up to not using it a lot being conscious that is really cool and use-full to use. Yesterday however on twitter I saw the twit from **@ngHouston** about NgRx Schematics with Vitali Borov and despite it's a really great video I got slightly confused so I decided to write down all the step that he did and finalise the StarWars example :)

As usual the first thing we need to do is setup our project with cli and install all the dependencies:

ng new swkb -p=swkb --style=scss
ng add @angular/material

We'll generate all the modules and components we need to use:

ng g module heroes
ng g component heroes/hero-list
ng g component heroes/hero
ng g interface heroes/models/Hero
ng g service heroes/swapi

We Include the HeroModule and MatToolbarModule (from material) in the **app.module.ts**:

imports: \[
...
MatToolbarModule,
HeroesModule
\],

We Change the **heroes.module.ts**:

- import same material modules;
- add the provider SwapiService;
- export the component HeroListComponent.

\[gist id="55cd0702ebb3ef784cee5eee0863a2af"\]

and we remove the \`root\` from the **swapi.service.ts** because we want it available just in our module:

@Injectable()

It's always good practice to define an interface that define our data structure. We implement the interface **model/hero.ts** in modules: \[gist id="ed0c7a2aa10005e8e23a5653d877f86b"\]

We pass the hero list as input in **hero.component.ts**:

@Input() hero: Hero;

And some good UI to display all we want - **hero.component.html**: \[gist id="22b1abb0499229adf72bd615dbd61203"\]

Is time to move to our list component that will display the list of hour star wars heroes: \[gist id="040be91518086f52f1f49d8e1660fb3c"\]

Define hero-list.component.html: \[gist id="3a60d3e993a0e86e567706f8e7819e98"\]

The **swapi.service.ts** will display the list of heroes fetching the data from the public api \`https://swapi.co/api/\` : \[gist id="3c32bcd762d0d4d889b6e1ee284568d1"\]

Finally we open **app.component.html** and replace the content as follow: \[gist id="a8cfae3babd2f28d2a6b7ca8af715981"\]

Our scaffolding is done if we run **ng serve** we should see the toolbar and the prev and next button. Now is time to add **@ngrx** and use the schematics provided by **@angular/cli**.

yarn add @ngrx/{store,effects,entity,store-devtools}
yarn add -D @ngrx/schematics

One really cool command is the follow:

ng config cli.defaultCollection @ngrx/schematics

It will extend the base behaviour of cli, so, instead of typing

ng g @ngrx/scchematics:store

we can type:

ng g store

It will add at the end of angular.json:

"cli": {
"defaultCollection": "@ngrx/schematics"
}

Let's use now the cli to generate our **ngrx** stuff for us: 1)

ng g store State --root --module=app.module.ts

will generate a reducer (State) and will setup our app module to use **ngrx**. If we open our **app.module.ts** will see : \[gist id="2b3d707671397ea9031bdd0213b408b3"\] 2)

ng g effect App --root --module=app.module.ts

that generates the **app.effects.ts** and will include it in our **app.module.ts** 3)

ng g feature heroes/Heroes --reducers=../reducers/index.ts

will generate actions,reducer and effects for the heroes. In the video Bobrov will show how to set up your schematics to generate also actions with the cli...I can say that is not so straightforward so I'll do manually but if you interested on it have a look on the video linked at the end of the post to see how he does it. Our schematics have pretty much setup everything for use, so we just need to implement the code to make everything working correctly.

1. We start from the heroes.actions.ts defining 3 action for Fetch, Success and Error and one to paginate(prev, next): \[gist id="4ca73a71105e8977e22959bdc83fac1e"\]

2. We implement the reducer (heroes.reducer.ts):

2.1) We describe what our state will contain \[gist id="b099c5af03ffb937d35d7b080d87114e"\]

2.2) The initial state: \[gist id="e87016f242ad8c7ec02cf640cc20dd1d"\] 2.3) How we behave when we'll receive a specific action (FetchHeroes, FetchHeroesSuccess, FetchHeroesError, ChangePage): \[gist id="074271cbf7acfb9872f9ec1f1aed8b0e"\] 3)In the heroes.effect.ts we'll fetch the heroes from the service and we paginate the results \[gist id="2ac60285a179abaeabf5dc01875d88e9"\] 4) in the file reducer/index.ts we export all the selector we created: \[gist id="05861dd9291035e76be2f5a0513a7c8a"\] Last but not least we need to use them in our hero-list component.

In the module: 4.1) in the heroes.module.ts we need to import our effects:

EffectsModule.forFeature(\[HeroesEffects\])

In the hero-list.component.ts and implement the methods that we defined at the beginning: 4.2) In the constructor:

constructor(private store: Store) { }

4.2) onInit we select from the store the current status of heroes, first, last and if isLoading and we dispatch the action to load the heroes: \[gist id="baa3b65186bf06a95ab624f645e10fd6"\] 4.3) on prev and next we dispatch the 2 actions: \[gist id="437c602d0943a6dcfc0b26cfcb748aee"\]

And voila' we implemented our star Wars hero list. If you get lost in some step this is the full repo(https://github.com/vitaliy-bobrov/ngrx-swkb)

If you enjoyed it follow me on twitter @DZurico.

## Resources

\- https://www.youtube.com/watch?v=qyymWyiZYNY&index=8&t=10s&list=PLzY4oXoQckIYIkysMNG1MwZE3MRoWZULx
