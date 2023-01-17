from app.main import app
from app.db import create_user_db, create_navigation_db
import os

if __name__ == '__main__':
    if os.path.exists('DB/users.sqlite3') == False:  # Check if user database exists
        create_user_db()
    # Check if navigation database exists
    if os.path.exists('DB/navigation.sqlite3') == False:
        create_navigation_db()

    app.secret_key = 'ChangeThisKeyBeforeDeploying'  # secret key for session
    app.run(debug=True)  # run app (remove debug=True before deploying)
