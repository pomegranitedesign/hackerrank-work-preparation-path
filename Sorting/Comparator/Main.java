package Comparator;
import java.util.Arrays;

public class Main {
	public static void main(String[] args) {
    Player[] players = { 
      new Player("amy", 150), new Player("david", 100), 
      new Player("heraldo", 50), new Player("aakansha", 75), new Player("aleksa", 150) 
    };

    System.out.println("Unsorted");
    for (int i = 0; i < players.length; i++) 
      System.out.println(players[i].name + ' ' + players[i].score);


    Checker checker = new Checker();

    Arrays.sort(players, checker);
    System.out.println("\nSorted");
    for (int i = 0; i < players.length; i++) 
      System.out.println(players[i].name + ' ' + players[i].score);
	}
}
