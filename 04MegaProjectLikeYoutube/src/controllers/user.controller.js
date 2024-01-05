import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.models.js";
import {ApiError} from '../utils/apiError.js'
import {uploadOnCloudinary} from '../utils/cloudinary.js'
import { ApiResponse } from "../utils/apiResponse.js";


const registerUser = asyncHandler(async (req, res) => {

    // get user detail from frontend **
    // validation not empty ***
    // check if allready exist
    // check for images
    // check for avatar
    // upload them to cloudnary, avtar
    // create user object - create entry in db 
    // remove password and refresh token field form response
    //  check for user creation 
    // return response otherwise return error


    // // get user detail from frontend
    const {fullname, username, email, password} = req.body
    console.log("email" , email)


     // validation not empty ***
    // if(fullname === "") {
    //   throw new ApiError(400, "Fullname is required")
    // } 
  if(
    [fullname, email, username, password].some((fields) => fields?.trim() === "")
  ){
    throw new ApiError(400,"All fields are required")
  }

     // check if allready exist
  const existedUser =    User.findOne({
      $or: [{ username }, { email }]
     })
     if(existedUser) {
      throw ApiError(409, "user with email or username already exist")
     }

       // check for images
      const avtarLocalPath = req.files?.avatar[0]?.path
      const coverImageLocalPath =    req.files?.coverImage[0]?.path
      if(!avtarLocalPath){
        throw new ApiError(400,"Avatar file is required")
      }

        // upload them to cloudnary, avtar
       const avatar = await uploadOnCloudinary(avtarLocalPath)
      const coverImage = await uploadOnCloudinary(coverImageLocalPath)

      if(!avatar){
        throw ApiError(409, 'avtar is required')
      }

      // create user object - create entry in db 

      const user = await User.create({
        fullname,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        username: username.toLowerCase()
      })

        //  check for user creation 
    const createdUser =   await User.findById(user._id).select(
      "-password -refreshToken" //not allowed fields
    )
    if(createdUser) {
      throw new ApiError(500, "something went wrong while registering the user")
    }

     // return response otherwise return error
    return res.status(201).json(
      new ApiResponse(200, createdUser, "user registered Successfully")
    )
})


export { registerUser};
