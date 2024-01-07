About Virtual DOM, React Fibre and reconciliation 

Read for depth
https://github.com/acdlite/react-fiber-architecture

React.createElement is used to createElement in frontend while at backend it creates a Virtual DOM.
So, there are 2 DOMs, one which the browser creates and second which React creates which is 
known as Virtual DOM.

Now, when an update in state comes through SetState and the whole app is re-rendered, the whole
DOM is repainted (that is why loading comes on screen). Now this process can become very bulky
and can slow the application. To optimize this process, React uses Fibre, which is an algorithm
which optimizes this process by smartly updating only selective parts of the application.

Scheduling is the process of determining when work should be performed. Like which part
needs to be updated first or which part needs to be updated after a pause.

We've established that a primary goal of Fiber is to enable React to take advantage of scheduling. Specifically, we need to be able to

1.  pause work and come back to it later.
2.  assign priority to different types of work.
3.  reuse previously completed work.
4.  abort work if it's no longer needed.

Now the algo Fibre works on reconciliation. 
The algorithm React uses to diff one tree with another to determine which parts need to be changed.
Like it allows React to differentiate between the trees of both DOMs and update only the 
selected delta parts evaluated by the algorithm.

