import java.util.Scanner;

/**
 * This program produces a numeric pattern
 * symmetric about n where each half before and after
 * n is also symmetric around n-1.
 *
 * This program is sponsored by Recursion.inc.
 *
 * By:      Sam Corbett
 * Version: 1.0
 * Since:   2024/12/04
 */
public class SymmetricalRecursion {

    /**
     * This function generates the pattern recursively from a given number
     *
     * @param numberParam - the number from userInput
     * @return the generated pattern
     */
    public static String generatePattern(int numberParam) {
        if (numberParam < 1) {
            return "";
        }
        String subPattern = generatePattern(numberParam - 1);
        String currentPattern = " " + numberParam;
        if (numberParam > 5) {
            currentPattern += '\n';
        }
        return subPattern + currentPattern + subPattern;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a positive integer: ");
        String userInputStr = scanner.nextLine();

        if (userInputStr == null) {
            System.out.println("ERROR: entered null (nothing).");
        } else {
            try {
                int userInputInt = Integer.parseInt(userInputStr);

                if (userInputInt <= 0) {
                    System.out.println("ERROR: Not a valid input");
                } else {
                    // Call Function and print the pattern
                    System.out.println(generatePattern(userInputInt).trim());
                }
            } catch (NumberFormatException e) {
                System.out.println("ERROR: Not a valid input");
            }
        }
        System.out.println("\nDone.");
    }
}