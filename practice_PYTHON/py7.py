###################### break, continue #######################

i = 0
while i < 10:
    print(i)
    i += 1

print('---------------------------')

i = 0
while True:  # 무한루프
    print(i)
    i += 1
    if i == 7:
        break

print('---------------------------')

for i in range(10):
    print(i)
    if i == 5:
        break
print('---------------------------')


# continue
for i in range(1,100,2):
    print(i)

print('---------------------------')

for i in range(10):
    if i % 2 == 0:    # i 나누기 2의 나머지가 0 이면 (짝수이면)
        continue      # 아래 코드 실행을 건너뛴다.
    print(i)

print('---------------------------')

i = 0
while i < 10:
    i += 1
    if i % 2 == 0:
        continue
    print(i)

print('---------------------------')

c = int(input('반복할 횟수를 입력하세요: '))
i = 0
while True:
    print(i)
    i += 1
    if i == c:
        break

print('---------------------------')

d = int(input('반복할 횟수를 입력하세요: '))
i = 0
while True:
    i += 1
    if i == d:
        break
    if i % 2 == 0:
        continue
    print(i)

print('---------------------------')

count = int(input())
for i in range(count + 1):
    if i % 2 == 0:
        continue
    print(i)

print('---------------------------')

for i in range(1, 11):
    if i % 3 == 0:
        continue
    print(i)

print('---------------------------')

i = 0
while True:
    if i % 10 != 3:
        i += 1
        continue
    if i > 73:
        break
    print(i, end=' ')
    i += 1 

print('---------------------------')

# 심사문제
start, stop = map(int, input().split())

i = start

while True:
    if i % 10 == 3:
        i += 1
        continue
    if i > stop:
        break
    print(i, end=' ')
    i += 1



    ######################## 중첩 루프 #########################

for i in range(5):
    for j in range(5):
        print(j, sep=' ', end=' ')
    print(i, '\\n', sep='')

print('---------------------------')

for i in range(5):
    for j in range(5):
        print('*', end='')
    print()

print('---------------------------')

for i in range(5):
    for j in range(5):
        if j == i:
            print('*', end='')
        else:
            print(' ', end='')
    print()

print('---------------------------')

for i in range(5):
    for j in range(5):
        if j >= i:
            print('*', end='')
        else:
            print(' ', end='')
    print()

print('---------------------------')

h = int(input())
for i in range(h):
   
    for j in reversed(range(h)):
        if j > i:
            print(' ', end='')
        else:
            print('*', end='')
            
    for j in range(h):
        if j < i:
            print('*', end='')
    
    print()