chcp 65001
mongoimport --uri="mongodb+srv://projekt:projekt12345@cluster0.ultaiwi.mongodb.net/?appName=Cluster0" --db=service --collection=api_tokens --drop --file=api_tokens.json --jsonArray
mongoimport --uri="mongodb+srv://projekt:projekt12345@cluster0.ultaiwi.mongodb.net/?appName=Cluster0" --db=service --collection=service_usages --drop --file=service_usages.json --jsonArray
mongoimport --uri="mongodb+srv://projekt:projekt12345@cluster0.ultaiwi.mongodb.net/?appName=Cluster0" --db=service --collection=services --drop --file=services.json --jsonArray
mongoimport --uri="mongodb+srv://projekt:projekt12345@cluster0.ultaiwi.mongodb.net/?appName=Cluster0" --db=service --collection=users --drop --file=users.json --jsonArray
mongoimport --uri="mongodb+srv://projekt:projekt12345@cluster0.ultaiwi.mongodb.net/?appName=Cluster0" --db=service --collection=workspaces --drop --file=workspaces.json --jsonArray
echo PLEASE KILL AND RESTART YOUR BACKEND SERVER DEV TASK IF RUNNING!
pause