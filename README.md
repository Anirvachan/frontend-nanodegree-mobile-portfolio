## Website Performance Optimization portfolio project

### Getting started

####Part 1: Optimize PageSpeed Insights score for index.html

#####Optimizations made:

1. Web font was moved to the bottom to increase speed. 

2. CSS was minified and inlined to eliminate render blocking.

3. Analytics script has been moved to the bottom of the page so that it won't block the DOM parser.

4. perfmatters.js minified and moved to the bottom of the page so that it won't block parsing of the DOM.

5. Images have been compressed using gulp-imagemin plugin.

####Part 2: Optimize Frames per Second in pizza.html

#####Optimizations made:
1. Replaced querySelectorAll by getElementsByClassName, and put it outside of the for loop. in randomPizzaContainer
   Since dx and pizza widths are the same for every pizza, they were moved outside the for loop.
   This eliminated Forced synchronous layout (which happens while modifying styles repeatedly, after laying them out. 
   
   ######Line 454

2. Replace querySelectorAll  by getElementsByClassName in items variable. 
   ######Line 513

3. Moved document.body.scrollTop to a variable called scrollTop so that it won't have to be repeatedly accessed inside the for loop. 
   ######Line 516

4. 5 phases are being repeatedly and unnecessarily calculated items.length times. Instead, we calculate them before hand and store them in phaseContainer. 
   ###### Line 521

5.  The pizzas while moving cause the entire page to be re-painted. To alleviate this, we move each pizza onto it's own layer.
	###### Line 531

6. 200 pizzas are clearly unnecessary. We see only ~24 pizzas on the screen at any given time. The loop is run over 24 pizzas only.
   ###### Line 555