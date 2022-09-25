

print('Hello world!')
print('Hello world!'.replace('world', 'python'))




# 변환 테이블
table = str.maketrans('abcde', '12345')
print('apple'.translate(table))


# 문자열 분리 -> 리스트로 만들어줌
print('a b c d e f g'.split())

a = ['apple', 'pear', 'grape']
print(' '.join(a))

print(a[0].upper())


# lstript() / rstript() / strip()
# ljust() / rjust() / center()
# zfill()
# find('문자열') / rfind() / index() / rindex()
# count('문자열')




print('내 점수는 %.1f 입니다.' %2.4446)
print('%10d' %2.24)


name = input()
grade = int(input())
print('%s의 점수는 %d점 입니다.' %(name, grade))


    
print('Hello, {1}'.format('world!', 'python'))

'Hello, {language} {version}'.format(language='Python', version=3.6)




# 연습문제
path = 'C:\\Users\\dojang\\AppData\\Local\\Programs\\Python\\Python36-32\\python.exe'

a = path.split('\\')

filename = a[-1]

print(filename)



print('1\n2\n3\n')
print(r'1\n2\n')   # raw 문자열





# 심사문제 

x = input()

a = x.count('the ')
b = x.count('the.')
c = x.count('the,')
print(a+b+c)


# 다른 풀이

words = input().split()
print(words)

a=[]
for i in range(len(words)):
    a.append(words[i].strip(',.'))

p = 0
for j in a:
    if j == 'the':
        p += 1
    else:
        pass
print(p)




# 심사문제2

price = input().split(';')

a = map(int, price)
a = list(a)

a.sort(reverse=True)  # 내림차순

for i in a:
    print('%9s' % format(i, ','))
    

price = input().split(';')
a = map(int, price)

a = list(a)





# 25 딕셔너리 응용

x.pop()
del x[]
x.popitem()
x.clear()
x.get()


# 리스트로 딕셔너리 생성
keys = ['a', 'b', 'c', 'd']
dict.fromkeys(keys)


# 기본값 지정 'defaultdict)
from collections import defaultdict

a = defaultdict(lambda: 'python')    # 기본값 = python




x = {'a': 10, 'b': 20, 'c': 30, 'd': 40}

for (key, value) in x.items():
    print(key, value)             # 키: 값 쌍 출력


keys = ['a', 'b', 'c']
y = {key: value for key, value in dict.fromkeys(keys).items()}
print(y)           # 딕셔너리 생성


## 중첩 딕셔너리
x = {'a': {'python': '2.7'}, 'b': {'python': '3.6'}}



a = x
a = x.copy() # 딕셔너리 복사 (중첩 딕셔너리에서는 같은 거로 복사됨.)

b = x.deepcopy() # 중첩 딕셔너리 내용물만 복사하는 방법 (새로운 디셔너리 생성)





# 25.7 연습문제 (평균 구하기)

maria = {'korean': 94, 'english': 91, 'mathematics': 89, 'science': 83}

average = sum(maria.values()) / len(maria)


print(average)





# 심사문제
keys = input().split()
values = map(int, input().split())

x = dict(zip(keys, values))

del x['delta']
x = {key: value for key, value in x.items() if value != 30}

print(x)


