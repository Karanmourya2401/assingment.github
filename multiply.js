public class MultiplyTwoNumbers2 {
	private static Scanner sc;

	public static void main(String[] args) {
		double Number1, Number2, product;
		sc = new Scanner(System.in);
		
		System.out.print("Enter the First integer Value =  ");
		Number1 = sc.nextDouble();

		System.out.print("Enter the Second integer Value = ");
		Number2 = sc.nextDouble();
		
		product = productofTwo(Number1, Number2);
		System.out.println("\nProduct of two float values = " + product);
	}
	
	public static double productofTwo(double a, double b) {
		return a * b;
	}
}