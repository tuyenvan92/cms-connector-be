const router = require('express').Router();

// @route         GET api/user
// @description   GET User List
router.get('/', (_,res) => {
    const result = {
      data: [
        {
          "id": "1",
          "date": "11/11/2021",
          "title": "Blog Post",
          "category": "Architecture",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "image": "https://placeimg.com/640/480/arch"
        },
        {
          "id": "2",
          "date": "11/11/2021",
          "title": "Blog Post",
          "category": "Nature",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "image": "https://placeimg.com/640/480/nature"
        },
        {
          "id": "3",
          "date": "11/11/2021",
          "title": "Blog Post",
          "category": "Technology",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "image": "https://placeimg.com/640/480/tech"
        },
        {
          "id": "4",
          "date": "11/11/2021",
          "title": "Blog Post",
          "category": "Architecture",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "image": "https://placeimg.com/640/480/arch"
        },
        {
          "id": "5",
          "date": "11/11/2021",
          "title": "Blog Post",
          "category": "Nature",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "image": "https://placeimg.com/640/480/nature"
        },
        {
          "id": "6",
          "date": "11/11/2021",
          "title": "Blog Post",
          "category": "Technology",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "image": "https://placeimg.com/640/480/tech"
        }
      ],
    
    page: 1,
    limit: 10,
    total: 100,
    isSuccess: true
    };
    
    try {
        res.status(200).json(result)
    }
        catch(err) {
            res.status(500).json(error500)
    }
    
})

// @route         GET api/user/:id
// @description   GET single user
router.get('/:id', (req,res) => {
    console.loh('single user:', req.params.id)
    res.send('get single user')
})

module.exports = router;