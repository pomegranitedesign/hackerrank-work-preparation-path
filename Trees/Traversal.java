/**
 *
 * Author: Dmitriy Shin
 * Date: June 14, 2020
 * Program name: Pre-Order Traversal 
 * 
 */

class Traversal {
  public static void main(String[] args) {
  }

  public static void preOrder(Node root) {
    if (root == null) return;
    System.out.print(root.data + " ");
    preOrder(root.left);
    preOrder(root.right);
  }

  public static void inOrder(Node root) {
    if (root == null) return;
    inOrder(root.left);
    System.out.print(root.data);
    inOrder(root.right);
  }

  public static void postOrder(Node root) {
    if (root == null) return;
    postOrder(root.left);
    postOrder(root.right);
    System.out.print(root.data);
  }
}