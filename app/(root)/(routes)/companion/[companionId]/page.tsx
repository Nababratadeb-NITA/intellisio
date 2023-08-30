import { redirect } from "next/navigation";
import { auth, redirectToSignIn } from "@clerk/nextjs";

import prismadb from "@/lib/prismadb";
import { CompanionForm } from "./componnents/Companion-form";
import crypto from 'crypto';

const CompanionIdPage = async () => {
  const { userId } = auth();

  if (!userId) {
    return redirectToSignIn();
  }

  const randomBytes = crypto.randomBytes(12);
  const randomHex = randomBytes.toString('hex');

  const companion = await prismadb.companion.findUnique({
    where: {
      id: randomHex,
      userId,
    }
  });

  const categories = await prismadb.category.findMany();

  return ( 
    <CompanionForm initialData={companion} categories={categories} />
  );
}

export default CompanionIdPage;