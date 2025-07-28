// For Dummy Data
// ==============================
import { PrismaClient } from "@prisma/client";
const bcrypt = require('bcrypt');
// import { prisma } from '../src/app/lib/prisma'

const prisma = new PrismaClient()

async function main() {
  // Cleanup
  await prisma.post.deleteMany()
  await prisma.user.deleteMany()

  const hashedPassword = await bcrypt.hash('password123', 12)

  // Dummy img
  const dummyImages = [
    'https://picsum.photos/seed/post1/600/400',
    'https://picsum.photos/seed/post1/600/400',
  ]

  // Make user
  const user = await prisma.user.create({
    data: {
      email: 'test@example.com',
      name: 'Test User',
      password: hashedPassword,
      posts: {
        create: [
          {
            title: 'Second blog post',
            content: 'This is my first blog post.',
            topImage: dummyImages[0],
            published: true
          }, {
            title: 'First blog post',
            content: 'This is my second blog post.',
            topImage: dummyImages[1],
            published: true
          }
        ]
      }
    }
  })

  console.log( { user } ) 
}

main()
  .catch((e)=>{
    console.error(e)
    process.exit(1)
  })
  .finally(async ()=> {
    await prisma.$disconnect()
  })