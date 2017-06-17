import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
    <h1>Hello {{title}}!</h1>
 
  `,
    styles:['h1 {color:blue;}']
})
export class AppComponent {
    public title = "ANGULARJS 2"

}