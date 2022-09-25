today = "2022.05.19"
terms = ["A 6", "B 15", "C 3"]
privacies = ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]


def add_date(date, dict_privacies, priv):
   year = int(date.split('.')[0])
   month = int(date.split('.')[1])
   day = int(date.split('.')[2])
   
   adding_month = int(dict_privacies[priv])
   month += adding_month
   while month > 12:
      year += 1
      month -= 12
   day -= 1
   if day == 0:
      day = 28
      month -= 1
   if month == 0:
      month = 12
      year -= 1
   return (year, month, day)

def solution(today, terms, privacies):
   answer = []
   
   year = int(today.split('.')[0])
   month = int(today.split('.')[1])
   day = int(today.split('.')[2])


   i = 0
   temp = {}
   while (i < len(terms)):
      temp[terms[i].split()[0]] = terms[i].split()[1]
      i += 1
   i = 0
   while (i < len(privacies)):
      swit = -1
      temp_year, temp_month, temp_day = add_date(privacies[i].split()[0], temp, privacies[i].split()[1])
      if year > temp_year:
         swit = 1
      if year == temp_year and month > temp_month:
         swit = 1
      if (year == temp_year and month == temp_month) and day > temp_day:
         swit = 1

      if swit == 1:
         answer.append(i + 1)
      i += 1
   return answer


print(solution(today, terms, privacies))
