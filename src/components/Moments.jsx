import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { InstagramEmbed, TikTokEmbed } from "react-social-media-embed";
import HouseOfBerryAssets from "../HouseOfBerryAssets/HouseOfBerryAssets";
import Title from "./Title";

const AUTO_ADVANCE_BY_TYPE = {
  instagram: 5000,
  tiktok: 17000,
  video: 32000,
};

const FALLBACK_VIDEO_TIMEOUT = 32000;
const TOUCH_SWIPE_THRESHOLD = 40;
const MAX_SIDE_ITEMS = 1;
const SIDE_SCALE = {
  0: 1,
  1: 0.78,
};
const SIDE_OPACITY = {
  0: 1,
  1: 0.35,
};

const CAROUSEL_ITEMS = [
  {
    id: "insta-1",
    type: "instagram",
    url: "https://www.instagram.com/p/DO3DXLOEyX-/?utm_source=ig_web_copy_link&igsh=MTR4Z3o3ODBsd2p6OQ==",
  },
  {
    id: "insta-2",
    type: "instagram",
    url: "https://www.instagram.com/p/DMnC07Up7Je/?utm_source=ig_web_copy_link&igsh=MWtrOXd6NjhobnJoMQ==",
  },
  {
    id: "video",
    type: "video",
    src: HouseOfBerryAssets.about_vid,
  },
  {
    id: "tiktok",
    type: "tiktok",
    url: "https://www.tiktok.com/@houseofberrynz/video/7545250983677332754?is_from_webapp=1&sender_device=pc",
  },
];

const Moments = () => {
  const carouselItems = useMemo(() => CAROUSEL_ITEMS, []);
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef({});
  const touchStartX = useRef(null);
  const [isWideLayout, setIsWideLayout] = useState(() => {
    if (typeof window === "undefined") {
      return true;
    }

    return window.matchMedia("(min-width: 768px)").matches;
  });

  const itemCount = carouselItems.length;

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleChange = (event) => {
      setIsWideLayout(event.matches);
    };

    setIsWideLayout(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const visibleSlots = useMemo(() => {
    if (itemCount === 0) {
      return [];
    }

    const maxSide = isWideLayout ? MAX_SIDE_ITEMS : 1;
    const slots = [{ offset: 0, index: activeIndex }];

    for (let distance = 1; distance <= maxSide; distance += 1) {
      const prevIndex = ((activeIndex - distance) % itemCount + itemCount) % itemCount;
      const nextIndex = (activeIndex + distance) % itemCount;

      if (!slots.some((slot) => slot.index === prevIndex) && slots.length < 3) {
        slots.unshift({ offset: -distance, index: prevIndex });
      }

      if (!slots.some((slot) => slot.index === nextIndex) && slots.length < 3) {
        slots.push({ offset: distance, index: nextIndex });
      }

      if (slots.length >= 3 || distance >= itemCount / 2) {
        break;
      }
    }

    return slots.map((slot) => ({ ...slot, item: carouselItems[slot.index] }));
  }, [activeIndex, carouselItems, isWideLayout, itemCount]);

  const goTo = useCallback(
    (index) => {
      setActiveIndex((prev) => {
        const normalizedIndex = ((index % itemCount) + itemCount) % itemCount;
        return prev === normalizedIndex ? prev : normalizedIndex;
      });
    },
    [itemCount],
  );

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % itemCount);
  }, [itemCount]);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + itemCount) % itemCount);
  }, [itemCount]);

  useEffect(() => {
    const activeItem = carouselItems[activeIndex];
    const delay = AUTO_ADVANCE_BY_TYPE[activeItem.type];

    const timer = setTimeout(goNext, delay ?? FALLBACK_VIDEO_TIMEOUT);
    return () => clearTimeout(timer);
  }, [activeIndex, carouselItems, goNext]);

  useEffect(() => {
    const activeItem = carouselItems[activeIndex];

    if (!activeItem) {
      return undefined;
    }

    const pauseAllVideos = () => {
      Object.values(videoRefs.current).forEach((videoNode) => {
        if (videoNode && typeof videoNode.pause === "function") {
          videoNode.pause();
        }
      });
    };

    if (activeItem.type !== "video") {
      pauseAllVideos();
      return undefined;
    }

    const videoElement = videoRefs.current[activeItem.id];

    if (!videoElement) {
      return pauseAllVideos;
    }

    videoElement.currentTime = 0;
    const playPromise = videoElement.play();
    if (typeof playPromise?.catch === "function") {
      playPromise.catch(() => {});
    }

    return () => {
      videoElement.pause();
    };
  }, [activeIndex, carouselItems]);

  const handleVideoEnded = useCallback(() => {
    goNext();
  }, [goNext]);

  const mediaElements = useMemo(() => {
    return carouselItems.reduce((acc, item) => {
      if (item.type === "instagram") {
        acc[item.id] = (
          <InstagramEmbed
            url={item.url}
            width="100%"
            style={{ height: "100%" }}
            captioned
          />
        );
        return acc;
      }

      if (item.type === "tiktok") {
        acc[item.id] = (
          <TikTokEmbed
            url={item.url}
            width="100%"
            style={{ height: "100%" }}
          />
        );
        return acc;
      }

      acc[item.id] = (
        <video
          ref={(node) => {
            if (node) {
              videoRefs.current[item.id] = node;
            } else {
              delete videoRefs.current[item.id];
            }
          }}
          src={item.src}
          muted
          playsInline
          onEnded={handleVideoEnded}
          preload="auto"
          className="h-full w-full object-cover"
        />
      );
      return acc;
    }, {});
  }, [carouselItems, handleVideoEnded]);

  const handleTouchStart = useCallback((event) => {
    touchStartX.current = event.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (event) => {
      if (touchStartX.current === null) {
        return;
      }

      const deltaX = event.changedTouches[0].clientX - touchStartX.current;
      touchStartX.current = null;

      if (Math.abs(deltaX) < TOUCH_SWIPE_THRESHOLD) {
        return;
      }

      if (deltaX > 0) {
        goPrev();
      } else {
        goNext();
      }
    },
    [goNext, goPrev],
  );

  return (
    <motion.div
      id="moments"
      className="pb-30 bg-white dark:bg-gray-600 flex flex-col items-center gap-5 py-20 px-6 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-primary"
    >
      <Title
        title="Matcha Moments"
        desc="Discover the little joys in every sip. From our handcrafted matcha and coffee to behind-the-scenes moments, see how we turn everyday routines into memorable experiences."
      />

      <div className="relative w-full max-w-6xl">
        <div
          className="relative mx-auto flex min-h-[560px] w-full max-w-5xl items-center justify-center gap-4 overflow-hidden px-2 pb-12 sm:gap-6 sm:px-4 sm:pb-16 md:gap-8 md:pb-16"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {visibleSlots.map(({ item, offset }) => {
            const distance = Math.min(Math.abs(offset), MAX_SIDE_ITEMS);
            const isActive = offset === 0;
            const scale = SIDE_SCALE[distance] ?? SIDE_SCALE[MAX_SIDE_ITEMS];
            const opacity = SIDE_OPACITY[distance] ?? SIDE_OPACITY[MAX_SIDE_ITEMS];

            return (
              <motion.div
                key={item.id}
                className="pointer-events-none flex-shrink-0"
                style={{ width: "325px", height: "530px" }}
                animate={{ scale, opacity }}
                initial={{ scale, opacity }}
                transition={{ type: "spring", stiffness: 170, damping: 22, mass: 0.9 }}
              >
                <div
                  className="pointer-events-auto overflow-hidden rounded-3xl bg-white shadow-[0_25px_55px_-25px_rgba(15,23,42,0.45)] ring-1 ring-black/10 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_35px_65px_-30px_rgba(15,23,42,0.55)] dark:bg-gray-800 dark:ring-white/10"
                  style={{ pointerEvents: isActive ? "auto" : "none", width: "325px", height: "530px" }}
                >
                  <div className="h-full w-full">
                    {mediaElements[item.id]}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {itemCount > 1 && (
          <>
            <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 flex z-40">
              <button
                type="button"
                onClick={goPrev}
                className="group pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-xl font-semibold text-gray-700 shadow-lg transition hover:scale-105 hover:border-pink-400 hover:text-pink-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:h-14 md:w-14 md:text-2xl dark:border-gray-300 dark:bg-gray-100 dark:text-gray-700 dark:hover:border-pink-400 dark:hover:text-pink-400"
                aria-label="Previous moment"
              >
                <ChevronLeft className="h-6 w-6 transition-colors group-hover:text-pink-400" aria-hidden="true" />
              </button>
            </div>
            <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 flex z-40">
              <button
                type="button"
                onClick={goNext}
                className="group pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-xl font-semibold text-gray-700 shadow-lg transition hover:scale-105 hover:border-pink-400 hover:text-pink-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:h-14 md:w-14 md:text-2xl dark:border-gray-300 dark:bg-gray-100 dark:text-gray-700 dark:hover:border-pink-400 dark:hover:text-pink-400"
                aria-label="Next moment"
              >
                <ChevronRight className="h-6 w-6 transition-colors group-hover:text-pink-400" aria-hidden="true" />
              </button>
            </div>
          </>
        )}

        {itemCount > 1 && (
          <div className="mt-2 flex items-center justify-center gap-2">
            {carouselItems.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => goTo(index)}
                  className={`h-2.5 rounded-full transition-all duration-500 ease-out ${
                    isActive
                    ? "w-8 bg-pink-400 shadow-[0_6px_20px_-8px_rgba(16,185,129,0.8)]  dark:shadow-[0_6px_20px_-8px_rgba(16,185,129,0.65)]"
                    : "w-2.5 bg-gray-300 hover:bg-gray-400 dark:bg-gray-200 dark:hover:bg-gray-300"
                  }`}
                  aria-label={`Show moment ${index + 1}`}
                />
              );
            })}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Moments;
