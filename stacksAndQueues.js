// STACK IMPLEMENTATION
class Stack {
    constructor() {
      this.items = []
    }
    push(item){
      this.items.push(item)
    }
    pop(){
      return this.items.pop()
    }
    peek(){
      return this.items[this.items.length - 1]
    }
    isEmpty(){
      return this.items.length === 0
    }
}

// this function will take in a string as input
// it will return true or false based on whether the brackets are properly matched
// the valid brackets it will scan for are {}, [], and ()
// you must use a Stack in your implementation of this function
// refer to the bracket matching readMe.md for more details

function bracketMatching(input){
  let matchBool = true;
  let bracketStack = new Stack()
  for (let i = 0; i < input.length; i++)
    if (input[i] == "{" || input[i] == "[" || input[i] == "(") {
      bracketStack.items.push(input[i])
    } else if (input[i] == "}") {
      if ((bracketStack.items.pop() == "{") == false) {
        matchBool = false
        return matchBool
      }
    } else if (input[i] == "]") {
      if ((bracketStack.items.pop() == "[") == false) {
        matchBool = false
        return matchBool
      }
    } else if (input[i] == ")") {
      if ((bracketStack.items.pop() == "(") == false) {
        matchBool = false
        return matchBool
      }
    }

    if (bracketStack.isEmpty() === false) {
      matchBool = false
      return matchBool
    } else if (bracketStack.isEmpty() === true) {
      matchBool = true
      return matchBool
    }

    return matchBool
  // could only push open brackets, then pop if input[i] is closing and compare with conditionals if they don't match set false. if you finish
  // stack and .isEmpty() is true, then return true
}


class Node{
    constructor(data, priority){
        this.data = data;
        this.priority = priority;
        this.next = null;
    }
}

// This priority queue is implemented as a Linked List
// Your challenge is to implement the insert method of the priority queue
class priorityQueue{
    constructor(){
        this.head = null;
    }
    enqueue(data, priority){
        // Insert the new data into the proper place in the queue
        // the lowest priority number should be the head node
        // ********THESE INSTRUCTIONS ARE DIFFERENT THEN TEST *********
        // the priorities should remain in order
        // if two nodes have the same priority, put the new one first

        // console.log(`current data is: ${data} and current priority: is ${priority}`);

        //make new node with data, priority
        const newNode = new Node(data, priority)
        // console.log(`newNode is currently :::: ${newNode} with data: ${newNode.data} and priority: ${newNode.priority}`);

        //If empty list or newNode.priority is less than this.head.priority
        if (!this.head || newNode.priority <= this.head.priority) {
          let currentHead = this.head
          this.head = newNode
          newNode.next = currentHead
          return
        }
        // ABOVE HANDLES BELOW CODE:
        // if newNode.priority <= this.head.next
        //    { set this.head to newNode and this.head.next to newNode.next}
        // else if (!this.head.next) {
        //   this.head.next = newNode
        // }

        // if neither,
        //    walk down list compare priorities
        //    if newNode.priority <= walker priority, safely enter newNode into list handling pointers
        let walker = this.head

        while (walker.next && walker.next.priority < newNode.priority) {
          walker = walker.next
        }

        let temp = walker.next
        walker.next = newNode
        newNode.next = temp

    }
    peek(){
        // return the highest priority node in the queue

        //instructions are confusing. if priority is 1
        //  it seems they mean 1 is higher priority than 3...
        return this.head
    }
    dequeue(){
        // remove and return the highest priority node in the queue

        //if at beginning of linked list
        let currentHead = this.head;
        let newHead = this.head.next;
        currentHead.next = null;
        this.head = newHead;
        return currentHead;
    }
}

module.exports = {
    bracketMatching,
    priorityQueue
}
