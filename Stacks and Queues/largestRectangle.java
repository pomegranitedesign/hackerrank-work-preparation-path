/**
 *
 * Author: Dmitriy Shin Date: July 17, 2020 Program name: Largest Rectangle
 *
 */

class Main {
	public static void main(String[] args) {
		Deque<Integer> stack = new LinkedList<Integer>();
		long maxArea = 0;
		int area = 0;
		int i;
		for (i = 0; i < h.length;) {
			if (stack.isEmpty() || h[stack.peekFirst()] <= h[i])
				stack.offerFirst(i++);
			else {
				int top = stack.pollFirst();
				if (stack.isEmpty())
					area = h[top] * i;
				else
					area = h[top] * (i - stack.peekFirst() - 1);

				if (area > maxArea)
					maxArea = area;
			}
		}
		while (!stack.isEmpty()) {
			int top = stack.pollFirst();
			if (stack.isEmpty())
				area = h[top] * i;
			else
				area = h[top] * (i - stack.peekFirst() - 1);
			if (area > maxArea)
				maxArea = area;
		}

		System.out.println(maxArea);
	}
}
