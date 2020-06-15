import java.util.Arrays;

/**
 *
 * Author: Dmitriy Shin
 * Date: June 15, 2020
 * Program name: Pairs
 *
 */
class Pairs {
  public static void main(String[] args) {
    int[] arr = {1, 5, 3, 4, 2};
    System.out.println(pairs(arr, 2)); // 3
  }

  static int pairs(int[] arr, int k) {
    int nPairs = 0;
    int l = 0, r = 0;
    int n = arr.length;

    Arrays.sort(arr);

    while (r < n) {
      if (arr[r] - arr[l] == k) {
        nPairs++;
        l++;
        r++;
      } else if (arr[r] - arr[l] > k) l++;
      else r++;
    }

    return nPairs;
  }
}