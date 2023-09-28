# simpleChat
 
Running the App locally:

1. Start the backend by following these steps:

```json
virtualenv env
env\Scripts\activate
py -3.8 -m pip install -r requirements.txt
py -3.8 manage.py migrate
py -3.8 manage.py runserver
```

3. Start the frontend using the following steps:
```json
npm i
env\Scripts\activate
npm start
```
