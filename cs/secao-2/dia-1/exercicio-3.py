from abc import ABC, abstractclassmethod
from math import pi as PI


class FiguraGeometrica(ABC):
    @abstractclassmethod
    def area(self):
        raise NotImplementedError

    @abstractclassmethod
    def perimetro(self):
        raise NotImplementedError

    # def __init__(self):
    #     self.area
    #     self.perimetro


class Quadrado(FiguraGeometrica):
    def __init__(self, lado):
        self.lado = lado

    def area(self):
        return self.lado * self.lado

    def perimetro(self):
        return self.lado * 4


class Retangulo(FiguraGeometrica):
    def __init__(self, lado, altura):
        self.lado = lado
        self.altura = altura

    def area(self):
        return self.lado * self.altura

    def perimetro(self):
        return self.lado * 2 + self.altura * 2


class Circulo(FiguraGeometrica):
    def __init__(self, raio):
        self.raio = raio

    def area(self):
        return PI * self.raio * self.raio

    def perimetro(self):
        return 2 * PI * self.raio
