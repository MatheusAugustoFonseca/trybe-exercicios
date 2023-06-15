# Não recursivo
def countEven(number):
    count = 0
    for num in range(number + 1):
        if num % 2 == 0 and num != 0:
            count += 1
    return count


print(countEven(7))
