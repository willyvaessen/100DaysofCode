import statistics

admins = {'Python': 'Pass123@'}

studentDict = {'Jeff': [78, 88, 93],
               'Alex': [92, 76, 88],
               'Sam': [89, 92, 93]}


def enterGrades():
    nameToEnter = input('Student Name: ')
    gradeToEnter = input('Grade: ')

    if nameToEnter in studentDict:
        print("Adding grade...")
        studentDict[nameToEnter].append(float(gradeToEnter))
    else:
        print('Student does not exist.')

    print(studentDict)


def removeStudent():
    nametoremove = input('What student to remove? :')
    if nametoremove in studentDict:
        print('Removing student ...')
        del studentDict[nametoremove]
    print(studentDict)

def studentavgs():
    for eachStudent in studentDict:
        gradeList = studentDict[eachStudent]
        avgGrade = statistics.mean(gradeList)
        print(eachStudent,'has an average grade of',avgGrade)


def main():
    print("""
    Welcome to Grade Central
    
    [1] - Enter Grades
    [2] - Remove Student
    [3] - Student Average Grades
    [4] - Exit
    """)

    action = input('What would you like to do today? (Enter a number) ')

    if action == '1':
        enterGrades()
    elif action == '2':
        removeStudent()
    elif action == '3':
        studentavgs()
    elif action == '4':
        exit()
    else:
        print('Invalid option, try again!')


login = input('Enter your username: ')
passw = input('Enter your password: ')

if login in admins:
    if admins[login] == passw:
        print('Welcome,', login)
        while True:
            main()
    else:
        print('Invalid password.')
else:
    print('Invalid username, calling the FBI to report this')
