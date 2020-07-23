# referenced:
# https://github.com/custom-build-robots/Stepper-motor-28BYJ-48-Raspberry-Pi/blob/master/decision-maker.py

# this code is for driving a 28BYJ-48 DC stepepr

from lamp_control_utils import *
from lamp_state import *

initGpioPins()

lamp_is_on = is_lamp_on()

def turn_lamp_on():
    if (not lamp_is_on):
        stepper_clockwise(60)
        set_lamp_state("on")

def turn_lamp_off():
    if (lamp_is_on):
        stepper_counter_clockwise(60)
        set_lamp_state("off")