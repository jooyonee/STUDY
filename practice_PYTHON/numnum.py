# numpy 

import numpy as np

a = np.array([0, 1, 2])
b = np.array([1, 4, 5])

print(a+b)


c = [5, 6, 7]
d = [8, 9, 10]

print(c+d)


A = []
for i in range(2):
    line = []
    for j in range(3):
        if i == 0:
            line.append(j+1)
        else:
            line.append(j+4)
    
    A.append(line)

print(A)

A = np.array(A)

# 전치행렬 : 행과 열을 바꿈
B = A.T
print(B)
print(B.shape)


C = np.array([[1, 2], [3, 4], [5, 6]])

for i in range(len(C)):
    print(C[i])