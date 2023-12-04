import java.util.Scanner;

public class CondicionalIf {
	
	/**
	 * Sintaxis de la condicional if 
	 * Si la condicional es verdadera, se
	 * ejecuta la instrucción de if
	 * 
	 * if ( condicional ) sentencia;
	 * 
	 * if ( condicional ) { 
	 *  sentencias; 
	 * }
	 * 
	 * if ( condicional ) sentencia; 
	 * else sentencia_Si_condicional_es_falsa;
	 * ------------------------------------------------------ 
	 * if ( condicional ) sentencia; 
	 * else if ( nueva_condicional) sentencia; 
	 * . . . 
	 * else if ( * n_condición ) sentencia; 
	 * else sentencia;
	 * 
	 */
	
	public static void main(String[] args) {
		edad(20);
		rangoNum(-5);
		rangoNumTernario(5);
		scanner();
		
	}
	
	/* Verifiquen la edad de una persona.
	 * Si es mayor o igual de 18 imprimir: "Puede votar", 
	 * caso contrario: "No puede votar"
	 */
	public static void edad(int edad) {
		if(edad <= 18) {
			System.out.println("No puedes votar");
		}else {
			System.out.println("Puedes votar");
		}
	}
	
	/*
	 * De una variable tipo int, evaluar si está en el rango de 1 a 10, si es así
	 * desplegar en consola "La selección está en el rango" En caso contrario
	 * "La selección está fuera de rango"
	 */
	
	public static void rangoNum(int rango) {
		if(rango > 0 && rango <=10) {
			System.out.println("La seleccion esta en rango");
		}else {
			System.out.println("La seleccion esta fuera de rango");
		}
	}
	
	
	/*
	 * Operador ternario.
	 * 
	 * Sintaxis: expresión ? respuesta_si_es_true : si_es_false
	 * 
	 */
	public static void rangoNumTernario(int rango) {
		String myRange = (rango >= 1 && rango <=10) ? 
				"La seleccion esta en rango" : "La seleccion esta fuera de rango";
		System.out.println(myRange);	}
	
	
	public static void scanner () {
		// --------------------------------------------------------------
		// -------------- Clase Scaner --------------------------------
		int age;
		age = 20;
		
		Scanner myScan; 
		myScan = new Scanner( System.in );
		
		System.out.println("Escribe tu nombre: ");		
		String myName = myScan.nextLine(); // lee toda la línea hasta /n"		
		System.out.println("Tu nombre es: " + myName);
System.out.println("Escribe una frase: ");		
		String frase = myScan.next(); // lee hasta el delimitador indicado		
		System.out.println("La primera palabra de la frase es: " + frase);

	}
}
