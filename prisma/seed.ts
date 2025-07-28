// ダミーデータ用
// ====================

import { PrismaClient } from "@prisma/client";
import * as bcypt from 'bcryptjs'
import { prisma } from '../src/app/lib/prisma' // ?? const prisma = new PrismaClient()

async function main() {

}

main()
  .catch((e)=>{
    console.error(e)
    process.exit(1)
  })
  .finally(async ()=> {
    await prisma.$disconnect()
  })