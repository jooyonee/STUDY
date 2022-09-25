## Unit 12. 딕셔너리 ##       *키 = 문자열!!
lux = {'health': 490, 'mana': 334, 'melee': 550, 'armor': 18.72}
print(lux)

# 빈 딕셔너리
x = {}
y = dict()

# dict()로 딕셔너리 만드는 방법
lux1 = dict(health=490, mana=334, melee=550, armor=18.72)
print(lux1)

lux2 = dict(zip(['HP', 'MP', 'ML', 'AM'], [490, 334, 550, 18.7]))
print(lux2)

lux3 = dict([('health', 490), ('mana', 334), ('melee', 550), ('armor', 18.72)])
print(lux3)

lux4 = dict({'HP' : 490, 'MP' : 334})
print(lux4)

print(lux['health'])

# 연습문제 12.4
x = input().split()
y = map(float, input().split())  # 입력 값 실수로 할당
print(dict(zip(x,y)))
