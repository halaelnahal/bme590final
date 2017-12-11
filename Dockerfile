from gcr.io/tensorflow/tensorflow:latest
WORKDIR /app
ADD . /app
RUN pip install -r requirements.txt
ENV FLASK_APP=PredictMelanomaServer.py
