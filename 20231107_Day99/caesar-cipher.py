# Found this app in https://github.com/anosike1 and wanted to check it out.
# It is NOT my own code, so all credits should go to anosike1

# import tkinter
from tkinter import *

window = Tk()
window.title("CAESAR CIPHER")

labl = Label(text="What's the word? ")
labl.grid(column=0, row=1)

lab2 = Label(text="What's the shift number? ")
lab2.grid(column=0, row=2)

lab3 = Label(text="", font=('Courier', 20, "bold"))
lab3.grid(column=1, row=4)

entry1 = Entry()
entry1.grid(column=1, row=1)

entry2 = Entry()
entry2.grid(column=1, row=2)

alph = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
        'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']


# Define the Encrypt function
def encrypt():
    x = entry1.get().upper()

    if bool(entry2.get()) == True:
        y = entry2.get()
    else:
        y = 0

    new_word = ""
    for letter in x:
        position = alph.index(letter)
        new_position = position + int(y)
        new_letters = alph[new_position]
        new_word += new_letters

    lab3.config(text=f"YOUR ENCRYPTED WORD IS {new_word}")


# Define the Decrypt function
def decrypt():
    x = entry1.get().upper()

    if bool(entry2.get()) == True:
        y = entry2.get()
    else:
        y = 0

    new_word = ""
    for letter in x:
        position = alph.index(letter)
        new_position = position - int(y)
        new_letters = alph[new_position]
        new_word += new_letters

    lab3.config(text=f"YOUR DECRYPTED WORD IS {new_word}")


btn1 = Button(text="Encrypt", command=encrypt)
btn1.grid(column=2, row=1)

btn2 = Button(text="Decrypt", command=decrypt)
btn2.grid(column=2, row=2)

mainloop()