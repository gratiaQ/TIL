import java.util.*;

class Main {
    public boolean isPrime(int n) {
        if (n == 1)
            return false;
        for (int i = 2; i < n / 2; i++) {
            if (n % i == 0)
                return false;
        }
        return true;
    }

    public ArrayList<Integer> solution(int n, int[] ns) {
        ArrayList<Integer> answer = new ArrayList<Integer>();
        for (Integer integer : ns) {
            int temp = Integer.parseInt(new StringBuilder(integer.toString()).reverse().toString());
            if (isPrime(temp)) {
                answer.add(temp);
            }

        }

        return answer;
    }

    public static void main(String[] args) {
        Main T = new Main();
        try (Scanner inputs = new Scanner(System.in)) {
            int n = inputs.nextInt();
            int[] ns = new int[n];
            for (int i = 0; i < n; i++) {
                ns[i] = inputs.nextInt();
            }
            for (int i : T.solution(n, ns)) {
                System.out.print(i + " ");
            }
        }
    }
}