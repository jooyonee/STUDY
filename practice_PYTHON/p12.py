
####################### 세트 ####################
fruits = {'strawberry', 'grape', 'orange', 'pineapple', 'cherry'}


x = set(range(5))
x = set('apple')
x = set()
print(x)

frozenset(frozenset())



## 세트 연산

a = {1, 2, 3}
b = {2, 3, 5}

print(a | b)     # set.union(a, b) : 합집합
a |= {5}
a.update({5})

print(a & b)     # set.intersection(a, b)
a &= {5}
a.intersection_update({5})

print(a - b)     # set.difference(a, b)
a.difference_update({})

print(a ^ b)     # set.symmetric_difference(a, b)
a.symmetric_difference_update({})


a.issubset({     })
a <= {        }

a.issuperset({})

a.isdisjoint


a.adda
a.remove
a.discard
a.pop
a.clear
len(a)





# 연습문제 26.8

a = {i for i in range(1, 101) if i % 3 == 0}
b = { j for j in range(1, 101) if j % 5 == 0}


print(a & b)















