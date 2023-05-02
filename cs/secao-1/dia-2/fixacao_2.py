insert = input("Insira valores naturais separados por espaço: ")

splited = insert.split(" ")

print(splited)

sum = 0
for num in splited:
    if not num.isdigit():
        print(f"Erro, '{num}' is not a digit.")
    else:
        sum += int(num)

print(f"A soma dos valores é {sum}")
