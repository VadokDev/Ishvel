import suprametric

suprametric.main('''
contador = int(input())

while (contador > 5):
    if (contador % 2 == 0):
        print("par")
    else:
        print("impar")

    contador -= 1

''')
