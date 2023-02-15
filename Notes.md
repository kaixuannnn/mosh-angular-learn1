1. Components Learning

- create a component file, [function].component.ts,
- register in app.module.ts under declaration
- call it inside app.component.html

2. Create components shortcut command

- call `ng g c {function name}`
- it will automatically create css, html, spec.ts, and ts for us
- it also updated our app.module.ts

3. templates

- if we want to use the attribute in our DOM, we need to add an asterik\*

4. services

- we dont tightly couple the http request on the component class, component class should include the presentation logic instead of presentaion logic
- We should use dependency injection instead of create a new instance, as there is any chances on the instance constructor, we need to come back and change the instance one by one
- and we register our dependency injection in app.module.ts

5. servies shortcut

- `ng g s {function name}`
- Inside the boilerplate, we will see the Injectable decorator, we only need it when we have dependency on the constructor

6. Properties Binding Syntax

- `<img [src]='title'/>` the src is bind to title element,
- Normally we use string interpolation for the string inside an element <h2>{{title}}</h2>
- One way communication from component to DOM
- Anything that change in dom will not affected in component
