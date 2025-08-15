import Video from "../Model/video_model.js"; // Ensure correct path + .js

// Function to generate unique random number
async function generateUniqueNumber() {
    const randomNumber = Math.floor(10000 + Math.random() * 90000);

    const exists = await Video.exists({ Video_id: randomNumber });

    if (!exists) {
        return randomNumber;
    }
    return generateUniqueNumber();
}

// Middleware
export default async function RandomNum(req, res, next) {
    try {
        const uniqueNum = await generateUniqueNumber();
        req.randomNumber = uniqueNum;
        next();
    } catch (error) {
        next(error);
    }
}