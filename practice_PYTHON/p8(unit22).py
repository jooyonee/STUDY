############# Unit 22. 리스트와 튜플 응용하기 _ 리스트 응용 ##############

# 리스트 메서드(method)


a = [10, 20, 30]

a.append(500)  # append : 리스트 맨 끝에 요소 하나 추가

a.append([1, 2, 3])  # 중첩 리스트

a.extend(['x', 'y', 'z'])  # 리스트 확장

a.insert(0, 100)  # 특정 Index에 요소 추가 -> a[0]에 100 추가
a.insert(len(a), 1000)  # 리스트 맨 끝에 요소 추가

a[1:1] = [500, 600]

a[len(a):] = [500]



a = [1, 2, 3, 4, 5, 6]
a.pop()  # 마지막 요소 삭제 & 반환
a.pop(2)
del a[1]

a.remove(5)  # 특정 요소 삭제 (같은 요소 있을 시 처음 것 삭제)



a.index()
a.count()
a.reverse()

a.sort()  # 요소 오름차순 정렬
a.sort(reversed=True)
min(a) / max(a)  # 최소 / 최대 값 출력

a.clear()
del a[:]
print(a)

a = [0, 0, 0, 0]
b = a.copy(1)



# for 반복문으로 리스트 요소 출력하기
a = list(range(1,11))
for i in a:
    print(i)

for index, value in enumerate(a):
    print(index, value)

for index, value in enumerate(a, start=1):  # enumerate(a, 1)
    print(index, value)


a = list(range(21,26))
for i in range(len(a)):
    print(a[i])

a = []
for i in range(5):
    a.append(10)
print(a)
x = 0
for i in a:
    x += i
print(x)       # 리스트 요소 총합 구하기

sum(a)         # 리스트 요소 합계 함수



# while 반복문으로 리스트 요소 출력하기
b = list(range(31, 36))
i = 0
while i < len(b):
    print(b[i])
    i += 1


# for 반복문으로 리스트 생성하기 "list comprehension"
a = [i for i in range(10)]
b = list(i for i in range(10))


a = [i for i in range(10)]
print(a)

b = [i for i in range(11) if i % 2 == 0]
print(b)

c = [i+1 for i in range(11) if i % 2 == 1]
print(c)


# for 반복문으로 리스트 생성하기

# 구구단 리스트
a = [i * j for i in range(2,10)
           for j in range(1,10)]
print(a)

# 리스트 요소 실수-> 정수 변환
a = [1.2, 2.5, 3.7, 4.6]
for i in range(len(a)):
    a[i] = int(a[i])
print(a)

a = [2.5, 1.3, 3.7, 4.6]
a = list(map(int, a))
print(a)

a = map(int, input().split())
print(a)

print(list(a))




############# Unit 22. 리스트와 튜플 응용하기 _ 튜플 응용 ##############

# 연습문제 22.9

a = ['alpha', 'bravo', 'charlie', 'delta', 'echo', 'foxtrot', 'golf', 'hotel', 'india']

b = [a[i] for i in range(len(a)) if len(a[i]) == 5]
print(b)

b = [i for i in a if len(i) == 5]
print(b)


# 심사문제
a, b = map(int, input().split())

c = [2 ** i for i in range(a, b+1)]
del c[1]
del c[-2]
print(c)


