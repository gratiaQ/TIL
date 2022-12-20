import java.util.*;

class Main {
    public String solution(String str) {
        String answer = "NO";
        str = str.toUpperCase().replaceAll("[^A-Z]", "");

        String tmp = new StringBuilder(str).reverse().toString();
        if (str.equals(tmp))
            answer = "YES";

        return answer;
    }

    public static void main(String[] args) {
        Main T = new Main();
        try (Scanner kb = new Scanner(System.in)) {
            String str = kb.nextLine();
            System.out.println(T.solution(str));
        }
    }
}