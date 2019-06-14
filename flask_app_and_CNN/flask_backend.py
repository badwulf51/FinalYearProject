



from flask import render_template, flash ,jsonify, request, Flask
from keras.models import load_model
import tensorflow as tf
import cv2
import io
import numpy as np
import base64
from PIL import Image
from keras.models import model_from_json
from flask_s3 import FlaskS3




app = Flask(__name__)



categories = ["apple","Orange","Pineapple","strawberry"]

def get_model():
    global loaded_model, graph
    json_file = open("model2.json", 'r')
    loaded_model_json = json_file.read()
    json_file.close()
    loaded_model = model_from_json(loaded_model_json)
    loaded_model.load_weights('transparent_cnn_model.H5')
    print('loaded model')
    #loaded_model = load_model("./Prediction/fruit_image.hdf5")
    loaded_model.compile(loss='categorical_crossentropy',
              optimizer='Adam',
              metrics=['categorical_accuracy'])
    print('Compiled!')
    graph = tf.get_default_graph()
    return loaded_model, graph
get_model()

def prep_img(image):


    #convert the image to rgb
    if image.mode != "RGBA":
        image = image.convert("RGBA")

    pixeldata = list(image.getdata())
    print(pixeldata)
    for i,pixel in enumerate(pixeldata):
        if pixel[:3] == (255,255,255):
            pixeldata[i] = (255,255,255,0)

    image.putdata(pixeldata)
    image = image.resize((100,100))
    #image = image.resize(image,(64,64))
    image = np.array(image)
    print(image)
    #image = image/ 255.0
    print(image)
    image = image.reshape(-1,100,100,4)
    print(image)
    image = image/ 255.0
    print(image)
    return image



@app.route('/')
def hello_world():
    return render_template("index.html")




@app.route('/predict', methods=['POST', 'GET'])
def predict():

    message = request.get_json(force=True)
    print(message)
    encoded = message['image']
    decoded = base64.b64decode(encoded)
    image = Image.open(io.BytesIO(decoded))
    processed_image = prep_img(image)


    with graph.as_default():
        prediction = loaded_model.predict([processed_image])
        word_prediction = [categories[i] for i in loaded_model.predict_classes(processed_image)]
        print(word_prediction)

        response = {
            'prediction':  word_prediction
        }

        return jsonify(response)


if __name__ == '__main__':
    app.run(debug=True)
