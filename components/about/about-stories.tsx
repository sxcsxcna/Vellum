<<<<<<< HEAD
/**
 * 关于页兴趣故事列表：图片 + 文案交错排列，滚动进入视口时触发 GSAP 位移动画。
 */
=======
>>>>>>> bc65cdff3c5a2091ffac45bafe31b570cd4262e0
"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { aboutStories } from "@/lib/site";
import { cn } from "@/lib/cn";

export function AboutStories() {
  const rootRef = useRef<HTMLElement>(null);

<<<<<<< HEAD
  // 布局阶段注册 ScrollTrigger，为每条故事的图片 / 文案添加滚动进入动画
=======
>>>>>>> bc65cdff3c5a2091ffac45bafe31b570cd4262e0
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const root = rootRef.current;
    if (!root) {
      return;
    }

<<<<<<< HEAD
    // 尊重系统「减少动态效果」偏好，直接跳过动画
=======
>>>>>>> bc65cdff3c5a2091ffac45bafe31b570cd4262e0
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      const rows = root.querySelectorAll<HTMLElement>("[data-story]");

      rows.forEach((row) => {
        const image = row.querySelector<HTMLElement>("[data-story-image]");
        const copy = row.querySelector<HTMLElement>("[data-story-copy]");
<<<<<<< HEAD
        // 根据 data-direction 决定元素从右侧还是左侧滑入
        const fromRight = row.dataset.direction === "rtl";

        // 图片：横向位移 + 淡入
=======
        const fromRight = row.dataset.direction === "rtl";

>>>>>>> bc65cdff3c5a2091ffac45bafe31b570cd4262e0
        if (image) {
          gsap.fromTo(
            image,
            { xPercent: fromRight ? 18 : -18, autoAlpha: 0 },
            {
              xPercent: 0,
              autoAlpha: 1,
              duration: 0.9,
              ease: "power2.out",
              scrollTrigger: {
                trigger: row,
                start: "top 82%",
                toggleActions: "play none none reverse",
              },
            },
          );
        }

<<<<<<< HEAD
        // 文案：反方向位移 + 淡入
=======
>>>>>>> bc65cdff3c5a2091ffac45bafe31b570cd4262e0
        if (copy) {
          gsap.fromTo(
            copy,
            { x: fromRight ? -36 : 36, autoAlpha: 0 },
            {
              x: 0,
              autoAlpha: 1,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: row,
                start: "top 82%",
                toggleActions: "play none none reverse",
              },
            },
          );
        }
      });
    }, root);

<<<<<<< HEAD
    // 组件卸载时清理 ScrollTrigger 与动画
=======
>>>>>>> bc65cdff3c5a2091ffac45bafe31b570cd4262e0
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="mx-auto w-full max-w-6xl px-4 pb-20 sm:px-8 my-20"
    >
      {/* <h2 className="mb-10 text-2xl font-bold text-ink sm:mb-14 sm:text-3xl">
        简介
      </h2> */}
      <div className="flex flex-col gap-16 sm:gap-24">
        {aboutStories.map((story) => {
          const fromRight = story.direction === "rtl";

          return (
            <article
              key={story.id}
              data-story
              data-direction={story.direction}
              className={cn(
                "flex flex-col items-center gap-6 md:gap-12",
                fromRight ? "md:flex-row-reverse" : "md:flex-row",
              )}
            >
              <div className="w-full md:w-1/2" data-story-media>
                <Image
                  src={story.image}
                  alt=""
                  width={1920}
                  height={1080}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  data-story-image
                  className="h-auto w-full rounded-2xl object-contain will-change-transform"
                />
              </div>
              <div
                data-story-copy
                className="w-full min-w-0 md:w-1/2"
              >
                <h3 className="mb-3 text-2xl font-bold text-ink sm:text-3xl">
                  {story.title}
                </h3>
                <p className="text-sm leading-7 text-heading sm:text-base sm:leading-8">
                  {story.body}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
