# Angular 2

Following the course **Getting Started with Angular 2+**

https://school.scotch.io/getting-started-with-angular-2


## Structural Directive

```javascript
*ngFor="let user of users"
*ngIf="users"
```


## Putting Info Into a Component

```javascript
@Input()
```


## Bindings

### Property Binding - `[]`

Data flows INTO it one-way

```javascript
[class.active]="user === activeUser"
```

### Event Binding - `()`

Data flows OUT OF it one-way

```javascript
(Click)="selectUser(user)"
```

### Two-Way Data Binding - "The Banana in a Box"

```javascript
	[(ngModel)]="activeUser.name"
```


## Links

Style Guide - https://angular.io/docs/ts/latest/guide/style-guide.html
