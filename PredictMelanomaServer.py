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
app = Flask(__name__)
req_num = 0


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
