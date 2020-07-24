# note: for CRON these file paths will fail, you need a full path eg. /home/pi/etc...
def is_lamp_on():
    f = open("lamp_state.txt", "r")
    file_contents = f.read()
    if (file_contents is None or file_contents == "off"):
        return False
    return True

# onOff is on or off, terrible name
def set_lamp_state(onOff):
    f = open("lamp_state.txt", "w")
    f.write(onOff)