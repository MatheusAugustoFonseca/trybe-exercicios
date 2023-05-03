from exercicio_1 import return_all_values


def test_return_all_values_should_return_number():
    assert return_all_values(7) == 7


def test_return_all_values_should_return_fizz():
    assert return_all_values(3) == 'Fizz'


def test_return_all_values_should_return_buzz():
    assert return_all_values(5) == 'Buzz'


def test_return_all_values_should_return_fizz_buzz():
    assert return_all_values(15) == 'FizzBuzz'