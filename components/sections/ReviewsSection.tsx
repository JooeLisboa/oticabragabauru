"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ReviewCard } from "@/components/ui/ReviewCard";
import { brand, sectionCopy } from "@/data/brand";

export function ReviewsSection() {
  return (
    <SectionContainer>
      <SectionTitle
        title={sectionCopy.reviewsTitle}
        subtitle={sectionCopy.reviewsSubtitle}
      />
      <div className="mb-6 inline-flex rounded-full border border-bronze/40 bg-bronze/10 px-4 py-2 text-sm text-champagne">
        Nota {brand.rating.score} no Google · {brand.rating.count}
      </div>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        className="grid gap-4 md:grid-cols-3"
      >
        {brand.reviews.map((review) => (
          <motion.div
            key={review.author}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <ReviewCard author={review.author} text={review.text} />
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}
