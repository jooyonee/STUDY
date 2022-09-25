#!/usr/bin/python3

## 11. 시퀀스 자료형 ##
from tkinter import N


a = list(range(10))
print(a)

if 100 in a:
    print(True)
if 100 not in a:
    print(False)

print(list(range(5))*3)

# 리스트 길이(요소 개수)
len(a) # a리스트의 요소 개수
hello = 'hello, python'
b = len(hello)
print(b)

#인덱스Index (0부터 시작!) : 요소에 접근하기
a = list(range(10,30,3))
print(a)
print(a[0])
print(a[-2])  # 뒤에서 2번째 요소 출력!
print(a[len(a) -1])  # len(a)를 이용한 마지막 요소 출력!

a = [0, 0, 0, 0]  # 요소에 값 할당하기 
# 튜플, range, 문자열은 안 됨!ㅎㅎ -> 읽기전용
n = int(input())
a[0] = n
a[1] = n+1
a[2] = n+2
a[3] = n+3
print(a)

print(a[0:2]) # 슬라이스 -> 새로운 리스트 생성 (모든 자료형 가능)

f = list(range(11))
print(f[:7]) # 시작 인덱스 생략
print(f[3:]) # 끝 인덱스 생략
print(f[:]) # 인덱스 모두 생략 -> 전체 리스트 가져옴
print(f[0:len(f)]) # 리스트 전체

a = list(range(0,100,10))
a[2:5] = ['o', 'p', 'q'] # 개수 안 맞춰도 됨! (개수 모자르면 요소 개수 줄어듦.)
print(a)

a[2:8:2] = ['r','s','t'] # 증가폭 지정시에는 요소 개수 일치해야 함! (ValueError)
print(a)

del (a[2], a[3], a[4]) # 요소 하나 삭제할때마다 새로운 리스트 생성..
print(a)

year = list(range(2011,2019,1))
population = [10249679, 10195318, 10143645, 10103233, 10022181, 9930616, 9857426, 9838892]
print(year[-3:])
print(population[-3:])

n = -32, 75, 97, -10, 9, 32, 4, -15, 0, 76, 14, 2
print(n[1::2])

# 심사 문제 11.8
x = input().split()
del x[-5:]
print(tuple(x))

# 심사 문제 11.9
a = input()
b = input()
print(a[1::2]+b[0::2])



