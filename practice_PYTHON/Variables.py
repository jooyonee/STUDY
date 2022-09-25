############## Variables ################


## 리스트 복사 차이 ##
# 1차원
a = list(range(1,6))
b = list(reversed(range(1,6)))
b = a # 두 리스트가 같아짐.
b = a[:] # 두 리스트 같아지지 않음. 요소만 복사

# 2차원
kor_score = [13, 114, 15, 90]
math_score = [90, 55, 68, 78]
mid_score = [kor_score, math_score]
mid_copy = mid_score[:] # 두 리스트가 같아짐.
mid_copy = copy.deepcopy(mid_score) # 요소만 복사
