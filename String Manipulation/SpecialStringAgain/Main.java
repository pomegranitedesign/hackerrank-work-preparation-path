package SpecialStringAgain;

public class Main {
  public static void main (String[] args) { 
    Substr substr = new Substr();
  
    String testOne = "asasd";
    String testTwo = "abcbaba";
    String testThree = "aaaa";
    String testFour = "mnonopoo";
    String testFive = "ccacacabccacabaaaabbcbccbabcbbcaccabaababcbcacabcabacbbbccccabcbcabbaaaaabacbcbbbcababaabcbbaaababababbabcaabcaacacbbaccbbabbcbbcbacbacabaaaaccacbaabccabbacabaabaaaabbccbaaaabacabcacbbabbacbcbccbbbaaabaaacaabacccaacbcccaacbbcaabcbbccbccacbbcbcaaabbaababacccbacacbcbcbbccaacbbacbcbaaaacaccbcaaacbbcbbabaaacbaccaccbbabbcccbcbcbcbcabbccbacccbacabcaacbcaccabbacbbccccaabbacccaacbbbacbccbcaaaaaabaacaaabccbbcccaacbacbccaaacaacaaaacbbaaccacbcbaaaccaabcbccacaaccccacaacbcacccbcababcabacaabbcacccbacbbaaaccabbabaaccabbcbbcaabbcabaacabacbcabbaaabccabcacbcbabcbccbabcabbbcbacaaacaabbbabbaacbbacaccccabbabcbcabababbcbaaacbaacbacacbabbcacccbccbbbcbcabcabbbcaabbaccccabaabbcbcccabaacccccaaacbbbcbcacacbabaccccbcbabacaaaabcccaaccacbcbbcccaacccbbcaaaccccaabacabcabbccaababbcabccbcaccccbaaabbbcbabaccacaabcabcbacaccbaccbbaabccbbbccaccabccbabbbccbaabcaabcabcbbabccbaaccabaacbbaaaabcbcabaacacbcaabbaaabaaccacbaacababcbacbaacacccacaacbacbbaacbcbbbabccbababcbcccbccbcacccbababbcacaaaaacbabcabcacaccabaabcaaaacacbccccaaccbcbccaccacbcaaaba";

    System.out.println(substr.substrCount(testThree));
    System.out.println(substr.substrCount(testOne));
    System.out.println(substr.substrCount(testTwo));
    System.out.println(substr.substrCount(testFour));
    System.out.println(substr.substrCount(testFive));
  } 
}