#################### 파일 #######################

# 쓰기
f = open('hello.txt', 'w')
f.write('Hello, world!')
f.close()

# 읽기
f = open('hello.txt', 'r')
print(f.read())
f.close()

# 자동으로 파일 닫기
with open('hello.txt', 'r') as f:
    s = f.read()
    print(S)



lines = ['안녕하세요.\n', '파이썬\n', '코딩 도장입니다.\n']
with open('hello.txxt', 'w') as file:
    file.writelines(lines)



with open('hello.txt', 'w') as file:
    for i in range(3):
        file.write('hello python {0}\n'.format(i))



with open('hello.txt', 'r') as file:
    line = None
    while line != '':
        line = file.readline()
        print(line.strip('\n'))


with open('hello.txt', 'r') as file:
    for line in file:
        print(line.strip('\n'))
        



####################pickle
import pickle

name = 'james'
age = 17
address = '서울시 광진구'
scores = {'국어':90, '영어':80, '수학':100}

with open('grade.p', 'wb') as file:
    pickle.dump(name, file)
    pickle.dump(age, file)
    pickle.dump(address, file)
    pickle.dump(scores, file)

