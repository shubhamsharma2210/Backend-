import express from 'express'

const app = express()

const PORT = process.env.PORT || 3000

// app.get('/' , (req,res) => {
//     res.send('hello sir')
// })

// get a list of 5 jokes
app.get('/jokes' , (req,res) => {
    const jokes = [
        {
            id: 1,
            title: "first joke",
            content : 'This is first fake joke'
        },
        {
            id: 2,
            title: "second joke",
            content : 'This is second fake joke'
        },
        {
            id: 3,
            title: "third joke",
            content : 'This is third fake joke'
        },
        {
            id: 4,
            title: "fourth joke",
            content : 'This is fourth fake joke'
        },
        {
            id: 5,
            title: "fifth joke",
            content : 'This is fifth fake joke'
        },

    ];
    res.send(jokes)
})

app.listen(PORT, () => {
    console.log(`server started on PORT ${PORT}`)
})
