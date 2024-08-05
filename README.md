# JavaScript-Project
Testing if my planner holiday idea is possible to execute with just html, css, and javascript.

Originally my idea was a hoiliday planner where people can write their plans for their trips and put their photographs in the gallery section, like a diary. But as i was working on it i didn't realised how complicated my idea was until it was too late to start a new project. The local stoage was my biggist obstacle while doing this project.  i had to reaserach a lot about the local storage and saving information. There was a lot of things i wanted to include in my project, like a sidebar where people can create more "PlanPage", similarly to how you can create more chats in chatgpt. But unfortunately i had to change my idea a little bit. In future projects i would like to implement a sidebar.

Problems so far:
- how to add multiple upload image container
- how to make sidebar responsive and the menu and close buttons
- how to add new plans in the side bar




localStorage.setItem(key, value) - takes 2 arguement. 
if key does not exist in local storage , the setItem() method will create a new key and assign the given value. 

to retrieve and use the data, use getItem() which will a key as an arguement. 
localStorage.getItem(key)

local storage can only store strings. if you store values like objects and arrays, use JSON.stringify() to turn the the value into a string. 

JSON.parse() is used to retrieve data back from local storage. it will turn what JSON.stringify() turned into a string back into its original form (i.e object/arrays).

to delete data use removeItem(key) or alternatively clear(). removeItem() is used to delete a single item from the local storage. This takes a key as an arguement and deletes the corresponding key-value pair from storage. 
clear() deletes all key-value pairs in the local storage for the current domain.
