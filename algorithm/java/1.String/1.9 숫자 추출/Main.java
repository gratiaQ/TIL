import java.util.*;

class Main {
    public int solution(String str) {
        return Integer.parseInt(str.replaceAll("[^0-9]", ""));
    }

    public static void main(String[] args) {
        Main T = new Main();
        try (Scanner kb = new Scanner(System.in)) {
            String str = kb.nextLine();
            System.out.println(T.solution(str));
        }
    }
}