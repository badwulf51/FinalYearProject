from Conv2d import *
from Maxpooling import *
from flatten import *
from Dense import *



class CNN():

    def __init__():

        conv1 = conv2d()
        Max1 = maxPooling(conv1)

        conv2 = conv2d(Max1)
        Max2 = MaxPooling(conv2)

        conv3 = conv2d(Max2)
        Max3 = MaxPooling(conv3)

        Dropout1 = Dropout(MAx3)

        flat1 = Flatten(Dropout1)

        Dense1 = Dense(flat1)
        Dense2 = Dense(Dense1)
