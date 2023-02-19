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
