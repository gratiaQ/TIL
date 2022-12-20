import java.util.*;

public class Main {
    public int solution(String word, char findC) {
        int answer = 0;
        word = word.toUpperCase();
        findC = Character.toUpperCase(findC);
        for (char c : word.toCharArray())
            if (c == findC)
                answer++;

        return answer;

    }

    public static void main(String[] args) {
        Main T = new Main();
        try (Scanner inputs = new Scanner(System.in)) {
            String word = inputs.next();
            char findC = inputs.next().charAt(0);

            System.out.println(T.solution(word, findC));
        }
    }
}