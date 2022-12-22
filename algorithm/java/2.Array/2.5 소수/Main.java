import java.util.*;

class Main {
    public int solution(int n) {
        int answer = 0;
        int[] answerArray = new int[n + 1];
        for (int i = 2; i <= n; i++) {
            if (answerArray[i] == 1) {
                continue;
            }
            if (answerArray[i] == 0) {
                answer++;
                for (int j = i; j <= n; j = j + i) {
                    answerArray[j] = 1;
                }
            }
        }
        return answer;
    }

    public static void main(String[] args) {
        Main T = new Main();
        try (Scanner inputs = new Scanner(System.in)) {
            int n = inputs.nextInt();
            System.out.println(T.solution(n));
        }
    }
}