
col, row = map(int, input().split())

matrix = []

for i in range(row):
    matrix.append(list(input()))


for i in range(row):
    for j in range(col):
        
        if matrix[i][j] == '*':
            pass
        else:
            matrix[i][j] = 0

            for x in range(i-1, i+2):
                for y in range(j-1, j+2):
                    if x<0 or x >= row or y<0 or y >= col:
                        pass
                    elif matrix[x][y] == '*':
                        matrix[i][j] += 1



i = 0                          # matrix 모든 요소 행 별로 출력
while i < len(matrix):
    for j in matrix[i]:
        print(j, end='')
    print()
    i += 1



    























