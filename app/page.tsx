'use client';

import { Avatar, Card } from "flowbite-react";

export default function Home() {
  return (
    <div>
      <Card className='w-full'>
        <div className="flex flex-col items-center pb-10">
          <Avatar color={'primary'} rounded bordered size={'xl'}></Avatar>
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Benggri</h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">개인 학습 공간</span>
        </div>
      </Card>
    </div>
  )
}
