Introduction about CSS
-------------------------------------
Q. What is mean by CSS?
------------------------------
1. CSS stands for cascadeing Stylesheet programming language.
2. It is used for to make the pages more attractive.
3. CSS can be used for make the pages responsive, for this we can use media queries.
4. By using single css file we can control all the pages.
6. The css was developed by Hackon Lie in 1995.
7. The first CSS version that is called CSS Level1 was introduced in 1996.
8. The second version of css is called CSS Level2 was introduced in 1998.
9 In 2009, the CSS version called CSS3 was launched in market.

Unknown Author
Def : CSS is the beautiparler for the html element.

Q. What are the different types of CSS?
----------------------------------------------------
1. Internal CSS : Single page application(SPA)
2. inline CSS : This css can be used with inside html elements.
3. external css : This is most commonally used format. This single file control all the html pages. One   change can affect all over the pages.

Note: file extension of css is .css

padding: inside the space of border.
padding-top
padding-right
padding-bottom
padding-left


margin : outer space of border.


selector :
--------------
Selector is nothing but it is a targetting element.

Types of selectors:
-----------------------
1. id  : # unique
2. class : .
3. group selector
4. tag selector : img, p, h1 to h6, <span></span>
5. tag + class selector
6. universal selector : *

how to define variables in css?
---------------------------------

Layout desgin by using float
By using only 10 properties
1. width
2. height / min-height
3. border
4. background-color
5. float : right, left
6. font-size / font-family
7. margin / padding
8. color
9. text-decoration
================================================================================
background
----------------------
1. background-color:
--------------------------
1. by providing direct color name
2. by using hexadecimal color codes --> we create 16lac color codes
3. by using rgba values

The background-color has one drawback you use only one color at a time.
But my requirement is i want to use multiple color at a same time.



2. background-image:
---------------------------------
1. To take the image on UI.
2. To use multiple colors at a same time in css we use inbuilt function called as 
    linear-gradient()

Synatx:
---------------
linear-gradient(direction, colors)
direction --> to right, to left, to bottom, to top and you can also pass degree.



Position:
----------------------
By default all html element are in static nature.
Suppose i want to move static element there are two possiblites 
a) by using padding and margin.
b) by using position property

We can move the element by using some css poperties such as,
1. top
2. right
3. left
4. bottom
5. z-index



1. absolute --> variable
2. relative --> constant
3. fixed
4. sticky
5. static --> by default all html element has default position as a static.



display:
--------------------------------
1. display: block , inline, inline-block, flex, grid, table, list

Q. What is mean by flex?
------------------------------------
Flex is nothing but it is magic box in which the html element automatically expand
when you add some element into it or automatically shrink when delete some element
from box.

There is one drawback of flex, flex can work on only one direction at a time.
That is either in row direction or in column direction.

Terms
--------------
flex-container
flex-items

when you use display:flex than all the elements arranged in row direction.

You dont need use float properties.


Q. What are the different properties of flex?
--------------------------------------------------------
1. display: flex
2. flex-direction : row, column, row-reverse, column-reverse
3. flex-wrap: no-wrap, wrap, wrap-reverse
4. justiy-content : Basically this property work in horizantal direction.
                    a) start
                    b) center
                    c) end 
                    d) space-between
                    e) space-around
                    f) space-evenally


5. align-items : Basically this property can work on vertical direction.
                    a) start
                    b) end
                    c) center
                    d) stretch

6. order:
---------------------
Order properties can be used for to manage the location of divs.
We pass order either as negative value or as positive value.
Example:
---------------
order:1
order:-1

7. flex-grow:
------------------
This property cover the remaining space, and equally divide the width within the elements.
You can also target single element by passing flex-grow as 2, 3, 4...

8. flex-basis:
-----------------------
