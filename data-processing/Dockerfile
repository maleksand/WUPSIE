FROM python:3.10.2

WORKDIR /app

COPY ./data-processing/requirements.txt requirements.txt

RUN pip3 install -r requirements.txt

COPY ./data-processing/ .

CMD [ "python3", "-u", "-m", "main"]