import java.util.*;

class Main {
    public String solution(String str) {
        String answer = "NO";

        String temp = new StringBuilder(str).reverse().toString();
        if (str.equalsIgnoreCase(temp))
            return "YES";
        return answer;
    }

    public static void main(String[] args) {
        Main T = new Main();
        try (Scanner kb = new Scanner(System.in)) {
            String str = kb.next();
            System.out.println(T.solution(str));
        }
    }
}