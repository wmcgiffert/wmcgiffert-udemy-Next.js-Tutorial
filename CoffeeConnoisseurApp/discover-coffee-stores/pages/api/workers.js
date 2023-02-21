// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const currentDate = new Date(Date.now());
  res.status(200).json(
    {
      messsage: 'Last updated: ' + currentDate,
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
