import React from 'react';
import Giscus from '@giscus/react';

// Configure with your GitHub repo details
const GISCUS_REPO = 'manishkrch/manish-devspace'; // format: user/repo
const GISCUS_REPO_ID = 'R_kgDOOo1Hww'; // Replace with your actual repo ID from giscus.app
const GISCUS_CATEGORY = 'Announcements'; // Replace with your Giscus category name
const GISCUS_CATEGORY_ID = 'DIC_kwDOOo1Hw84CqnAm'; // Replace with your actual category ID from giscus.app

const GiscusComments: React.FC = () => (
  <div className="giscus-comments mt-5">
    <Giscus
      id="comments"
      repo={GISCUS_REPO}
      repoId={GISCUS_REPO_ID}
      category={GISCUS_CATEGORY}
      categoryId={GISCUS_CATEGORY_ID}
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme="light"
      lang="en"
      loading="lazy"
    />
  </div>
);

export default GiscusComments;
