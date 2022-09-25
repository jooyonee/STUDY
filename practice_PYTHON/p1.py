#!/usr/bin/python3
print('hello world!')

## 실수 연산  # machine epsilon  # python3.5이상 -> math.isclose
import math, sys
from tkinter import N
from tkinter.ttk import Separator
x = 0.1+0.2
if math.fabs(x-0.3) <= sys.float_info.epsilon:
    print('true')
# 두 수의 차가 (sys.float_info.epsilon) 보다 작거나 같으면 두 값은 같다고 본다.
# math.fabs(연산) -> 절댓값 만드는 함수
# /의 결과는 실수, //의 결과는 정수!!

# 연습문제 5.5 (아파트 소음 가장 심한 층수 출력)
x = int(0.2467 * 12 + 4.159)
print (x)

# 심사문제 5.6 (스킬 공격력 출력)
print(102 * 0.6 + 225)

## 변수 ##
# a = a + 20
a = 10
a += 20
print(a)

# a, b = int(input('숫자 두 개를 입력하세요: ').split())
# print(a+b)

# 정수로 바로 만듦 : a, b = map(int, input('숫자 두 개를 입력하세요: ').split(','))
# print(a+b)
 
# a, b, c = map(int, input().split())
# print(a + b + c)

print(4, 5, 6, sep='')
print(1, 2, 3, sep='\n')
print('1\n2\n3')
print(11, end='')
print(12, end=' ')
print(13)

print(16, 9, sep=':')
print('\n', end='')
print('a')
print('hello\npython')

year = 2022
month = 7
day = 5
hour = 20
minute = 54
second = 51
print(year, month, day, sep='/', end=' ')
print(hour, minute, second, sep=':')

## 8. 비교, 논리 연산자 ##
# is / is not -> 객체 비교시 사용
# = / != -> 값 비교시 사용

# not -> and -> or 순으로 판단
print(not True and False or not False)

#심사문제 8.5 합격 여부 출력하기
# korean, english, mathematics, science = map(int, input().split())
# print(korean >=80 and english >80 and mathematics >90 and science >=85)

print()
## 9. 문자열 출력하기 ##
single_quote = '''"안녕하세요."
'파이썬'입니다.'''
double_quote = """hello,
'Python'"""

print (single_quote)
print (double_quote)
print('''hello 
python''')

s1 = 'Python is a programming language that lets you work quickly\nand\nintegrate systems more effectively.'
print(s1)
s2 = '''Python is a programming language that lets you work quickly
and
integrate systems more effectively.'''
print(s2)

print()
## 리스트 ##
# range(횟수)
range(10) # = range(0,10)
a = list(range(10))
print(a)

range(5, 12) # 5부터 12까지 출력
b = list(range(1, 10, 2))
print(b)

print('\n<tuple>')
## 튜플 ## = 읽기 전용 리스트! 요소가 변경되면 안 될때 사용! 
# #함수 사용 시 값이 아닌 튜플 사용해야 할 때!
(38, ) # -> 한개짜리 튜플
38, 

a = list('Hello')
print(a)
b = tuple('Python')
print(b)

x = [1, 2, 3]
a, b, c = x
print(a, b, c)

# x = input().split()
# a, b = x
# print(a, b)

a = 10, 20, 30   #튜플
print(a)
b = list(range(10, 31, 10))   #리스트
print(b)
c = tuple(range(-10, 10, 3))   #튜플
print(c)

# 연습문제 10.4
a = list(range(5, -10, -2))
print(a)

# 심사문제 10.5
n = int(input()) <<< 변수 먼저 지정해줘야 함!
a = tuple(range(-10, 10, n))
print(a)

