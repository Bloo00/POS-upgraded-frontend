# The Pos Upgrade System
--------------------------

## A web page for the resturant industry

We wanted a site where resturants could use so that the servers would not have to use an outdated pos system. We wanted the page to feel like any of the delvery apps you see on the app store to make usage easy and recognizable. The logic behind making the app for the customers to use was for customer accountablity and letting the customers have more inter personal time with thier server increasing tips and sastisfaction. 

### Language and tools JSX, React, Express, Css, Bulma templates




Options page for each menu item

## code snippet

### The function to change your options 
```jsx
onValueChange(event) {
        this.setState({
            flavor: event.target.value
        });
    }
formSubmit(event) {
    event.preventDefault();
    desertOrderArray.push(this.state.flavor)
    console.log(desertOrderArray)
}

```
saves the current state of the button press or each catagory and holds it till you press add.to cart

=======
### A button element
```jsx
<label>
    <input
        type="radio"
        value="chocolate"
        onChange={this.onValueChange}
    />
    chocolate
</label>
```

just a button that calls the function above when the value gets changed.
