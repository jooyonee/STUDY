## For 반복문 ##
for i in range(100):  # i변수 <- range(100)에서 숫자를 하나하나 꺼내서 반복
    print('Hello world!', i)  # range에서 꺼낸 숫자를 변수 i에 저장하고, 그때마다 코드 실행
# i = 루프 인덱스

for i in reversed(range(10)):
    print('latte', i)

n = int(input('반복할 횟수를 입력하세요: '))
for i in range(n):
    print('Hello world!')

a = list(range(10,60,10))
for i in a:
    print(i, end=' ')
print()

fruits = ('apple', 'orange', 'grape')
for fruit in fruits:
    print(fruit)

for letter in 'python':
    print(letter, end=' ')
print()
for letter in reversed('python'):
    print(letter, end=' ')

for i in range(20, 40, 2):
    print(i)

# 연습문제
x = [49, -17, 25, 102, 8, 62, 21]
for i in x:
    print(i*10, end=' ')

# 심사문제
n = int(input())
m = list(range(1,10))
for i in m:
    print(n, '*', i, '=', n*i)
