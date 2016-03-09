Stack = function(){
  this.stack = [];
}

Stack.prototype.peek = function(){
  return this.stack[this.stack.length - 1]
}

Stack.prototype.push = function(element){
  return this.stack.push(element)
}

Stack.prototype.pop = function(){
  return this.stack.pop()
}

stack = new Stack();
stack.push(3)
stack.push(4)
stack.push(5)
stack.pop()
console.log(stack.peek())
console.log(stack.pop())
console.log(stack.push(12))
console.log(stack.peek())