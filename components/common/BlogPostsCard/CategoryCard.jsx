"use client"
import { getCategoryData } from "@/app/api/route";
import {
  ArticlesSVG,
  CaseStudiesSVG,
  CeoAsAuthorSVG,
  CompanyNewsSVG,
  EventsSVG,
  IndustryGuideSVG,
  PodCastsSVG,
  ReportsSVG,
} from "@/utils/svg/SVGImg";
import React, { useState } from "react";

const CategoryCard = ({
  category,
  activeCategory,
  setCategoryData,
  setActiveCategory,
  setActiveMostPopular,
  setActiveSubCategory,
  setSubCategoryPosts,
  setMostRecentPosts,
  setCeoAsAuthor,
  setCompanyNews
}) => {
  const [loading, setLoading] = useState(false);

  const fetchData = async (category) => {
    setLoading(true);
    const responseData = await getCategoryData(category);
    setCategoryData(responseData);
    setActiveCategory(category);
    setActiveMostPopular(responseData?.data?.[1]?.["Most Popular Post"]);
    setSubCategoryPosts(responseData?.data?.[1]?.["Most Popular Post"]);
    setActiveSubCategory(responseData?.data?.[2]?.["Subcategories Posts"]);
    setMostRecentPosts(responseData?.data?.[3]?.["Most Recent Post"]);
    setCeoAsAuthor(responseData?.data?.[4]?.["CEO As Author"]);
    setCompanyNews(responseData?.data?.[5]?.["Company News"]);
    setLoading(false);
  };

  const handleClick = (e) => {
    e.preventDefault();
    fetchData(category);
  };

  const lowercaseCategory = category.toLowerCase();
  const isDefaultCategory = !["articles", "case studies", "podcasts", "events", "reports", "industry guides", "company news", "ceo as author"].includes(lowercaseCategory);

  return (
    <div className="cursor-pointer">
      <div
        className={`w-[110px] md:w-[140px] h-[120px] md:h-[140px] flex flex-col items-center justify-start gap-[11px] ${activeCategory === category
          ? "bg-strongWhite border-b-4 border-secondary shadow-greenDrop"
          : "bg-cardBG"
          } rounded-md p-5 cursor-pointer`}
        onClick={handleClick}
      >
        <span className="w-[50px] h-[50px]">
          {/* Default case: Render ArticlesSVG if category doesn't match any predefined category */}
          {isDefaultCategory && <ArticlesSVG fillColor={activeCategory === category ? "#5BBC2E" : ""} />}
          {/* Render different SVG icons based on category */}
          {lowercaseCategory === "articles" && <ArticlesSVG fillColor={activeCategory === category ? "#5BBC2E" : ""} />}
          {lowercaseCategory === "case studies" && <CaseStudiesSVG fillColor={activeCategory === category ? "#5BBC2E" : ""} />}
          {lowercaseCategory === "podcasts" && <PodCastsSVG fillColor={activeCategory === category ? "#5BBC2E" : ""} />}
          {lowercaseCategory === "events" && <EventsSVG fillColor={activeCategory === category ? "#5BBC2E" : ""} />}
          {lowercaseCategory === "reports" && <ReportsSVG fillColor={activeCategory === category ? "#5BBC2E" : ""} />}
          {lowercaseCategory === "industry guides" && <IndustryGuideSVG fillColor={activeCategory === category ? "#5BBC2E" : ""} />}
          {lowercaseCategory === "company news" && <CompanyNewsSVG fillColor={activeCategory === category ? "#5BBC2E" : ""} />}
          {lowercaseCategory === "ceo as author" && <CeoAsAuthorSVG fillColor={activeCategory === category ? "#5BBC2E" : ""} />}
        </span>
        <h5 className={`text-[10px] md:text-[14px] text-center ${activeCategory===category?"text-secondary":"text-primary"}`}>{category.toUpperCase()}</h5>
      </div>
    </div>
  );
};

export default CategoryCard;