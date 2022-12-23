import java.util.*;

class Main {
    public int solution(int n, ArrayList<Integer> ns) {
        int sum = 0, bonus = 0;
        for (Integer integer : ns) {
            if (integer == 0) {
                bonus = 0;
            } else {
                sum += integer + bonus;
                bonus += 1;
            }
        }
        return sum;
    }

    public static void main(String[] args) {
        Main T = new Main();
        try (Scanner inputs = new Scanner(System.in)) {
            int n = inputs.nextInt();
            ArrayList<Integer> ns = new ArrayList<Integer>();
            for (int i = 0; i < n; i++) {
                ns.add(inputs.nextInt());
            }
            System.out.println(T.solution(n, ns));
        }
    }
}