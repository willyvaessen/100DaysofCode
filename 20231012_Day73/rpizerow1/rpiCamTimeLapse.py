from picamera import PiCamera
from time import sleep
import datetime
import os

now = datetime.datetime.now()

cam = PiCamera()

while True:
    sleep(60)
    timestamp = datetime.datetime.now().strftime("%Y%m%d%H%M%S")
    pathTo = '/mnt/nassi'
    folder_to_save = "rpizerow1"
    file_name = timestamp + '.jpg'
    saveLocation = os.path.join(pathTo, folder_to_save, file_name)

    print(timestamp)
    cam.capture(saveLocation)
