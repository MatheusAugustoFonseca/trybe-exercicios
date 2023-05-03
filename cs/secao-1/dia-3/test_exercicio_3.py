from exercicio_3 import verify_email
import pytest


# username test
def test_email_can_only_have_letters():
    assert verify_email("teste@nomedodominio.ext") is None


def test_email_can_only_have_letters_and_digits():
    assert verify_email("teste123@nomedodominio.ext") is None


def test_email_can_only_have_letters_digits_and_dashes():
    assert verify_email("teste-123@nomedodominio.ext") is None


def test_email_can_only_have_letters_digits_and_underscore():
    assert verify_email("te_ste-123@nomedodominio.ext") is None


def test_email_start_with_letters():
    assert verify_email("teste@nomedodominio.ext") is None


def test_email_dont_start_with_letters():
    with pytest.raises(ValueError):
        verify_email("1234@nomedodominio.ext")


def test_email_is_invalid():
    with pytest.raises(ValueError):
        verify_email("%teste@nomedodominio.ext")


# dominio test
def dominio_email_only_has_letters():
    assert verify_email("teste@nomedodominio.ext") is None


def dominio_email_only_has_letters_and_digits():
    assert verify_email("teste123@nomedodomi123.ext") is None


def dominio_email_is_invalid():
    with pytest.raises(ValueError):
        verify_email("teste@#omedodominio.ext")


def extensions_should_have_only_3_chars():
    assert verify_email("teste@nomedodomi.com") is None


def extensions_email_is_invalid():
    with pytest.raises(ValueError):
        verify_email("teste@omedodominio.brrr")
