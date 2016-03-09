# Definitions
## Data Structures

### Linked List
A linked list is a list of nodes. Each node only has access to the data that is stored in that individual node and a pointer to the next node in the linked list. Thus, the last node in the linked list will point to nothing.

Some linked lists have nodes that know not only the node that comes next, but the node that comes before them.

### Tree
I believe that it is a data structure that has nodes that can point to multiple other nodes. A node can only be pointed to by one other node. There will be one node at the top of the tree, and everything else will fall lower down the tree. Nodes know their own data, and what they reference, but I don't think they can know what referenced them.

### Trie
A trie is a tree where the keys are usually strings (single letters). The root is associated with an empty string. From what I understand, nodes don't have to have a value and often don't, they instead just have many keys, pointing to other possibilities.

Let's take an example of a dictionary that has the words bat, batter, and bar. The root node would have the key "b" that would point to a child node. This child node would have the key "a", that would point to another child. This child node would have keys "r" and "t". If "r" is followed, that child would not have any other keys, but would be associated with the value "bar". "t" would have value "bat", but would also have a key of "t", and this chain would continue until "batter" is spelled.

### Graph
A graph is a representation of relationships between different objects. The information in a graph can be stored as the verticies and the edges. Each point or individual object is a vertex. Edges are the connections between verticies. Data can be stored in something like this:
V = [a,b,c,d,e]
E = [[a,b], [a,c], [b,d], [c,d], [d,e]]

Some graphs are directional, giving importance to the order of verticies in the edges (giving each edge a direction).

The super basic methods are adding an vertex and adding an edge.

### Stack
A stack is a method of data storage that is first in, last out. It is like chips in a Pringles can. The last chip put in is going to be the first chip taken out.
Datums can be pushed (added to the top) or popped (removed from the top), and you can peek to see what datum is on top of the stack.

### Queue
A queue is a method of data storage that is first in, first out, like a line at a store (no cutting).
Datums can be enqueued (added to the back of the queue) or dequeued (removed from the front of the queue), and you can peek at a queue to see what element is next to be removed. (I'm pretty sure you see this and not what is most recently added).

### Heaps
A heap is a tree based data structure in which the nodes are organized by key. Let's take a max heap for example. The root node will have the key of the largest value. Everything below it will be smaller. This continues, with the parent nodes always having larger keys than any individual child node. If the heap property was different (for instance, the heap was a min heap), the heap would be ordered differently.


### Array Lists
ArrayLists are the normal arrays (and lists) I know and love. Standard arrays in Java or C++ are immutable, while ArrayLists are mutable and resizable.

### Vectors
I think that vectors are the same as ArrayLists, just more C++ie.

### Hash Tables
A hash table is a organization of data in an array that is determined from a sorting function. Data is passed two the function, and the function returns an index of where the data should be stored in the array. If data is already stored at that point in the array, you can either add it to the next available space (causes more and more errors as elements are added, not recommended), or you create a linked list at that point in the array, and each consecutive element that is added is pushed further down the linked list.

## Algorithms
### Breadth-first Search
This is a searching algorithm for tree or graph data. Basically, it searches wide before it searches deep. It will search the same depth across an entire tree before it goes deeper. It will search through all of the siblings before it moves onto children.

### Depth-first Search
This is the opposite of breadth first searching. Depth-first search traverses a tree by going as far down one branch as possible, and then checking the rest of that branch completely before moving onto the next branch

### Binary Search
Searching algorithm that works with sorted data. Splits the data in half, and if the element is greater than the midpoint, it looks in the upper half, it is less, then it looks in the lower. It recursively applies this searching method until it finds the solution.

### Merge Sort
Break down the list into the smallest parts possible (each into one element). Then compare each section to the adjascent, ordering while combining the two elements. This occurs recursively. If two groups are being compared, the first elements of the groups are compared.


### Quick Sort
I think this is the one where one point in the unordered list is chosen and it is sorted in comparison to everything else (everything below it in value is placed before and above placed after). NOT SURE.

One of point in the unordered list is chosen at random. It is then located correctly in relation to all of the elements (elements lower than it come before, elements higher come after). This also segements the list into two parts (one on either side of the pivot). An element is chosen within each of those lists as a pivot, and the method is applied recursively.

## Concepts
### Bit manipulation
Use of bits as a numerical system and the logic that surrounds this system. For instance, what happens if you move all everything to the left by one 0? (It multiplies the number by two.)

### Memory (Static vs. Heap)
Chosen allocation of memory into either a Stack or Heap. Stack is faster to access, and is stored efficiently. The Heap has slower access, no guarantee of efficient use of space, but adds more flexibility in terms of access and variable size.

### Recursion
A method or function that calls itself. Usually needs a base case which returns a value rather than calls itself.

### Dynamic Programming
Dynamic programming breaks down larger problems into a collection of simpler problems. I believe it is achieved witha a combination of recursion and memoization. As the program runs, it gathers a cache of solutions to small parts of the problem (memoization), so when it runs into the same problem, it can refer to a solution it has already created. Thus the function is dynamically changing over the course of it's runtime.

### Big O Time + Space
Understanding how much time or space it taken up from certain processes in comparison to x (the size of the data being processed).

