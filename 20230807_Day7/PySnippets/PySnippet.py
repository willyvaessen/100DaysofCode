import tkinter as tk
from tkinter import messagebox
import json
import pyperclip

# Create a JSON file to store snippets
snippets_file = "snippets.json"

# Define functions
def add_snippet():
    title = title_entry.get()
    text_body = text_body_entry.get("1.0", tk.END).strip()
    category = category_entry.get()

    if not title or not text_body:
        messagebox.showwarning("Warning", "Please enter both title and text body.")
        return

    snippet = {"title": title, "text_body": text_body}

    if category:
        snippet["category"] = category

    try:
        with open(snippets_file, "r") as file:
            snippets = json.load(file)
    except FileNotFoundError:
        snippets = []

    snippets.append(snippet)

    with open(snippets_file, "w") as file:
        json.dump(snippets, file)

    # Call populate_listbox() after adding the snippet
    populate_listbox()

    messagebox.showinfo("Success", "Snippet added successfully!")
    title_entry.delete(0, tk.END)
    text_body_entry.delete("1.0", tk.END)
    category_entry.delete(0, tk.END)

# Define function to copy the selected snippet's text body to the clipboard
def copy_text_to_clipboard():
    selected_index = snippets_listbox.curselection()
    if selected_index:
        with open(snippets_file, "r") as file:
            snippets = json.load(file)
        selected_snippet = snippets[selected_index[0]]
        text_body = selected_snippet["text_body"]
        pyperclip.copy(text_body)
        messagebox.showinfo("Success", "Text copied to clipboard!")

# Function to populate the listbox with snippet titles
def populate_listbox():
    snippets_listbox.delete(0, tk.END)  # Clear the listbox
    try:
        with open(snippets_file, "r") as file:
            snippets = json.load(file)
    except (FileNotFoundError, json.JSONDecodeError):
        snippets = []

    for snippet in snippets:
        snippets_listbox.insert(tk.END, snippet["title"])


# Initialize the tkinter app
app = tk.Tk()
app.title("Snippet Manager")

# GUI elements for adding snippets
tk.Label(app, text="Title:").grid(row=0, column=0, padx=5, pady=5)
title_entry = tk.Entry(app)
title_entry.grid(row=0, column=1, padx=5, pady=5)

tk.Label(app, text="Text Body:").grid(row=1, column=0, padx=5, pady=5)
text_body_entry = tk.Text(app, wrap=tk.WORD, height=6)
text_body_entry.grid(row=1, column=1, padx=5, pady=5)

tk.Label(app, text="Category (optional):").grid(row=2, column=0, padx=5, pady=5)
category_entry = tk.Entry(app)
category_entry.grid(row=2, column=1, padx=5, pady=5)

add_button = tk.Button(app, text="Add Snippet", command=add_snippet)
add_button.grid(row=3, column=0, columnspan=2, padx=5, pady=5)

# GUI elements for displaying snippets
tk.Label(app, text="Snippets:").grid(row=4, column=0, padx=5, pady=5)
snippets_listbox = tk.Listbox(app, selectmode=tk.SINGLE)
snippets_listbox.grid(row=4, column=1, padx=5, pady=5)

populate_listbox()

copy_button = tk.Button(app, text="Copy Text", command=copy_text_to_clipboard)
copy_button.grid(row=5, column=0, columnspan=2, padx=5, pady=5)

# Function to handle the main loop of the application
def run_app():
    app.mainloop()

if __name__ == "__main__":
    # Start the main loop
    run_app()
