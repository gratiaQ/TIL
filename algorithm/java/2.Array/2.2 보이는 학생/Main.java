import java.util.*;

class Main {
    public int solution(ArrayList<Integer> arrayNum, int n) {
        ArrayList<Integer> answer = new ArrayList<>();
        answer.add(arrayNum.get(0));

        for (Integer integer : arrayNum) {
            int value = answer.get(answer.size() - 1);
            if (integer > value) {
                answer.add(integer);
            }

        }
        return answer.size();
    }

    public static void main(String[] args) {
        Main T = new Main();
        try (Scanner kb = new Scanner(System.in)) {
            int n = kb.nextInt();
            ArrayList<Integer> arrayNum = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                arrayNum.add(kb.nextInt());
            }
            System.out.println(T.solution(arrayNum, n));
        }
    }
}