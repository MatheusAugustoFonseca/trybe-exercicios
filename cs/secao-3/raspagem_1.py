from parsel import Selector
import requests


response = requests.get("http://books.toscrape.com/")
print(response.status_code)
selector = Selector(text=response.text)
print(selector)

# O título está no atributo title em um elemento âncora (<a>)
# Dentro de um h3 em elementos que possuem classe product_pod
titles = selector.css(".product_pod h3 a::attr(title)").getall()
# Estamos utilizando a::attr(title) para capturar somente o valor
#  contido no texto do seletor
# print(titles)

# Os preços estão no texto de uma classe price_color
# Que se encontra dentro da classe .product_price
prices = selector.css(
    ".product_price .price_color::text"
).getall()
# print(prices)

for product in selector.css(".product_pod"):
    title = product.css("h3 a::attr(title)").get()
    price = product.css(".price_color::text").get()
    print(title, price)
    # Descobre qual é a próxima página