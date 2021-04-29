from random import randint
from time import sleep
itens = ('Pedra','Papel','Tesoura')
computador = randint(0,2)
print('''Suas opções:
[0]PEDRA
[1]PAPEL
[2]TESOURA
''')
jogador = int(input('Qual é a sua jogada? '))
print('JO')
sleep(1)
print('KEN')
sleep(1)
print('PO!!!')
sleep(1)
print('-=' * 11)
print('O computador jogou {}'.format(itens[computador]))
print('Você jogou {}'.format(itens[jogador]))
print('-=' * 11)
if computador == 0: #computador jogou pedra
    if jogador == 0:
        print('Empate!')
    elif jogador == 1:
        print('Você ganhou!')
    elif jogador == 2:
        print('O computador ganhou!')
    else:
        print('OPÇÃO INVALIDA TENTE OUTRA (pedra,papel ou tesoura)')
if computador == 1: #computador jogou papel
    if jogador == 0:
        print('O computador ganhou!')
    elif jogador == 1:
        print('Empate!')
    elif jogador == 2:
        print('Você ganhou!')
    else:
        print('OPÇÃO INVALIDA TENTE OUTRA (pedra,papel ou tesoura)')
if computador == 2: #computador jogou tesoura
    if jogador == 0:
        print('Você!')
    elif jogador == 1:
        print('O computador ganhou!')
    elif jogador == 2:
        print('Empate!')
    else:
        print('OPÇÃO INVALIDA TENTE OUTRA (pedra,papel ou tesoura)')
