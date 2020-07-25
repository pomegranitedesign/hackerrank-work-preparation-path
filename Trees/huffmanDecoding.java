/**
 *
 * Author: Dmitriy Shin Date: July 22, 2020 Program name: Huffman Decoding
 *
 */

class Node {
  public int frequency;
  public char data;
  public Node left, right;
}

class Main {
  public static void main(String[] args) {
    decode("ABACA", new Node()); // ABACA
  }

  void decode(String s, Node root) {
    Node c = root;
    for (int i = 0; i < s.length(); i++) {
      c = s.charAt(i) == '0' ? c.left : c.right;
      if (c.left == null && c.right == null) {
        System.out.print(c.data);
        c = root;
      }
    }
  }
}