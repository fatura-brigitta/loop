chcp 65001

mkdir data

mongoexport --uri="mongodb+srv://projekt:projekt12345@cluster0.ultaiwi.mongodb.net/?appName=Cluster0" --db=loop --collection=admins --out=data/admins.json --jsonArray

mongoexport --uri="mongodb+srv://projekt:projekt12345@cluster0.ultaiwi.mongodb.net/?appName=Cluster0" --db=loop --collection=bad_words --out=data/bad_words.json --jsonArray

mongoexport --uri="mongodb+srv://projekt:projekt12345@cluster0.ultaiwi.mongodb.net/?appName=Cluster0" --db=loop --collection=chairs --out=data/chairs.json --jsonArray

mongoexport --uri="mongodb+srv://projekt:projekt12345@cluster0.ultaiwi.mongodb.net/?appName=Cluster0" --db=loop --collection=coupons --out=data/coupons.json --jsonArray

mongoexport --uri="mongodb+srv://projekt:projekt12345@cluster0.ultaiwi.mongodb.net/?appName=Cluster0" --db=loop --collection=discounts --out=data/discounts.json --jsonArray

mongoexport --uri="mongodb+srv://projekt:projekt12345@cluster0.ultaiwi.mongodb.net/?appName=Cluster0" --db=loop --collection=forum_replies --out=data/forum_replies.json --jsonArray

mongoexport --uri="mongodb+srv://projekt:projekt12345@cluster0.ultaiwi.mongodb.net/?appName=Cluster0" --db=loop --collection=forum_votes --out=data/forum_votes.json --jsonArray

mongoexport --uri="mongodb+srv://projekt:projekt12345@cluster0.ultaiwi.mongodb.net/?appName=Cluster0" --db=loop --collection=forums --out=data/forums.json --jsonArray

mongoexport --uri="mongodb+srv://projekt:projekt12345@cluster0.ultaiwi.mongodb.net/?appName=Cluster0" --db=loop --collection=halls --out=data/halls.json --jsonArray

mongoexport --uri="mongodb+srv://projekt:projekt12345@cluster0.ultaiwi.mongodb.net/?appName=Cluster0" --db=loop --collection=movies --out=data/movies.json --jsonArray

mongoexport --uri="mongodb+srv://projekt:projekt12345@cluster0.ultaiwi.mongodb.net/?appName=Cluster0" --db=loop --collection=opening_hours --out=data/opening_hours.json --jsonArray

mongoexport --uri="mongodb+srv://projekt:projekt12345@cluster0.ultaiwi.mongodb.net/?appName=Cluster0" --db=loop --collection=opening_overrides --out=data/opening_overrides.json --jsonArray

mongoexport --uri="mongodb+srv://projekt:projekt12345@cluster0.ultaiwi.mongodb.net/?appName=Cluster0" --db=loop --collection=payment_sessions --out=data/payment_sessions.json --jsonArray

mongoexport --uri="mongodb+srv://projekt:projekt12345@cluster0.ultaiwi.mongodb.net/?appName=Cluster0" --db=loop --collection=ranks --out=data/ranks.json --jsonArray

mongoexport --uri="mongodb+srv://projekt:projekt12345@cluster0.ultaiwi.mongodb.net/?appName=Cluster0" --db=loop --collection=screening_types --out=data/screening_types.json --jsonArray

mongoexport --uri="mongodb+srv://projekt:projekt12345@cluster0.ultaiwi.mongodb.net/?appName=Cluster0" --db=loop --collection=screenings --out=data/screenings.json --jsonArray

mongoexport --uri="mongodb+srv://projekt:projekt12345@cluster0.ultaiwi.mongodb.net/?appName=Cluster0" --db=loop --collection=ticket_types --out=data/ticket_types.json --jsonArray

mongoexport --uri="mongodb+srv://projekt:projekt12345@cluster0.ultaiwi.mongodb.net/?appName=Cluster0" --db=loop --collection=tickets --out=data/tickets.json --jsonArray

mongoexport --uri="mongodb+srv://projekt:projekt12345@cluster0.ultaiwi.mongodb.net/?appName=Cluster0" --db=loop --collection=users --out=data/users.json --jsonArray

echo.
echo =====================================
echo Database export finished successfully
echo Files saved in /data folder
echo =====================================

pause