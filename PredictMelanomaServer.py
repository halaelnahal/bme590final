"""
PredictMelanomaServer.py:
Web server implementation using Flask. Uses the Docker container with
get_prediction module written provided by Suyash Kumar for predictions.

GET routes:

/test/server:
    output: string confirmation "Server is up and running!"

POST routes:

/test/decode/base_64:
    input: sample base 64 string "aGVsbG8sIHdvcmxk"
    output: returns decoded string "hello, world"

/test/sample_image:
    input: sample image transformed into base 64
    output: "Received!" or "Not received."

/melanoma/get_prediction:
    input: image transformed into base 64
    output: melanoma prediction
"""


def main():
    from base64 import b64encode, b64decode

    print b64encode('hello, world')


if __name__ == '__main__':
    main()
