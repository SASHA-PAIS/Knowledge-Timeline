# Knowledge-Timeline

*"A simple website that displays a knowledge timeline using HTML, CSS and a snipit of JavaScript"*

## Tech Stack

- HTML
- CSS
    - Media Queries
- JavaScript

## Installation

Clone the git repository:

```sourceCode console
$ git clone https://github.com/SASHA-PAIS/Knowledge-Timeline.git

$ cd Knowledge-Timeline
```

## Design

![](docs/gif.gif)

### CSS 

- Custom variables are defined in the root scope.
- The central line is created using li item.
- CSS transitions and transform property is applied.
- nth child pseudo class selector is used to add the boxes on alternate sides of  the central line.
- Dots are made using the 'after' psuedo selector on the li 
- Arrows are made by manipulating the border of the boxes (div)
- Media queries are added to make the website responsive.


![](docs/gif2.gif)


### JavaScript 

It basically helps to add the transition of the box entering only when it is in the viewport, by adding the show class. 

It gets all the list items inside the div with id *timeline* and loops through all of them.

While looping, it checks if the list item is in the viewport. If it is, then a class called show is added to that list item.

The run method is fired when:
- The page loads
- If the browser is resized
- If we scroll down


## Acknowledgement

- https://cdnjs.com/ to obtain the link tag for fontawesome (icons)
- Tips used from Brad Traversy - Udemy
