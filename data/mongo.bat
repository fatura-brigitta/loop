chcp 65001
mongoimport --uri="mongodb+srv://projekt:projekt12345@cluster0.ultaiwi.mongodb.net/?appName=Cluster0" --db=loop --collection=admins --drop --file=admins.json --jsonArray
mongoimport --uri="mongodb+srv://projekt:projekt12345@cluster0.ultaiwi.mongodb.net/?appName=Cluster0" --db=loop --collection=chairs --drop --file=chairs.json --jsonArray
mongoimport --uri="mongodb+srv://projekt:projekt12345@cluster0.ultaiwi.mongodb.net/?appName=Cluster0" --db=loop --collection=discounts --drop --file=discounts.json --jsonArray
mongoimport --uri="mongodb+srv://projekt:projekt12345@cluster0.ultaiwi.mongodb.net/?appName=Cluster0" --db=loop --collection=forums --drop --file=forums.json --jsonArray
mongoimport --uri="mongodb+srv://projekt:projekt12345@cluster0.ultaiwi.mongodb.net/?appName=Cluster0" --db=loop --collection=halls --drop --file=halls.json --jsonArray
mongoimport --uri="mongodb+srv://projekt:projekt12345@cluster0.ultaiwi.mongodb.net/?appName=Cluster0" --db=loop --collection=movies --drop --file=movies.json --jsonArray
mongoimport --uri="mongodb+srv://projekt:projekt12345@cluster0.ultaiwi.mongodb.net/?appName=Cluster0" --db=loop --collection=ranks --drop --file=ranks.json --jsonArray
mongoimport --uri="mongodb+srv://projekt:projekt12345@cluster0.ultaiwi.mongodb.net/?appName=Cluster0" --db=loop --collection=screening_types --drop --file=screening_types.json --jsonArray
mongoimport --uri="mongodb+srv://projekt:projekt12345@cluster0.ultaiwi.mongodb.net/?appName=Cluster0" --db=loop --collection=screenings --drop --file=screenings.json --jsonArray
mongoimport --uri="mongodb+srv://projekt:projekt12345@cluster0.ultaiwi.mongodb.net/?appName=Cluster0" --db=loop --collection=ticket_types --drop --file=ticket_types.json --jsonArray
mongoimport --uri="mongodb+srv://projekt:projekt12345@cluster0.ultaiwi.mongodb.net/?appName=Cluster0" --db=loop --collection=tickets --drop --file=tickets.json --jsonArray
mongoimport --uri="mongodb+srv://projekt:projekt12345@cluster0.ultaiwi.mongodb.net/?appName=Cluster0" --db=loop --collection=users --drop --file=users.json --jsonArray
echo PLEASE KILL AND RESTART YOUR BACKEND SERVER DEV TASK IF RUNNING!
pause