"use client";
import { delay } from '@/src/utils/asyncUtil';
import * as React from 'react';
import { useState, useEffect } from 'react';
const contentDelay = 1800;

function PostAnimationLoader({ children }: React.PropsWithChildren) {
  const [showContent, setShowContent] = useState(false);

  const showPostDelay = async () => {
    await delay(contentDelay);
    setShowContent(true);
  }

  useEffect(() => {
    showPostDelay();
  }, []);

  if (!showContent) {
    return null;
  }

  return children;
}

export default PostAnimationLoader;