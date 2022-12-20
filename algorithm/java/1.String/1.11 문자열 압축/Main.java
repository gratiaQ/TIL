import java.util.*;

class Main {
    public String solution(String str) {
        String answer = "";
        str += " ";
        char initialChar = ' ';
        int count = 1;

        for (char c : str.toCharArray()) {
            if (initialChar == c) {
                count += 1;
                continue;
            } else {
                answer += String.valueOf(initialChar) + String.valueOf(count);
                count = 1;
                initialChar = c;
            }
        }

        answer = answer.replaceAll("1", "").trim();
        return answer;
    }

    public static void main(String[] args) {
        Main T = new Main();
        try (Scanner kb = new Scanner(System.in)) {
            String str = kb.next();
            System.out.print(T.solution(str));
        }
    }
}