# from parsel import Selector
# import requests

# URL_BASE = "http://books.toscrape.com/catalogue/"

# # Vamos testar com a primeira página
# response = requests.get(URL_BASE + "page-1.html")
# selector = Selector(text=response.text)

# # Recupera o atributo href do primeiro elemento que combine com o seletor
# href = selector.css(".product_pod h3 a::attr(href)").get()
# print(href)

# # Para obter a url completa, basta adicionar a nossa URL_BASE
# print(URL_BASE + href)

# from parsel import Selector
# import requests


# response = requests.get("http://books.toscrape.com/")
# selector = Selector(text=response.text)
# # Extrai todos os preços da primeira página
# prices = selector.css(".product_price .price_color::text").re(r"£\d+\.\d{2}")
# print(prices)
from parsel import Selector
import requests


response = requests.get(
    "http://books.toscrape.com/catalogue/a-light-in-the-attic_1000/index.html"
)
selector = Selector(text=response.text)

# Extrai a descrição
description = selector.css("#product_description ~ p::text").get()
print(description)

# "Fatiamos" a descrição removendo o sufixo
suffix = "...more"
if description.endswith(suffix):
    description = description[: -len(suffix)]
print(description)
