## while 반복문 ##  반복 횟수가 정해져있지 않을때 유용!!!!
i = 1
while i <= 10:
    print('Hello world!')
    i += 1

count = int(input())
i = 1
while i <= count:
    print('hello world', i)
    i += 1

count=int(input())
while count > 0:
    print('hello world', count)
    count -= 1



import random

# random.randint( , ) (범위)
i = 0
while i != 3:
    i = random.randint(1,6)
    print(i)

print()
# random.choice()
dice = [1, 2, 3, 4, 5, 6]
print(random.choice(dice))

# 연습문제
i = 2
j = 5
while i < 33 or j > 0:
    print(i, j)
    i *= 2
    j -= 1

c = int(input())
while c >= 1350:
    c -= 1350
    print(c)
