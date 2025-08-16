import express from 'express'
import Razorpay from 'razorpay'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

const razor = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
})

app.get('/', (req,res)=> res.json({ ok:true, service:'meu22 server' }))

app.post('/create-order', async (req,res)=>{
  try{
    const { amount, currency='INR', notes={} } = req.body
    const order = await razor.orders.create({ amount, currency, notes, receipt: 'rcpt_'+Date.now() })
    res.json(order)
  }catch(err){
    console.error(err)
    res.status(500).json({ error: 'failed_to_create_order', details: err.message })
  }
})

// Optional webhook endpoint (configure in Razorpay dashboard)
app.post('/webhook', express.json({ type: '*/*' }), (req,res)=>{
  // Verify signature if you use it. For demo, just 200 OK.
  res.json({ received: true })
})

const PORT = process.env.PORT || 8080
app.listen(PORT, ()=> console.log('meu22 server running on', PORT))
