// What is Graph ?

// Graph is a pair of sets (V,E) where V is the set of vertices and E is the set of edges,connecting
// the pairs of vertices.

// How does a typical graph look like ?

// (v1)-------(v2)------(v3)\
//   |          |         |  \ 
//   |          |         |   \
// (v1)-------(v2)------(v3    \(v10)
//   |          |              /
//   |          |         |   /
// (v1)-------(v2)------(v3) /

// V = { v1, v2, v3, v4, v5, v6, v7, v8, v9, v10 }

// E = { v1v2, v2v3, v1v4, v4v7, v7v8, v2v5, v5v8, v3v6, v6v9, v8v9, v3v10, v9v10 }


// Some terminology

// Vertices : Vertcies are the nodes of the graph.

// Edges : Edges are the arcs that connect pairs of vertices.

// UnWeighted Graph : A graph not having a weight associated with any edge.

// weighted Graph : A graph  having a weight associated with any edge.

// Undirected Graph : It is a graph that is set of vertices connected by edges, where the edges
// don't have a direction associated with them.

// Directed Graph : It is a graph that is set of vertices connected by edges, where the edges
// have a direction associated with them.

// Cyclic Graph : A cyclic graph is a graph having one loop.

// Acyclic Graph : An Acyclic graph is a graph having no loop.

// Tree : Tree is a special case of Directed Asyclic group.


// Types of Graph

//                                   Graph
//                                  /     \
//                          Directed       Undirected 
//                         /        \         /      \
//                 Weighted  Unweighted   Weighted   Unweighted  35
//                  /     \               /      \
//              positive  negative    positive  negative               


// 1.Unweighted - DirectedGraph
// 2.Unweighted - UnDirectedGraph
// 3.Positve - Weighted - UnDirectedGraph
// 4.Positve - Weighted - DirectedGraph
// 5.Negative - Weighted - UnDirectedGraph
// 6.Positve - Weighted - UnDirectedGraph

// Types of Graph Traversal

// - Breadth First Search (BFS)
// - Depth First Search (DFS)

// What is BFS ?
// -BFS is an algorithm for traversing graph data structures.It starts at some arbitrary node of a graph
// and explores the neighbour nodes ( Which are at current level ) first,before moving to the next leve neighbours.
// - It is a Level order traversal

// for disconnected graph we can not perform either BFS or DFS.

// Algorithm of BFS ( We can achieve it using Queue)

// BFS(G):

// while all the vertices are not explored, do :

//   enqueue (any vertex)
//   while Q is not empty
//     p = Dequeue()
//     if p is unvisited
//        print 'p' and mark 'p' as visited
//        enqueue (all adjacent univisted vertices of 'p')

// (v1)-------(v2)------(v3)\
//   |          |         |  \ 
//   |          |         |   \
// (v4)-------(v5)------(v6)    \(v7)
//   |          |              /
//   |          |         |   /
// (v8)-------(v9)------(v10) /

// => v1,v2,v3,v4,v5,v6,v7,v8,v9,v10

//-----------------------------------------------------------------------------------------------------

// Algorithm of DFS ( We can achieve it using Stack)


// DFS():

// while all the vertices are not explored, do :

//   push (any vertex)
//   while Stack is not empty
//     p = pop()
//     if p is unvisited
//        print 'p' and mark 'p' as visited
//        push(all adjacent univisted vertices of 'p')


// (v2)------(v3)\
//   |          | \ 
//   |          |   \
// (v5)------(v6)    \(v7)
//   |          |    /
//   |          |   /
// (v9)------(v10) /


// => v2,v5,v9,v10,v6,v3,v7

// Time Complexity : O(E + v)
// Space Complexity : O(E + v)



//------------------------------------------------------------------------------------------------------

// DFS vs BFS

// ----------------------------------------------------------------------------------------------------
//                                        DFS                              BFS
// ----------------------------------------------------------------------------------------------------
// how it works internally          It goes in depth first        It goes in breadth first  
// ----------------------------------------------------------------------------------------------------
// internally uses which DS             Stack                           Queue
// -----------------------------------------------------------------------------------------------------
// Time Complexity                     O(E + V)                        O(E + V)
// ----------------------------------------------------------------------------------------------------
// Space Complexity                    O(E + V)                         O(E + V)
// ----------------------------------------------------------------------------------------------------
// When to use which ?            If we already know that             If we already know that
//                          target vertex burried very deep       vertex is closed to starting point
// -----------------------------------------------------------------------------------------------------