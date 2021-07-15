import Router from 'express'
import Post from './Post.js'
import router from './router.js'

const router = new Router()

router.post('/posts', async (req, res) => {
    try {
        const {author, title, content, picture} = req.body
        const post = await Post.create({author, title, content, picture})
        res.json(post)
    } catch (e) {
        res.status(500).json(e)
    }
})
router.get('/posts')