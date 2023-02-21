// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json(
    {
      messsage: 'here are the workers',
      workers:[
        { name: 'Jay Glynn' },
        { name: 'Surendra Jha' },
        { name: 'Madhu Ramnath' },
        { name: 'Garrett McGiffert' },
        { name: 'Tyler Epps' },
      ]
    }
  )
}
