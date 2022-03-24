FROM python:3.10.2
ENV PYTHON_ENV=docker

WORKDIR /app

COPY ./data-processing/requirements.txt requirements.txt

RUN pip3 install -r requirements.txt

COPY ./data-processing/ .

CMD [ "python3", "-u", "format_csv.py"]