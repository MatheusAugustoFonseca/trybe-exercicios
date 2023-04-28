list = [5, 9, 3, 19, 70, 8, 100, 1, 35, 27]


# def find_smaller(list):
#     smalest = list[0]
#     for number in list:
#         if number < smalest:
#             smalest = number
#     return smalest
def find_smaller(numbers):
    return min(numbers)


print(find_smaller(list))
