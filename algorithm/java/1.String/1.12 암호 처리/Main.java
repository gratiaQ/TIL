import java.util.*;

class Main {
    public String solution(String str, int n) {
        String answer = "";
        for (int i = 0; i < n; i++) {
            String tmp = str.substring(0, 7).replace('#', '1').replace('*', '0');
            int num = Integer.parseInt(tmp, 2);
            answer += (char) num;
            str = str.substring(7);
        }
        return answer;
    }

    public static void main(String[] args) {
        Main T = new Main();
        try (Scanner kb = new Scanner(System.in)) {
            int n = kb.nextInt();
            String str = kb.next();
            System.out.print(T.solution(str, n));
        }
    }
}