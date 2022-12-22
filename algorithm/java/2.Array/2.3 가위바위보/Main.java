import java.util.*;

class Main {
    public String solution(int N, int[] arrA, int[] arrB) {
        String answer = "";

        for (int i = 0; i < N; i++) {
            switch (arrA[i] - arrB[i]) {
                case -1:
                case 2: {
                    answer += "B";
                    break;
                }
                case 1:
                case -2: {
                    answer += "A";
                    break;
                }
                case 0: {
                    answer += "D";
                    break;
                }
            }
        }
        return answer;
    }

    public static void main(String[] args) {
        Main T = new Main();
        try (Scanner inputs = new Scanner(System.in)) {
            int N = inputs.nextInt();

            int[] arrA = new int[N];
            for (int i = 0; i < N; i++) {
                arrA[i] = inputs.nextInt();
            }
            int[] arrB = new int[N];
            for (int i = 0; i < N; i++) {
                arrB[i] = inputs.nextInt();
            }

            for (char x : T.solution(N, arrA, arrB).toCharArray())
                System.out.println(x);
            ;
        }
    }
}