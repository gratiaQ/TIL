import java.util.*;

class Main {
    public ArrayList<Integer> solution(int[] arrayNum, int n) {
        ArrayList<Integer> answer = new ArrayList<>();
        answer.add(arrayNum[0]);

        for (int i = 1; i < n; i++) {
            if (arrayNum[i] > arrayNum[i - 1]) {
                answer.add(arrayNum[i]);
            }

        }
        return answer;
    }

    public static void main(String[] args) {
        Main T = new Main();
        try (Scanner kb = new Scanner(System.in)) {
            int n = kb.nextInt();
            int[] arrayNum = new int[n];
            for (int i = 0; i < n; i++) {
                arrayNum[i] = kb.nextInt();
            }
            for (Integer integer : T.solution(arrayNum, n)) {
                System.out.print(integer + " ");
            }
        }
    }
}