const app = require('./app');
const connectDatabase = require('./config/database')
const path = require('path')

require('dotenv').config({path:  './config/.env'});
const cloudinary = require('cloudinary');
connectDatabase();
console.log(process.env.DATABASE)
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

app.listen(process.env.PORT, () => {
	console.log(`server started on port:' ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});