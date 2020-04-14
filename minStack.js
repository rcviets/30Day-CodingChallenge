/*Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
 

Example:

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.*/

/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.minStack = [];
   this.container = [];
};

/**
* @param {number} x
* @returns {void}
*/
MinStack.prototype.push = function(x) {
   this.container.push(x);
   if (this.minStack.length === 0 || x <= this.minStack[this.minStack.length - 1]) {
       this.minStack.push(x);
   }
};

/**
* @returns {void}
*/
MinStack.prototype.pop = function() {
   var x = this.container.pop();
   if (x === this.minStack[this.minStack.length - 1]) {
       this.minStack.pop();
   }
};

/**
* @returns {number}
*/
MinStack.prototype.top = function() {
   return this.container[this.container.length - 1];
};

MinStack.prototype.getMin = function() {
   return this.minStack[this.minStack.length - 1];
}
/** 
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/