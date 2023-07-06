import pandas as pd


def foi_aprovado(media):
    if media >= 7:
        return "aprovado"
    else:
        return "reprovado"


dicionario_de_notas = {
    "nome": ["Maria", "João", "Fernanda", "Túlio"],
    "primeira_nota": [9, 8, 7, 8],
    "segunda_nota": [8, 7, 9, 3]
    # "média": [8.5, 7.5, 8, 5.5]
}

meu_primeiro_dataframe = pd.DataFrame(dicionario_de_notas)
meu_primeiro_dataframe["média"] = (
    meu_primeiro_dataframe["primeira_nota"]
    + meu_primeiro_dataframe["segunda_nota"]
) / 2
meu_primeiro_dataframe["aprovado"] = meu_primeiro_dataframe["média"].apply(
    foi_aprovado
)

# print(meu_primeiro_dataframe)
# print(meu_primeiro_dataframe["nome"])
# print(meu_primeiro_dataframe.shape)
# print(meu_primeiro_dataframe.columns)
# print(meu_primeiro_dataframe.describe())
# print(meu_primeiro_dataframe.info())
# print(meu_primeiro_dataframe.head(2))
# print(meu_primeiro_dataframe.tail(2))
print(meu_primeiro_dataframe["primeira_nota"].unique())





