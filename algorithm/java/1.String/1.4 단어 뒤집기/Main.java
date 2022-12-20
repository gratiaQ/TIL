import java.util.*;

class Main {
    public ArrayList<String> solution(int number, String[] word) {
        ArrayList<String> answer = new ArrayList<>();
        for (String x : word) {
            String tmp = new StringBuilder(x).reverse().toString();
            answer.add(tmp);
        }
        return answer;
    }

    public static void main(String[] args) {
        Main T = new Main();
        try (Scanner inputs = new Scanner(System.in)) {
            int number = inputs.nextInt();
            String[] word = new String[number];
            for (int i = 0; i < word.length; i++) {
                word[i] = inputs.next();
            }

            for (String x : T.solution(number, word)) {
                System.out.println(x);
            }
        }

    }
}
