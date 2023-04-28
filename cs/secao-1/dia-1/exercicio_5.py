# 1l faz 3m
# cada lata tem 18l e custa $80


def calcula_tinta(area):
    litros = area / 3
    latas = litros // 18
    price = 80 * latas
    return latas, price


print(calcula_tinta(600))