## HTML within an element  ##
### .html(_value_) ####  
setter - _chainable_ | getter - _String_  
Sets or gets inner HTML of selected elements.

---
### .text(value)
setter - _chainable_ | getter - _String_  
Sets or gets text of selected elements. HTML tags are filtered out.

---
## Classes
### .hasClass(_className_)
_Boolean_  
Returns `true` if _any_ selected element has _className_  
If _className_ is omitted then returns `true` if  _any_ selected element has at least one class.

---
### .setClass(className)
_chainable_  
Sets _className_ to selected elements as the _only_ class. All other classes are removed.

---
### .addClass(className)
_chainable_  
Adds _className_ to selected elements.

---
### .removeClass(_className_)
_chainable_  
Removes _className_ from selected elements.  
If _className_ is not passed then all classes are removed form the selected elements.
