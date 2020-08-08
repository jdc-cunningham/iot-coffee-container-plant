# this is a white LED that helps take pictures indoors
import RPi.GPIO as GPIO

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(5, GPIO.OUT)

GPIO.output(5, GPIO.LOW)