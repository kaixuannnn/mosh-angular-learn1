1. App Component

- In order for you to pass properties from parents to child, you need to use Input decorator in order to perform properties binding
- Input - to pass state to component
- Output- to raise event from custom component,
- @Input('is-favourite') - we can use alias to change the input name on template

2. ngcontent

- If we want to create an reusable component, we can use ng content
- If we want to render something without putting it inside a div or other kind of html elememt, we can use `ngcontainer` mark up

3. Directives

- Structural - modify the structure of the DOM
- Attribute - modify the attributes of DOM element

4. \*ngIf, hidden

- The difference between 2 of them is, when ngIf is evaluated as falsie, the element is removed from the dom
- whereas when you use hidden attribute, the element is just display: hide

5. \*ngSwitch

- \*ngIf evaluate booolean, whereas ngswitch evaluate string

6. \*ngFor

- when we render a list of dom, a new list is rerender. Sometimes, the content of the list are the same, however angular will treat it as a new list
- therefore, we can use TrackBy event from ngFor to track the object, code added show how we track the list by its id, and now the course id is track, list is no more render when we load the list

7. ngClass

- ngClass we use to render a class based on some expression
- same as how it works as classbinding
