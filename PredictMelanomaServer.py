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
app = Flask(__name__)
CORS(app)
req_num = 0


def send_error(message, code):
    """ error reporting function for try/except functionality
    - Input two arguments: error message, HTTP code
    - Output json error message, HTTP code """
    err = {
        "error": message
    }
    return jsonify(err), code


def validate(img):
    """ validate correct numpy.ndarray shape for get_prediction function
        - Input one arguments: image read as numpy.ndarray
        - Output True/False if the array has shape (x, y, 3) """
    if img.shape[2] == 3:
        return True
    else:
        return False


@app.route("/server")
def test_server():
    output = {"Results": "Server is up and running!"}
    return jsonify(output)


@app.route("/decode/base_64", methods=['POST'])
def test_base_64():
    from base64 import b64decode

    try:
        b64text = request.json["sample"]
    except KeyError:
        return send_error("Invalid input. Input JSON dictionary. key: sample"
                          " value: base 64 string", 400)
    try:
        text = b64decode(b64text)
    except TypeError:
        return send_error("Incorrect padding: cannot decode base 64 str", 400)

    output = {"Results": text}

    try:
        result = jsonify(output)
    except UnicodeDecodeError:
        return send_error("Could not jsonify output. Check your input", 400)

    return result


@app.route("/sample_image", methods=['POST'])
def test_sample():
    try:
        if request.json["currentImageString"] != '':
            output = {"Results": "Received!"}
        else:
            output = {"Results": "Not received."}
    except KeyError:
        return send_error("Invalid key. Input dictionary.\nkey:"
                          " currentImageString\nvalue: image encoded as base "
                          "64 string", 400)
    except TypeError:
        return send_error("Invalid input. Input dictionary.\nkey:"
                          " currentImageString\nvalue: image encoded as "
                          "base 64 string", 400)

    return jsonify(output)


@app.route("/melanoma/prediction", methods=['POST'])
def melanoma_prediction():
    from get_prediction import get_prediction
    from base64 import decodestring
    from matplotlib.image import imread

    try:
        raw_string = request.json["currentImageString"]
    except KeyError:
        return send_error("Invalid input. Input dictionary.\nkey: "
                          "currentImageString\nvalue: image encoded as "
                          "base 64 string", 400)

    try:
        start_index = raw_string.find(",") + 1
        b64img_string = raw_string[start_index:]
        imgdata = decodestring(b64img_string)
    except TypeError:
        return send_error("Incorrect padding: cannot decode base 64 str", 400)

    try:
        filename = "temp.jpg"
        with open(filename, "wb") as image_out:
            image_out.write(imgdata)
        img = imread(filename)
    except IOError:
        return send_error("Please input base 64 encoded image", 400)

    try:
        if validate(img) is False:
            raise AssertionError
    except AssertionError:
        return send_error("Wrong img size. Expected numpy.ndarray of shape "
                          "(x, y, 3)", 500)

    try:
        (labels, predictions) = get_prediction(img)
        malignant_prob = str(round(predictions[1]*100, 2)) + " %"
        non_malignant_prob = str(round(predictions[0]*100, 2)) + " %"
    except ValueError:
        return send_error("get_prediction interrupted by error", 500)

    if predictions[0] > predictions[1]:
        diagnosis = "Congratulations! You do not have melanoma."
    elif predictions[0] < predictions[1]:
        diagnosis = "Uh oh. You should see a doctor to check out this " \
                    "skin lesion."
    else:
        diagnosis = "It is too difficult to tell. Go see a doctor if " \
                    "you are worried."

    output = {"type": str(type(img)),
               "shape": str(img.shape),
               "labels": str(labels),
               "predictions": str(predictions),
               "malignant_prob": malignant_prob,
               "non_malignant_prob": non_malignant_prob,
               "diagnosis": diagnosis}
    try:
        result = jsonify(output)
    except UnicodeDecodeError:
        return send_error("Could not jsonify output. Check your input", 400)

    return result
