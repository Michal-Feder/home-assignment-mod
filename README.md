<div dir="rtl">

# 🛒 Home Assignment – מערכת קניות

מערכת קניות מלאה מקצה לקצה.

## טכנולוגיות
- Frontend: <span dir="ltr">React, Vite, MUI, Redux</span>
- Server Products: <span dir="ltr">.NET 8, Entity Framework, SQL Server</span>
- Orders Backend: <span dir="ltr">NestJS, Elasticsearch</span>

## 🧱 מבנה הפרויקט
<span dir="ltr">

home-assignment-mod/
├── shopping-client/    # Frontend
├── server-products/    # Products API (.NET 8)
└── orders-backend/     # Orders API (NestJS)

</span>

## 🧰 דרישות מערכת
- <span dir="ltr">Node.js 18+</span>
- <span dir="ltr">.NET SDK 8</span>
- <span dir="ltr">SQL Server</span>
- <span dir="ltr">Elasticsearch</span>

## ▶️ הרצה – Frontend
```bash
cd shopping-client
npm install
npm run dev
```
האפליקציה זמינה ב־
<span dir="ltr">http://localhost:5173</span>

▶️ הרצה – Server Products (.NET 8)
```bash
Copy code
cd server-products
dotnet restore
dotnet run
```
השרת משתמש ב־Entity Framework עם SQL Server.
במידת הצורך:

```bash
Copy code
dotnet ef database update
```
▶️ הרצה – Orders Backend (NestJS)
```bash
Copy code
cd orders-backend
npm install
npm run start:dev
```
השירות עובד מול Elasticsearch.
קובץ mapping מצורף בתיקייה:
<span dir="ltr">src/config</span>

🔗 חיבור בין השירותים
ה־Frontend צורך:

Products API – קטגוריות ומוצרים

Orders API – שליחת הזמנה

יש לוודא שכל השירותים רצים במקביל ושהפורטים תואמים להגדרות בפרויקט.

✅ פונקציונליות עיקרית
הצגת קטגוריות ומוצרים

הוספה ועדכון כמות בסל קניות

סל קניות משותף בין מסכים

שליחת הזמנה לשרת

טיפול בהצלחות ושגיאות

תמיכה מלאה ב־RTL (עברית)

</div> 
