import java.util.*;

class Main {
    public String solution(String word) {
        String answer = "";
        for (char c : word.toCharArray()) {
            // if(c>=97 && c<=122) answer+=(char)(c-32);
            // else answer+=(char)(c+32);
            if (Character.isLowerCase(c))
                answer += Character.toUpperCase(c);
            else
                answer += Character.toLowerCase(c);

        }
        return answer;
    }

    public static void main(String[] args) {
        Main T = new Main();
        try (Scanner inputs = new Scanner(System.in)) {
            String word = inputs.next();
            System.out.print(T.solution(word));
        }
    }
}
