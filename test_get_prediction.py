import get_prediction
import matplotlib.image as mpimg

MALIGNANT_IMAGES = [
    './images/malignant/ISIC_0011285.jpg',
    './images/malignant/ISIC_0012749.jpg',
]

NON_MALIGNANT_IMAGES = [
    './images/non_malignant/ISIC_0013516.jpg',
    './images/non_malignant/ISIC_0014162.jpg',
]

img1 = mpimg.imread(MALIGNANT_IMAGES[0])
img2= mpimg.imread(MALIGNANT_IMAGES[1])
img3 = mpimg.imread(NON_MALIGNANT_IMAGES[0])
img4 = mpimg.imread(NON_MALIGNANT_IMAGES[1])

(labels1, predictions1) = get_prediction.get_prediction(img1)
(labels2, predictions2) = get_prediction.get_prediction(img2)
(labels3, predictions3) = get_prediction.get_prediction(img3)
(labels4, predictions4) = get_prediction.get_prediction(img4)

assert tuple(predictions1.tolist()) == (0.3457026779651642, 0.6542973518371582)
assert tuple(predictions2.tolist()) == (0.01056225411593914, 0.9894378185272217)
assert tuple(predictions3.tolist())== (0.9496950507164001, 0.05030497908592224)
assert tuple(predictions4.tolist()) == (0.9770188927650452, 0.022981073707342148)
