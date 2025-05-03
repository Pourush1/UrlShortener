# URL Shortener API

A robust RESTful API for shortening URLs built with Node.js, Express, and MongoDB.

## Features

- Create shortened URLs from long URLs
- MongoDB storage for persistence
- RESTful API design

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Libraries**: nanoid, valid-url, cors

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/url-shortener.git
   cd url-shortener
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Configure MongoDB:
   - Create a MongoDB Atlas account and cluster
   - Copy the connection string
   - Create `config/default.json` with the following structure:
     ```json
     {
       "mongoURI": "YOUR_MONGODB_CONNECTION_STRING",
       "baseUrl": "http://localhost:5001"
     }
     ```
   - **IMPORTANT**: Never commit your actual MongoDB credentials to version control

## Usage

### Start the server

```
npm start
```

For development with auto-restart:

```
npm run dev
```

### API Endpoints

#### Create a Short URL

```
POST /api/url/shorten
```

Request body:

```json
{
  "longUrl": "https://example.com/very/long/url/that/needs/shortening"
}
```

Response:

```json
{
  "shortUrlCode": "abc123",
  "longUrl": "https://example.com/very/long/url/that/needs/shortening",
  "shortUrl": "http://localhost:5001/abc123",
  "date": "2023-05-02T12:34:56.789Z"
}
```

## Deployment

For production deployment:

1. Set environment variables for MongoDB connection and base URL
2. Set up proper error handling and logging
3. Use a process manager like PM2 to keep the application running

## Security Considerations

- Use environment variables for sensitive data
- Add rate limiting to prevent abuse
- Implement URL validation to prevent malicious URLs

## License

MIT
