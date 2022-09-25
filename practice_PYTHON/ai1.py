############# 함수 ###############

## def
def mutable_immutable_fuc(x, y):
    x += 1
    y.append(100)

a = 1
b = [1, 2, 3]

mutable_immutable_fuc(a, b)

print(a, b)



## lambda
f = lambda x : x + 100    # f(x) = x+100 이라는 의미!!!

for i in range(3):
    print(f(i))


def print_hello():
    print("hello python")

def test_lambda(s, t):
    print(s, t)

fx = lambda x, y : print_hello()
fy = lambda x, y : test_lambda(10, 20)

fx(1, 2)
fy(3, 4)

print(fx, fy)


## class

class Person:
    def __init__(self, name):
        self.name = name
        print(self.name + "is initialized")



###### f'(x) 를 파이썬으로 구하기!!!! ######

def numerical_derivative(f, x):
    delta_x = 1e-4   # lim에 해당되는 매우 작은 값. (0에 수렴하는)
    return  (f(x+delta_x) - f(x-delta_x)) / (2*delta_x)


# [예제1] f(x) = x**2 일 때, f(3)을 구하여라.
def numerical_derivative(f, x):
    delta_x = 1e-4   # lim에 해당되는 매우 작은 값. (0에 수렴하는)
    return  (f(x+delta_x) - f(x-delta_x)) / (2*delta_x)

def my_func1(x):
    return x**2

result = int(numerical_derivative(my_func1, 3))
print('미분한 결과는 다음과 같습니다.', result, sep='\n')




