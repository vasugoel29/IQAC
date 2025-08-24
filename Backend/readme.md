## IQAC Backend

This folder contains the backend code for the IQAC web application. It is built with Node.js and Express, and provides RESTful APIs for authentication, file upload, user management, and more.

### Folder Structure

- **controllers/**: Route handlers for API endpoints (delete, fetchall, upload, user).
- **db/**: Database logic and connection files.
- **middlewares/**: Custom Express middlewares (e.g., authentication).
- **src/**: Main application entry point and constants.
- **storage/**: File storage logic for uploads and deletions.
- **utils/**: Utility classes and functions (API error/response, async handler, session management).

### Setup Instructions

1. **Install dependencies:**

   ```powershell
   npm install
   ```

2. **Environment Variables:**

   The backend requires the following environment variables to be set in your `.env` or `.env.local` file:

   | Variable                | Description                                                        |
   | ----------------------- | ------------------------------------------------------------------ |
   | `PORT`                  | The port number on which the backend server will run (e.g., 3000). |
   | `FILE_TABLE_NAME`       | Name of the database table for storing file metadata.              |
   | `ADMIN_TABLE_NAME`      | Name of the database table for storing admin credentials.          |
   | `AWS_ACCESS_KEY_ID`     | AWS access key for S3 bucket operations (file upload/download).    |
   | `AWS_SECRET_ACCESS_KEY` | AWS secret key for S3 bucket operations.                           |
   | `AWS_REGION`            | AWS region where your S3 bucket is hosted (e.g., ap-south-2).      |
   | `ADMIN_USERNAME`        | Username for the admin user (used for authentication).             |
   | `JWT_SECRET`            | Secret key for signing JWT tokens (used for authentication).       |
   | `BUCKET_NAME`           | Name of the AWS S3 bucket for file storage.                        |

   Example `.env` file:

   ```env
   PORT=3000
   FILE_TABLE_NAME="fileTable"
   ADMIN_TABLE_NAME="credTable"
   AWS_ACCESS_KEY_ID=your_aws_access_key
   AWS_SECRET_ACCESS_KEY=your_aws_secret_key
   AWS_REGION="ap-south-2"
   ADMIN_USERNAME="Admin"
   JWT_SECRET="your_jwt_secret"
   BUCKET_NAME="your_bucket_name"
   ```

   - You may also use `.env.local` for local overrides.

3. **Run the server:**
   ```powershell
   npm start
   ```
   or
   ```powershell
   node src/index.js
   ```

### API Endpoints

- **/api/upload**: Upload files
- **/api/fetchall**: Fetch all records
- **/api/delete**: Delete records/files
- **/api/user**: User authentication and management

### Notes

- Make sure your database credentials are set in `db/credentials.db.js` and referenced in `.env`.
- Custom error and response handling is provided in `utils/`.
- Authentication middleware is in `middlewares/auth.middleware.js`.

---

For more details, see comments in individual files or contact the project maintainer.