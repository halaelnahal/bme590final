# bme590final
=============

![alt text](https://travis-ci.org/halaelnahal/bme590final.svg?branch=master)

Deployed Webapp URL: http://vcm-1847.vm.duke.edu/

URL: http://vcm-1855.vm.duke.edu:8000

# Routes:

GET routes:

- /server:
    - output: string confirmation "Server is up and running!"

POST routes:

- /decode/base_64:
    - input: sample base 64 string "aGVsbG8sIHdvcmxk"
    - output: returns decoded string "hello, world"

- /sample_image:
    - input: sample image transformed into base 64
    - output: "Received!" or "Not received."

- /melanoma/get_prediction:
    - input: image transformed into base 64
    - output: melanoma prediction

Code for frontend design was adapted from the following tutorials:
        -https://www.youtube.com/watch?v=nusgoj74a3Y
        -https://www.youtube.com/watch?v=Akfp2X5QUXs

