import java.util.*;

class Main {
    public ArrayList<Integer> solution(int n, ArrayList<Integer> ns) {
        ArrayList<Integer> answer = new ArrayList<Integer>();
        ArrayList<Integer> original = new ArrayList<>();
        System.arraycopy(ns, 0, answer, 0, n);

        ns.sort(Comparator.reverseOrder());

        for (Integer integer : original) {
            answer.add(ns.indexOf(integer) + 1);
        }

        return answer;
    }

    public static void main(String[] args) {
        Main T = new Main();
        try (Scanner inputs = new Scanner(System.in)) {
            int n = inputs.nextInt();
            ArrayList<Integer> ns = new ArrayList<Integer>();

            for (int i = 0; i < n; i++) {
                ns.add(inputs.nextInt());
            }
            for (Integer integer : T.solution(n, ns)) {
                System.out.print(integer + " ");
            }
        }
    }
}