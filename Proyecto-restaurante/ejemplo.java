import regex;

public class ejemplo {
    public static void main(String[] args) {
        String texto = "Hola mundo";
        String patron = "Hola";
        boolean resultado = texto.matches(patron);
        System.out.println(resultado);
    }
}