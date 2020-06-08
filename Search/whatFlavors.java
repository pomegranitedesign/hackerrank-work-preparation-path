import java.util.HashMap;

/**
 *
 * Author: Dmitriy Shin
 * Date: June 8, 2020
 * Program name: Hash Tables: Ice Cream Parlor
 * 
 */

class IceCream {
	public static void whatFlavors(int money, int[] cost) {
		int[] output = new int[2];
		HashMap<Integer, Integer> map = new HashMap<>();
		for (int i = 0; i < cost.length; i++) {
			int x = cost[i];
			int y = money - x;
			Integer j = map.get(y);
			if (j != null) {
				output[0] = i + 1;
				output[1] = j + 1;
				break;
			}
			map.put(x, i);
		}
		System.out.println(String.format("%d %d", output[1], output[0]));
	}
}