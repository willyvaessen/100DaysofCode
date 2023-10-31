# Write overwrites the data in a file, if anything is already there.
# Append adds data to the file.

writeMe = 'More Example text'

# saveFile = open('exampleWrite.txt', 'w')
# saveFile.write(writeMe)
# saveFile.close()

appendMe = 'Some text to append'


saveFile = open('exampleWrite.txt', 'a')
saveFile.write('\n')
saveFile.write(appendMe)
saveFile.close()