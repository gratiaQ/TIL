import java.util.*;

class Main {
    public String solution(String sentence) {
        String answer = "";
        int minValue = Integer.MIN_VALUE;
        String[] word = sentence.split(" ");
        for (String value : word) {
            int length = value.length();
            if (length > minValue) {
                minValue = length;
                answer = value;
            }
        }

        return answer;
    }

    public static void main(String[] args) {
        Main T = new Main();
        try (Scanner inputs = new Scanner(System.in)) {
            String sentence = inputs.nextLine();
            System.out.print(T.solution(sentence));
        }
    }
}
