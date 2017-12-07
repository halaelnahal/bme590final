"""
PredictMelanomaServer.py:
Web server implementation using Flask. Uses the Docker container with
get_prediction module written provided by Suyash Kumar for predictions.

GET routes:

/server:
    output: string confirmation "Server is up and running!"

POST routes:

/decode/base_64:
    input: sample base 64 string "aGVsbG8sIHdvcmxk"
    output: returns decoded string "hello, world"

/sample_image:
    input: sample image transformed into base 64
    output: "Received!" or "Not received."

/melanoma/get_prediction:
    input: image transformed into base 64
    output: melanoma prediction
"""

from flask import Flask, request, jsonify
from flask_cors import CORS
import io
import cv2
import base64
import numpy as np
from PIL import Image
app = Flask(__name__)
CORS(app)
req_num = 0


def send_error(message, code):
    err = {
        "error": message
    }
    return jsonify(err), code


@app.route("/server")
def test_server():
    output = {"Results": "Server is up and running!"}
    return jsonify(output)


@app.route("/decode/base_64", methods=['POST'])
def test_base_64():
    from base64 import b64decode
    b64text = request.json["sample"]
    text = b64decode(b64text)
    output = {"Results": text}
    return jsonify(output)


@app.route("/sample_image", methods=['POST'])
def test_sample():
    if request.json["currentImageString"] != '':
        output = {"Results": "Received!"}
    else:
        output = {"Results": "Not received."}

    return jsonify(output)


@app.route("/melanoma/prediction", methods=['POST'])
def melanoma_prediction():
    from get_prediction import get_prediction
    import base64
    import numpy as np
    import matplotlib.image as mpimg
    b64img_string = request.json["currentImageString"]
    #imgdata = base64.b64decode(b64img_string)
    img = mpimg.imread(stringToImage(b64img_string))
    '''
    r = base64.decodestring(img_string)
    img = np.frombuffer(r, dtype=np.float64)
    '''
    (labels, predictions) = get_prediction(img)
    output = {}
    for i in range(len(labels)):
        output[labels[i]] = predictions[i]
    return jsonify(output)



# Take in base64 string and return PIL image
def stringToImage(base64_string):
    imgdata = base64.b64decode(base64_string)
    return Image.open(io.BytesIO(imgdata))

# convert PIL Image to an RGB image( technically a numpy array ) that's compatible with opencv
def toRGB(image):
    return cv2.cvtColor(np.array(image), cv2.COLOR_BGR2RGB)
