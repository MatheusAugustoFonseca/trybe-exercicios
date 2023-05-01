import csv

# para fazer a leitura do arquivo
with open("graduacao_unb.csv", encoding="utf-8") as file:
    graduacao_reader = csv.reader(file, delimiter=",", quotechar='"')
    header, *data = graduacao_reader

# print(data)

# analizando dados:

group_by_departament = {}
for row in data:
    departament = row[15]
    if departament not in group_by_departament:
        group_by_departament[departament] = 0
    group_by_departament[departament] += 1

# Escreve o relatório em .csv
# Abre um arquivo para escrita
with open("department_report.csv", "w", encoding="utf-8") as file:
    writer = csv.writer(file)

    # Escreve o cabeçalho
    headers = [
        "Departamento",
        "Total de Cursos",
    ]
    writer.writerow(headers)

    # Escreve as linhas de dados
    # Desempacotamento de valores
    for department, grades in group_by_departament.items():
        # Agrupa o dado com o turno
        row = [
            department,
            grades,
        ]
        writer.writerow(row)
