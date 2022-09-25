## 13. IF문 ~ 15. ##
x = 10
if x == 10:
    print('x에 들어있는 숫자는')
    print('10입니다.')

if x != 10:
    pass  # 아무것도 하지 않음.

y = 15
if y >= 10:
    print('10이상입니다.')

    if y == 15:
        print('15입니다.')

    if y == 20:
        print('20입니다.')


#n = int(input())
#if n >= 10:
#    print('10 이상입니다.')

#if n < 10 :
#    print('10 미만입니다.')


# 연습문제 13.6
x = 5
if x != 10:
    print('ok')

# 심사문제 13.7
#p = int(input())
#c = input()
#if c == 'Cash3000':
#    print(p -3000)
#if c == 'Cash5000':
#    print(p -5000)    



## else ##
x = 5
if x == 10:
    print('this is 10')
else:
    print('this is not 10')

if True:
    print('참')    # True는 참
else:
    print('거짓')
 
if False:
    print('참')
else:
    print('거짓')    # False는 거짓
 
if None:
    print('참')
else:
    print('거짓')    # None은 거짓

if x >0:
    if x < 20:
        print('20보다 작은 양수입니다.')

# 연습문제 14.6
written_test = 75
coding_test = True
if written_test >= 80 and coding_test == True:
    print('합격')
else:
    print('불합격')

# 심사문제 14.7
#g = list(map(int, input().split()))
#if 0<=g[0]<=100 and 0<=g[1]<=100 and 0<=g[2]<=100 and 0<=g[3]<=100:
#    if ((g[0]+g[1]+g[2]+g[3])//4) >= 80:
#        print('합격')
#    else:
#        print('불합격')
#else:
#    print('잘못된 점수')



## elif ##
# 연습문제 15.3
#x = int(input())
#if 11<= x <=20:
#    print('11~20')
#elif 21<= x <= 30:
#    print('21~30')
#else:
#    print('아무것도 해당하지 않음')

# 심사문제 15.4
age = int(input())
balance = 9000
if 7<= age <=12:
    balance -= 650
elif 13<= age <=18:
    balance -= 1050
else:
    balance -= 1250
print(balance)


