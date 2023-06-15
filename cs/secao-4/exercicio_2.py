# Recursivo
def countEven(number):
    if number == 1:
        return 0
    elif number % 2 == 0:
        return 1 + countEven(number - 1)
    else:
        return countEven(number - 1)


print(countEven(7))