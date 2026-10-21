FROM python:3.12.15-alpine3.23

WORKDIR /backend

COPY backend/requirements.txt ./

RUN pip install --no-cache-dir -r requirements.txt

COPY backend/ .

CMD [ "flask", "--app", "app", "run", "--host=0.0.0.0", "--port=5000" ]