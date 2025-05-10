"use client";

import { PropsWithChildren, useEffect, useMemo, useState } from "react";
import { v4 as uuid } from "uuid";

const intersectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const contentId = entry.target.id;
      const callback = registeredCallbacks[contentId];
      if (callback) {
        callback();
        delete registeredCallbacks[contentId];
        intersectionObserver.unobserve(entry.target);
      }
    }
  });
}, {
  threshold: 0.1
});

const registeredCallbacks: { [key: string]: () => void } = {};

const registerObserver = (contenId: string, onIntersection: () => void) => {
  const target = document.getElementById(contenId);
  if (!target) {
    return;
  }
  registeredCallbacks[contenId] = onIntersection;
  intersectionObserver.observe(target);
}

const unregisterObserver = (contentId: string) => {
  const target = document.getElementById(contentId);
  if (!target) {
    return;
  }
  delete registeredCallbacks[contentId];
  intersectionObserver.unobserve(target);
}

function ShowOnScrollIntoView({ children }: PropsWithChildren) {
  const contentId = useMemo(() => uuid(), []);
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    const onIntersection = () => {
      setShowContent(true);
    }
    registerObserver(contentId, onIntersection);
    return () => {
      unregisterObserver(contentId);
    }
  }, [contentId]);

  return ( <div id={contentId} className={`h-full ${showContent ? "opacity-100 scale-100 transition duration-[700ms] ease-out delay-200" : "opacity-0 scale-75"}`}>
    { children }
  </div>);
}

export default ShowOnScrollIntoView;