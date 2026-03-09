chcp 65001

mongoimport --uri="mongodb+srv://projekt:projekt12345@cluster0.ultaiwi.mongodb.net/?appName=Cluster0" --db=loop --collection=admins --drop --file=admins.json --jsonArray

mongoimport --uri="mongodb+srv://projekt:projekt12345@cluster0.ultaiwi.mongodb.net/?appName=Cluster0" --db=loop --collection=bad_words --drop --file=bad_words.json --jsonArray

mongoimport --uri="mongodb+srv://projekt:projekt12345@cluster0.ultaiwi.mongodb.net/?appName=Cluster0" --db=loop --collection=chairs --drop --file=chairs.json --jsonArray

mongoimport --uri="mongodb+srv://projekt:projekt12345@cluster0.ultaiwi.mongodb.net/?appName=Cluster0" --db=loop --collection=coupons --drop --file=coupons.json --jsonArray

mongoimport --uri="mongodb+srv://projekt:projekt12345@cluster0.ultaiwi.mongodb.net/?appName=Cluster0" --db=loop --collection=discounts --drop --file=discounts.json --jsonArray

mongoimport --uri="mongodb+srv://projekt:projekt12345@cluster0.ultaiwi.mongodb.net/?appName=Cluster0" --db=loop --collection=forum_replies --drop --file=forum_replies.json --jsonArray

mongoimport --uri="mongodb+srv://projekt:projekt12345@cluster0.ultaiwi.mongodb.net/?appName=Cluster0" --db=loop --collection=forum_votes --drop --file=forum_votes.json --jsonArray

mongoimport --uri="mongodb+srv://projekt:projekt12345@cluster0.ultaiwi.mongodb.net/?appName=Cluster0" --db=loop --collection=forums --drop --file=forums.json --jsonArray

mongoimport --uri="mongodb+srv://projekt:projekt12345@cluster0.ultaiwi.mongodb.net/?appName=Cluster0" --db=loop --collection=halls --drop --file=halls.json --jsonArray

mongoimport --uri="mongodb+srv://projekt:projekt12345@cluster0.ultaiwi.mongodb.net/?appName=Cluster0" --db=loop --collection=movies --drop --file=movies.json --jsonArray

mongoimport --uri="mongodb+srv://projekt:projekt12345@cluster0.ultaiwi.mongodb.net/?appName=Cluster0" --db=loop --collection=opening_hours --drop --file=opening_hours.json --jsonArray

mongoimport --uri="mongodb+srv://projekt:projekt12345@cluster0.ultaiwi.mongodb.net/?appName=Cluster0" --db=loop --collection=opening_overrides --drop --file=opening_overrides.json --jsonArray

mongoimport --uri="mongodb+srv://projekt:projekt12345@cluster0.ultaiwi.mongodb.net/?appName=Cluster0" --db=loop --collection=payment_sessions --drop --file=payment_sessions.json --jsonArray

mongoimport --uri="mongodb+srv://projekt:projekt12345@cluster0.ultaiwi.mongodb.net/?appName=Cluster0" --db=loop --collection=ranks --drop --file=ranks.json --jsonArray

mongoimport --uri="mongodb+srv://projekt:projekt12345@cluster0.ultaiwi.mongodb.net/?appName=Cluster0" --db=loop --collection=screening_types --drop --file=screening_types.json --jsonArray

mongoimport --uri="mongodb+srv://projekt:projekt12345@cluster0.ultaiwi.mongodb.net/?appName=Cluster0" --db=loop --collection=screenings --drop --file=screenings.json --jsonArray

mongoimport --uri="mongodb+srv://projekt:projekt12345@cluster0.ultaiwi.mongodb.net/?appName=Cluster0" --db=loop --collection=ticket_types --drop --file=ticket_types.json --jsonArray

mongoimport --uri="mongodb+srv://projekt:projekt12345@cluster0.ultaiwi.mongodb.net/?appName=Cluster0" --db=loop --collection=tickets --drop --file=tickets.json --jsonArray

mongoimport --uri="mongodb+srv://projekt:projekt12345@cluster0.ultaiwi.mongodb.net/?appName=Cluster0" --db=loop --collection=users --drop --file=users.json --jsonArray


echo.
echo =====================================
echo Database import finished successfully
echo PLEASE RESTART YOUR BACKEND SERVER
echo =====================================

pause