import express from 'express'
import todo from '../models/todolist.js'

const router =express.Router()

router.post('/addtodo',async(req,res)=>{
    console.log(req.body)
    let categories = new todo(req.body)
    let response = await categories.save()
    res.json(response)
})

router.get('/list',async(req,res)=>{

    let response=await todo.find()
    console.log(response);
    res.json(response)
})

router.delete('/delete/:id',async(req,res)=>{
    let id=req.params.id
    console.log(id,"response")
    let response=await todo.findByIdAndDelete(id)
    res.json(response)
})

// router.put('/update/',async(req,res)=>{
//     let id=req.params.id
//     console.log(id,"response")
//     let response=await todo.findByIdAndUpdate(id)
//     res.json(response)
// })

// Corrected backend update route
router.put('/update/:id', async (req, res) => {  // Use ':id' in the route to capture the id parameter
    const { id } = req.params;  // Extract id from request parameters
    const updatedData = req.body;  // Get the fields to update from the request body

    try {
        const response = await todo.findByIdAndUpdate(id, updatedData, { new: true });  // Pass updated data and { new: true } to return the updated document
        if (response) {
            res.json({ message: "Item updated successfully", data: response });
        } else {
            res.status(404).json({ message: "Item not found" });
        }
    } catch (error) {
        console.error("Error updating item:", error);
        res.status(500).json({ message: "Error updating item" });
    }
});


export default router