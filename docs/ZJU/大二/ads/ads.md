# ads

# 平衡搜索树

## Binary Search Tree (BST)

- Tree operations are closely related to tree depth (n-1).

## Balanced BSTs

- Speed up searching
- Avoid the worst case O(N) complexity

## AVL Trees (Adelson-Velskii-Landis Trees)

A tree is **height-balanced** if:
1. T left and T right are height-balanced
2. h left - h right ≤ 1

**Definition of AVL trees**: Balanced factor BF(node) = h_left - h_right. In an AVL tree, BF(any node) ∈ {-1, 0, 1}.

**Example**: 维护一个树，当某个节点BF无法满足的时候，进行一次旋转，使之重新平衡 (single rotation)

### RR rotation

![AVL tree RR rotation example](images/image.png)

### LL rotation

![alt text](images/image-1.png)

### LR rotation

![alt text](images/image-2.png)

### RL rotation

![alt text](images/image-3.png)

about the worst case for AVL trees.

just like Fibonacci numbers: N (h) = N (h-1) + N (h-2) + 1
也就是斐波那契数减去一。

由斐波那契数性质可得：

\[
    n_h = F_{h+3} - 1, \quad h \geq 0
\]

斐波那契数理论给出：

\[
    F_i \approx \frac{1}{\sqrt{5}} \left( \frac{1+\sqrt{5}}{2} \right)^i
\]

因此：

\[
    n_h \approx \frac{1}{\sqrt{5}} \left( \frac{1+\sqrt{5}}{2} \right)^{h+3} - 1
\]

\[
    \Rightarrow \quad h = O(\ln n)
\]

挺好的对数级复杂度 不赖/

## Splay Trees

amortized time is O(log N)
Idea: After a node is accessed ,it is pushed to the root by a series of AVL tree rotations.

the tendency goes to balance.

# lec2

## Amortized analysis 摊还分析

Target: Any M consecutive operationss take at most O(M logN) time.

exp：
i. two_stack O(1)
ii. Dynamic Arrays O(1)


### Accounting Method

### Potential Method

How to assign?

how "messy" the data structure is.(large-messy small-clean) 回味回味

'amortized-cost = real-cost + k * \Delta phi(keep it larger than zero)'

\Delta phi = phi after - phi before

exp:
i. phi = height of in stack
代入得到 amortized-cost = O(1) + k·1
全部移动过去的计算：=O(h) + k·-h //h= height of Instack    =O(1) #下降了
之后的pop只剩下 real-cost = O(1)

Why this works:
E amortized = E real-cost + k(phi end - phi start)

Then lts go to the proof of the splay tree
