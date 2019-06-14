import numpy as np


class conv2d:
    # need to initialise the conv2d layer(using same params used in tensorflowCNN)
    def __init__(self,filters,height_filter, width_filter,kernel_size,input_shape,strides, padding):
        

        self.filters = filters
        self.kernel_size = kernel_size
        self.Height, self.width, self.channels = input_shape

        self.strides = strides
        self.padding = padding
        #set weights randomly, 
        self.weights = np.random.rand(filters + self.Height, self.width, self.channels) / np.sqrt(filters)
        self.bias = np.zeros((self.filters,1))

        self.h_out = (self.h_X - h_filter + 2 * padding) / stride + 1
        self.w_out = (self.w_X - w_filter + 2 * padding) / stride + 1

        if not self.h_out.is_integer() or not self.w_out.is_integer():
            raise Exception("Invalid dimensions!")

        self.h_out, self.w_out = int(self.h_out), int(self.w_out)
        self.out_dim = (self.n_filter, self.h_out, self.w_out)
        #need to set weights out

        #need to set up forward pass and backpass
    def forward():
        return "test"


    def backward():
        return "test"