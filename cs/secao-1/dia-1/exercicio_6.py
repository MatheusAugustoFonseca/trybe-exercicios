def is_triangle(lado1, lado2, lado3):
    is_triangle = (
        lado1 + lado2 > lado3
        and lado2 + lado3 > lado1
        and lado1 + lado3 > lado2
    )
    if not is_triangle:
        return "não é triângulo"
    elif lado1 == lado2 == lado3:
        return "triangulo equilatero"
    elif lado1 == lado2 or lado2 == lado3 or lado3 == lado1:
        return "triangulo isoceles"
    else:
        return "triangulo escaleno"


print(is_triangle(3, 2, 4))
