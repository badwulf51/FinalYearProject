import numpy as np
import cv2
import glob as glob
import os

class LoadImage:



	
	#print(os.listdir('C:/Users/Owner/4thYear/MainProject/ImageRecNN/input/fruits-360'))
	#path = 'C:/Users/Owner/4thYear/MainProject/ImageRecNN/input/fruits-360/Training/*'

	def loadTrainingData():
		path = 'C:/Users/Owner/4thYear/MainProject/ImageRecNN/input/fruits-360/Training/*'
		img_size = 64
		training_fruit_img = []
		training_label = []

		for i in glob(path):
			img_label = i.split("/")[-1]
			for img_path in glob(os.path.join(i, "*.jpg")):
				img = cv2.imread(img_path)
				img = cv2.resize(img, (64,64))
				training_fruit_img.append(img)
				training_label.append(img_label)
				training_fruit_img = np.array(training_fruit_img).astype('float32')
				training_fruit_img /= 255.0
		training_label = np.array(training_label)
		print(len(np.unique(training_label)))

		label_to_id = {v : k for k, v in enumerate(np.unique(training_label))}
		id_to_label = {v : k for k, v in label_to_id.items()}


		training_label_id = np.array([label_to_id[i] for i in training_label])

		return training_fruit_img, training_label_id