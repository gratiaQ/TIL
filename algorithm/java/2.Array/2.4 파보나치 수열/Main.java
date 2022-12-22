import java.util.*;

class Main {
    public ArrayList<Integer> solution(int n) {

        ArrayList<Integer> answer = new ArrayList<Integer>();
        answer.add(0);
        answer.add(1);
        for (int i = 1; i < n; i++) {
            answer.add(answer.get(answer.size() - 2) + answer.get(answer.size() - 1));
        }
        return answer;
    }

    public static void main(String[] args) {
        Main T = new Main();
        try (Scanner inputs = new Scanner(System.in)) {
            int n = inputs.nextInt();
            for (Integer integer : T.solution(n)) {
                if (integer == 0)
                    continue;
                System.out.print(integer + " ");
            }
        }
    }
}