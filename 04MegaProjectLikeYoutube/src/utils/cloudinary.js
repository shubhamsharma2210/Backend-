import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs'
          
cloudinary.config({ 
  cloud_name: process.env.CLODINARY_CLOUD_NAME, 
  api_key: process.env.CLODINARY_API_KEY, 
  api_secret: process.env.CLODINARY_API_SECRET  
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null
        // upload the file the cloudnary
      const response =  await cloudinary.v2.uploader.upload(localFilePath,{
            resource_type: 'auto'
        })
        // file has been upload successfully
        console.log('file is uploaded on cloudnary',response.url)
        return response
    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the uplaod operation got failed
        return null
    }
}

export {uploadOnCloudinary}