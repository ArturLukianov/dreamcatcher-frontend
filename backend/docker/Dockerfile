FROM python:3.10-bullseye

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

ADD core /
ADD api /

COPY ./requirements.txt ./requirements.txt
RUN pip install -r requirements.txt

COPY ./main.py main.py
