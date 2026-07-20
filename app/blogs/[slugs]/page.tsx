import DislikeButton from '@/app/ui/DislikeButton';
import React from 'react'

const SlugPage = async ({params} : {params : Promise<{slugs : string}>}) => {

  const {slugs} = await params;
  return (
    <div>Slugs page number : {slugs}
    <div>
      <DislikeButton dislikeSlug= {slugs}></DislikeButton>
    </div>
    </div>
  )
}

export default SlugPage;
