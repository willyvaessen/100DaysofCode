# Welcom to Angular!

Angular is a framework that is used to create scalable web apps with dynamic
content that changes based on a user's interactions.

## What is Angular?

Angular is a development platform and framework.

A development platform provides a range of built-in tools to help you write, 
preview and deploy your projects.

A framework is a structure that you can build on top of and customize.

The three big benefits of Angular are:

    * You can build anything, from simple apps to larger systems
    * You can build faster and with fewer erros thanks to its tools.
    * Angular is actively maintained and has a lare community

Angular was created by Google and is used by thousands of successful brands from Xbox to HBO to BMW.


## Project: Initial Setup

As a practice project, I'm building a Notes app.

![img.png](img.png)


The header component has been created for you. Open the code and add an HTML < h1 > heading with the text 'My Notes' to the template of the header component.

Then, import the header component into the root component

Use the <app-header /> tag to reference the component from the root component, instead of the 'Hello from Angular!' heading

Awesome! Now you know how to create an app with routing! Here are the steps:

    Import the RouterModule from @angular/router
    Define the routes configuration array, in the format path: 'string', component: component class
    Launch the app with the routes config, using providers: [provideRouter(routes)]
    Define the links where applicable using the routerLink attribute.
    Use the <router-outlet /> element to display the component that corresponds to the path

In the next lesson, we will look at some extra configurations that we can do with routers.


Great job! You learned that…

⭐ The Angular Router provides all the necessary methods to set up your app navigation

⭐ You can set the default path using an empty set of quotes ''

⭐ Page titles are set using the title property

⭐ You can use a wildcard path ** for all URLs that are not matched

⭐ The order of the paths matters, as the router starts checking from the first URL and stops when a match is found

⭐ You can use the navigateByUrl() method of the router to navigate to a path programmatically




Deleting a note:


In note-detail.component.html add a button like this: 
<button (click) = "deleteNote()">Delete</button>, 

then in note-detail.component.ts, 
create a method like so: 
export class NoteDetailComponent 
{ router = inject(Router); 
activeRoute = inject(ActivatedRoute); 
id = Number(this.activeRoute.snapshot.paramMap.get('id')); 
note = NOTES.find((i) => i.id === this.id); 
deleteNote() { this.router.navigateByUrl(''); 
if(this.note){ let delNote = NOTES.indexOf(this.note, 0); NOTES.splice(delNote, 1); } } }
