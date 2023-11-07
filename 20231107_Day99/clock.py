# Found this app in https://github.com/anosike1 and wanted to check it out.
# It is NOT my own code, so all credits should go to anosike1

# import tkinter and time
from tkinter import *
from time import *

root = Tk()
root.title("Clock")


# define a time function to return the time
def time():
    string = strftime("%I:%M:%S %p")

    # this function will update the label
    my_label.config(text=string)
    # ... and will be called every second
    my_label.after(1000, time)


# format the text on screen and set it the center
my_label = Label(root, font=("courier", 80), background="black", foreground="cyan")
my_label.pack(anchor="center")

# call the time function
time()

# start the program
mainloop()
