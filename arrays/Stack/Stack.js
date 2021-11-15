function stack() {
  this.datastored = [];
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.top = 0;
  this.clear = clear;
  this.length = length;
}
// pushing an eleement in the stack
function push(element) {
  this.datastored[this.top++] = element;
}
function peek() {
  return this.datastored[this.top - 1];
}
// popping an element from stack
function pop() {
  return this.datastored[--this.top];
}
function clear() {
  return (this.top = 0);
}
function length() {
  return this.top;
}
var s = new stack();
s.push("david");
s.push("Anshuman");
s.push("debkumar");
s.push("Pritam");
console.log(s); //output 1
var popped = s.pop();
console.log(popped); //output 2
console.log(s.peek()); //output 3
console.log(`the length of the stack ${s.length()}`); //output 4
s.clear();
console.log(s); //output 5
