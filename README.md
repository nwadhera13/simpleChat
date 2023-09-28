# simpleChat
 
Running the App locally:

1. Start the backend by following these steps:

```json
pip install virtualenv
virtualenv env
env\Scripts\activate
py -3.8 -m pip install -r requirements.txt
py -3.8 manage.py migrate
py -3.8 manage.py runserver
```

3. Start the frontend using the following steps:
```json
npm i
npm start
```

Open 2 separate windows for testing the app.




<b>Running Example:</b>
<div align="center">


<img width="373" alt="simpleChatPic" src="https://github.com/nwadhera13/simpleChat/assets/68321799/721f845a-638f-460c-8fd8-99ca411e8b49">  

<img width="370" alt="simpleChatPic3" src="https://github.com/nwadhera13/simpleChat/assets/68321799/60094151-7011-452d-999a-41ee68c79af6">

<img width="382" alt="simpleChatPic2" src="https://github.com/nwadhera13/simpleChat/assets/68321799/ff6ccd6f-a6a9-40eb-b4dc-2692626c99c2">
</div>


<b>Backend Dependencies:</b>

1. Django: Used as the base for the backend of the project.
2. Django-Channels: Channels preserve the synchronous behavior of Django and add a layer of asynchronous protocols, allowing users to write views that are entirely synchronous, asynchronous, or a mixture of both. Channels basically allow the application to support “long-running connections”. It replaces Django’s default WSGI with its ASGI. These allowed me to make the chatting real-time.
3. WebSocket:  WebSocket is a bidirectional communication protocol that can send data from the client to the server or from the server to the client by reusing the established connection channel. I needed a way to have a bi-directional connection between the server and the client. The client shouldn't need to ask for the messages and should receive them as soon as the server pushes them. This was implemented using WebSockets.
4. Cors-Headers: I used Django-cors-headers to allow a port on the local machine to access our django server, which is blocked by default.


<b>FrontEnd Dependencies:</b>
1. ReactJS: Used as the base for the frontend of the project.
2. MaterialUI: Used to design the app by creating different components using MUI and scaling them to utilise in different places.
3. FrontEnd WebSockets: I used these to establish connection with our django server and maintain this bi-directional connection till the user exits the application or the chatroom.

