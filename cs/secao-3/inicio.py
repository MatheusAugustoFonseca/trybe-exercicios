import requests


response = requests.get("https://www.betrybe.com/")
# print('using get', response.status_code)  # código de status
# print('using get', response.headers["Content-Type"])
# print(response.text)

response = requests.post("http://httpbin.org/post", data="some content")
print(response.text)