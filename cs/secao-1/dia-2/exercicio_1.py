# your_name = input('inser your name: ')


def print_piramid_name(name):
    for letters in range(len(name)):
        for index in range(len(name) - letters):
            print(name[index], end=".")
        print()


if __name__ == "__main__":
    your_name = input("inser your name: ")
    print_piramid_name(your_name)

# x = range(5)
# for n in x:
#     print(n)
