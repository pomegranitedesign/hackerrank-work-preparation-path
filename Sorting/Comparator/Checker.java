/**
 *
 * Author: Dmitriy Shin
 * Date: May 6, 2020
 * Program name: Comparator
 * Explanation:
 *  Comparators are used to compare two objects. In this challenge, you'll create a comparator and use it to sort an array. 
 *  The Player class is provided in the editor below. It has two fields: 
 *    name: a string.
 *    score: an integer.
 *  Given an array of n Player objects, write a comparator that sorts them in order of decreasing score. 
 *  If 2 or more players have the same score, sort those players alphabetically ascending by name. 
 *  To do this, you must create a Checker class that implements the Comparator interface, then write an int compare(Player a, Player b) 
 *  method implementing the Comparator.compare(T o1, T o2) method. 
 *  In short, when sorting in ascending order, a comparator function returns -1 if a < b, 0 if a === b , 1 and a > b if .
 * 
 */
package Comparator;
import java.util.Comparator;

class Player {
	String name;
	int score;

	Player(String name, int score) {
		this.name = name;
		this.score = score;
	}
}

class Checker implements Comparator<Player> {
	public int compare(Player a , Player b) {
		if (a.score > b.score) return -1;
		else if (a.score < b.score) return 1;
		else if (a.score == b.score) {
			if (a.name.compareTo(b.name) < 0) return -1;
			else if (a.name.compareTo(b.name) > 0) return 1;
		}
		return 0;
	}
}

