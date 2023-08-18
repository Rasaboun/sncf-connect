"use client";
import * as React from "react";
import { ChevronRightCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import SearchBar from "@/components/searchbar";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { voyage } from "@/src/voyager";
import { billet } from "@/src/billets";
import { useState } from "react";

type TypeItemList = { title: string; href: string };

type ArrayItemList = TypeItemList[];

export default function Home() {
  const [blur, setBlur] = useState(false);
  const hidden =
    "hidden fixed inset-0 top-16 z-40 bg-background/80 backdrop-blur-sm ";
  const show = "fixed inset-0 top-16 z-40 bg-[#0C131F]/40 	 backdrop-blur-sm ";
  return (
    <>
      <header className="grid grid-cols-1 md:grid-cols-3 place-items-center  bg-[#0C131F] w-screen">
        <div className="text-white absolute md:static rounded-b-lg w-fit h-fit top-7 inset-0 bg-[#0C131F] md:block place-self-start">
          <svg
            width="204"
            height="39"
            viewBox="0 0 204 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-36 md:h-16 md:w-48"
          >
            <path
              d="M27.9746 30.7197H30.4766C32.0454 30.7197 32.9478 29.9404 32.9478 28.5049C32.9478 27.0796 32.0352 26.2695 30.5073 26.2695H27.9746V30.7197ZM27.9746 36.6055C27.9746 37.5488 27.4722 38.1025 26.6006 38.1025C25.7188 38.1025 25.2061 37.5488 25.2061 36.6055V26.1157C25.2061 24.6597 25.8418 24.0034 27.2979 24.0034H30.8765C33.8706 24.0034 35.7266 25.644 35.7266 28.2896C35.7266 30.0635 34.814 31.4785 33.2554 32.1348L35.2856 35.8569C35.4395 36.1338 35.5317 36.4824 35.5317 36.7798C35.5317 37.5283 34.9473 38.0615 34.1577 38.0615C33.4297 38.0615 33.04 37.7539 32.5786 36.8516L30.5176 32.791H27.9746V36.6055ZM40.1255 34.6675C40.1255 35.5698 40.8433 36.1953 41.8994 36.1953C43.0684 36.1953 43.981 35.3955 43.981 34.3701V33.2422H41.8892C40.7817 33.2422 40.1255 33.7754 40.1255 34.6675ZM43.9604 36.6157C43.4067 37.5898 42.3301 38.1436 40.9971 38.1436C38.8745 38.1436 37.439 36.8105 37.439 34.8315C37.439 32.8218 38.9258 31.5811 41.397 31.5811H43.981V30.689C43.981 29.5918 43.2939 29.0176 42.0532 29.0176C41.2329 29.0176 40.6484 29.3252 40.0435 29.8687C39.7358 30.1147 39.4487 30.2275 39.0078 30.2275C38.4131 30.2275 38.0439 29.8276 38.0439 29.2739C38.0439 28.6382 38.4849 27.9922 39.4385 27.5103C40.1255 27.1514 41.0381 26.9463 42.2275 26.9463C45.0781 26.9463 46.6777 28.2998 46.6777 30.7095V36.6567C46.6777 37.5796 46.2061 38.1025 45.3652 38.1025C44.6475 38.1025 44.1758 37.7026 44.0938 36.9951V36.6157H43.9604ZM48.708 35.8159C48.708 35.2109 49.1182 34.811 49.7334 34.811C50.082 34.811 50.3486 34.9546 50.8203 35.3237C51.6099 35.9492 52.3174 36.2363 53.2095 36.2363C54.3271 36.2363 55.0142 35.7646 55.0142 35.0059C55.0142 34.3804 54.5322 33.9189 53.5376 33.7036L51.8149 33.314C49.7949 32.873 48.8516 31.8887 48.8516 30.2788C48.8516 28.228 50.5742 26.8848 53.2607 26.8848C54.2964 26.8848 55.2808 27.1104 56.0601 27.5308C56.8394 27.9512 57.3008 28.5562 57.3008 29.1816C57.3008 29.7661 56.8906 30.125 56.2754 30.125C55.9575 30.125 55.6704 30.0225 55.168 29.6636C54.3887 29.0688 53.835 28.8638 53.1172 28.8638C52.0815 28.8638 51.4561 29.356 51.4561 30.1147C51.4561 30.7402 51.8765 31.1094 52.8096 31.3247L54.7681 31.7451C56.7061 32.1758 57.6187 33.1499 57.6187 34.77C57.6187 36.9131 55.9062 38.2358 53.0659 38.2358C51.8765 38.2358 50.7998 37.9897 49.9897 37.5591C49.1592 37.1182 48.708 36.5029 48.708 35.8159ZM61.9458 34.6675C61.9458 35.5698 62.6636 36.1953 63.7197 36.1953C64.8887 36.1953 65.8013 35.3955 65.8013 34.3701V33.2422H63.7095C62.6021 33.2422 61.9458 33.7754 61.9458 34.6675ZM65.7808 36.6157C65.2271 37.5898 64.1504 38.1436 62.8174 38.1436C60.6948 38.1436 59.2593 36.8105 59.2593 34.8315C59.2593 32.8218 60.7461 31.5811 63.2173 31.5811H65.8013V30.689C65.8013 29.5918 65.1143 29.0176 63.8735 29.0176C63.0532 29.0176 62.4688 29.3252 61.8638 29.8687C61.5562 30.1147 61.269 30.2275 60.8281 30.2275C60.2334 30.2275 59.8643 29.8276 59.8643 29.2739C59.8643 28.6382 60.3052 27.9922 61.2588 27.5103C61.9458 27.1514 62.8584 26.9463 64.0479 26.9463C66.8984 26.9463 68.498 28.2998 68.498 30.7095V36.6567C68.498 37.5796 68.0264 38.1025 67.1855 38.1025C66.4678 38.1025 65.9961 37.7026 65.9141 36.9951V36.6157H65.7808ZM73.7788 33.3037C73.7788 34.9136 74.7222 35.9902 76.1167 35.9902C77.5215 35.9902 78.3315 34.9136 78.3315 33.0576V32.104C78.3315 30.2275 77.5112 29.1099 76.0859 29.1099C74.6606 29.1099 73.7788 30.1968 73.7788 31.9399V33.3037ZM77.019 38.1436C75.5015 38.1436 74.312 37.4668 73.8608 36.3389H73.7275V36.79C73.7275 37.6309 73.2148 38.1025 72.4048 38.1025C71.5537 38.1025 71.0718 37.5796 71.0718 36.6157V24.6802C71.0718 23.7266 71.564 23.1934 72.4253 23.1934C73.2866 23.1934 73.7788 23.7266 73.7788 24.6802V28.8228H73.9121C74.2607 27.6948 75.522 26.9565 77.0703 26.9565C79.5723 26.9565 81.1104 28.7715 81.1104 31.7861V33.3037C81.1104 36.3286 79.562 38.1436 77.019 38.1436ZM87.9702 26.8848C90.9336 26.8848 92.9844 28.7612 92.9844 31.8887V33.1704C92.9844 36.4004 90.9336 38.2358 87.9702 38.2358C84.9966 38.2358 82.9458 36.4004 82.9458 33.1807V31.8989C82.9458 28.7612 84.9966 26.8848 87.9702 26.8848ZM87.9702 28.9868C86.5859 28.9868 85.7246 30.1147 85.7246 31.9502V33.1602C85.7246 35.0161 86.5859 36.1338 87.9702 36.1338C89.375 36.1338 90.2056 35.0161 90.2056 33.1602V31.9502C90.2056 30.1147 89.375 28.9868 87.9702 28.9868ZM101.926 36.1851C101.577 37.1899 100.521 38.1436 98.665 38.1436C96.5527 38.1436 95.0864 37.0156 95.0864 34.4932V28.4844C95.0864 27.5 95.5991 27.0181 96.4399 27.0181C97.2705 27.0181 97.7832 27.5 97.7832 28.4844V33.8062C97.7832 35.3237 98.6445 35.8979 99.7212 35.8979C101.116 35.8979 102.008 34.9648 102.008 33.6831V28.4844C102.008 27.5 102.521 27.0181 103.361 27.0181C104.192 27.0181 104.715 27.5 104.715 28.4844V36.667C104.715 37.6001 104.171 38.1025 103.382 38.1025C102.603 38.1025 102.1 37.6616 102.069 36.7695V36.1851H101.926ZM117.009 36.626C117.009 37.5796 116.527 38.1025 115.666 38.1025C114.794 38.1025 114.312 37.5693 114.312 36.6157V31.4478C114.312 30.0225 113.605 29.2227 112.354 29.2227C110.949 29.2227 110.067 30.2583 110.067 31.9502V36.6157C110.067 37.5693 109.575 38.1025 108.714 38.1025C107.853 38.1025 107.36 37.5693 107.36 36.6157V28.4639C107.36 27.5718 107.873 27.0181 108.693 27.0181C109.503 27.0181 109.975 27.5 110.006 28.3716V29.0381H110.139C110.56 27.7461 111.78 26.9463 113.379 26.9463C115.697 26.9463 117.009 28.3203 117.009 30.7095V36.626Z"
              fill="#8DE8FE"
            />
            <path
              d="M128.616 34.8069C129.336 34.8069 129.758 35.3515 129.758 35.9208C129.758 36.3168 129.634 36.7129 129.013 37.1584C128.219 37.7277 126.977 37.9752 126.009 37.9752C122.657 37.9752 120 35.7723 120 32.0347C120 28.396 122.731 26.0941 126.034 26.0941C127.101 26.0941 128.194 26.3416 128.988 26.8861C129.634 27.3317 129.783 27.7772 129.783 28.099C129.783 28.7178 129.311 29.3119 128.566 29.3119C128.318 29.3119 128.045 29.2376 127.623 28.9406C127.25 28.6683 126.704 28.4208 126.034 28.4208C123.973 28.4208 122.93 30.2772 122.93 32.0099C122.93 33.7673 123.923 35.5743 126.034 35.5743C126.654 35.5743 127.201 35.4257 127.697 35.104C128.07 34.9307 128.368 34.8069 128.616 34.8069ZM137.431 38C134.029 38 131.322 35.5495 131.322 32.0099C131.322 28.4703 134.054 26.1188 137.431 26.1188C140.832 26.1188 143.539 28.4703 143.539 32.0099C143.539 35.5248 140.832 38 137.431 38ZM137.431 28.396C135.196 28.396 134.178 30.2525 134.178 31.9851C134.178 33.7426 135.221 35.6238 137.431 35.6238C139.665 35.6238 140.683 33.7426 140.683 31.9851C140.683 30.2525 139.641 28.396 137.431 28.396ZM145.947 27.703C145.947 26.4406 146.866 26.2178 147.288 26.2178C147.71 26.2178 148.629 26.4158 148.629 27.703V28.2475H148.679C149.175 27.1337 150.516 26.1188 152.18 26.1188C155.11 26.1188 156.326 28.3713 156.326 30.6485V36.3168C156.326 37.6535 155.383 37.8762 154.911 37.8762C154.439 37.8762 153.496 37.6535 153.496 36.3168V31.4653C153.496 30.1287 153.198 28.4703 151.385 28.4703C149.597 28.4703 148.753 30.0049 148.753 31.5149V36.3416C148.753 37.6782 147.81 37.901 147.338 37.901C146.866 37.901 145.923 37.6782 145.923 36.3416V27.703H145.947ZM159.107 27.703C159.107 26.4406 160.026 26.2178 160.448 26.2178C160.87 26.2178 161.789 26.4158 161.789 27.703V28.2475H161.839C162.335 27.1337 163.676 26.1188 165.34 26.1188C168.27 26.1188 169.486 28.3713 169.486 30.6485V36.3168C169.486 37.6535 168.543 37.8762 168.071 37.8762C167.599 37.8762 166.656 37.6535 166.656 36.3168V31.4653C166.656 30.1287 166.358 28.4703 164.545 28.4703C162.757 28.4703 161.913 30.0049 161.913 31.5149V36.3416C161.913 37.6782 160.97 37.901 160.498 37.901C160.026 37.901 159.082 37.6782 159.082 36.3416V27.703H159.107ZM174.601 32.9505C174.725 34.5347 176.166 35.698 177.804 35.698C178.971 35.698 179.691 35.3267 180.387 34.7327C180.784 34.4109 181.032 34.3366 181.355 34.3366C181.976 34.3366 182.472 34.7822 182.472 35.4505C182.472 35.6733 182.373 36.0941 182.001 36.4653C180.908 37.505 179.642 37.9752 177.829 37.9752C174.353 37.9752 171.771 35.7475 171.771 32.1089C171.771 28.495 174.328 26.0941 177.73 26.0941C180.461 26.0941 182.646 27.6287 183.093 30.9208C183.118 31.1436 183.143 31.3168 183.143 31.5149C183.143 32.5049 182.597 32.9257 181.678 32.9257H174.601V32.9505ZM180.362 30.9208C180.362 29.4604 179.542 28.198 177.705 28.198C176.041 28.198 174.701 29.3366 174.576 30.9208H180.362ZM193.522 34.8069C194.242 34.8069 194.664 35.3515 194.664 35.9208C194.664 36.3168 194.54 36.7129 193.919 37.1584C193.124 37.7277 191.883 37.9752 190.915 37.9752C187.563 37.9752 184.906 35.7723 184.906 32.0347C184.906 28.396 187.637 26.0941 190.939 26.0941C192.007 26.0941 193.1 26.3416 193.894 26.8861C194.54 27.3317 194.689 27.7772 194.689 28.099C194.689 28.7178 194.217 29.3119 193.472 29.3119C193.224 29.3119 192.951 29.2376 192.529 28.9406C192.156 28.6683 191.61 28.4208 190.939 28.4208C188.879 28.4208 187.836 30.2772 187.836 32.0099C187.836 33.7673 188.829 35.5743 190.939 35.5743C191.56 35.5743 192.106 35.4257 192.603 35.104C192.975 34.9307 193.273 34.8069 193.522 34.8069ZM201.815 37.901C198.835 37.901 198.19 36.0693 198.19 33.9158V28.6683H197.271C196.203 28.6683 196.005 27.9257 196.005 27.5545C196.005 27.1832 196.203 26.4406 197.271 26.4406H198.19V24.5099C198.19 23.2228 199.108 23 199.58 23C200.052 23 200.971 23.2228 200.971 24.5099V26.4406H202.734C203.801 26.4406 204 27.1832 204 27.5545C204 27.9257 203.801 28.6683 202.734 28.6683H200.971V33.8911C200.971 34.9802 201.343 35.5743 202.038 35.5743C202.163 35.5743 202.312 35.5495 202.485 35.5248C202.684 35.5 202.709 35.5 202.808 35.5C203.503 35.5 203.876 36.0198 203.876 36.5396C203.876 36.9851 203.628 37.3564 203.205 37.5792C202.808 37.7772 202.336 37.901 201.815 37.901Z"
              fill="white"
            />
            <path
              d="M81.275 3.94674e-06C79.9253 -0.000916577 78.5887 0.264259 77.3416 0.780362C76.0945 1.29647 74.9614 2.05337 74.0071 3.00778C73.0528 3.96219 72.296 5.09538 71.78 6.34254C71.264 7.58969 70.999 8.92633 71 10.276C70.999 11.6256 71.264 12.9622 71.7799 14.2092C72.2958 15.4563 73.0525 16.5895 74.0067 17.5439C74.9609 18.4983 76.0939 19.2552 77.3409 19.7714C78.5879 20.2875 79.9244 20.5528 81.274 20.552C82.6239 20.5532 83.9608 20.2882 85.2082 19.7721C86.4556 19.2561 87.589 18.4991 88.5436 17.5446C89.4981 16.59 90.2551 15.4566 90.7711 14.2092C91.2872 12.9618 91.5522 11.6249 91.551 10.275C91.5519 8.92524 91.2867 7.58855 90.7705 6.34138C90.2544 5.09421 89.4974 3.96105 88.5429 3.00672C87.5884 2.05239 86.455 1.29562 85.2078 0.779693C83.9605 0.263769 82.6248 -0.00117944 81.275 3.94674e-06Z"
              fill="white"
            />
            <path
              d="M55.593 0H32.276C26.594 0 22 4.62 22 10.3C21.999 11.6498 22.264 12.9865 22.7801 14.2337C23.2961 15.4809 24.053 16.6142 25.0074 17.5686C25.9619 18.523 27.0951 19.2799 28.3423 19.7959C29.5895 20.312 30.9262 20.5771 32.276 20.576H55.593C56.9428 20.5772 58.2795 20.3122 59.5268 19.7963C60.774 19.2804 61.9074 18.5236 62.8619 17.5693C63.8164 16.615 64.5734 15.4818 65.0896 14.2346C65.6057 12.9875 65.8709 11.6508 65.87 10.301C65.87 4.619 61.275 0.0010004 55.594 0.0010004L55.593 0Z"
              fill="#8DE8FE"
            />
            <path
              d="M61.8679 13.637C62.3075 12.7579 62.5696 11.8009 62.6392 10.8205C62.7089 9.84018 62.5848 8.8557 62.274 7.92331C61.9632 6.99092 61.4718 6.12887 60.8279 5.38639C60.1839 4.64391 59.4 4.03553 58.5209 3.596C57.6419 3.15646 56.6848 2.89438 55.7045 2.82471C54.7241 2.75503 53.7397 2.87914 52.8073 3.18994C51.8749 3.50074 51.0128 3.99214 50.2703 4.63609C49.5279 5.28004 48.9195 6.06393 48.4799 6.943C47.5923 8.71836 47.4462 10.7736 48.0739 12.6567C48.7016 14.5397 50.0516 16.0963 51.8269 16.984C53.6023 17.8717 55.6576 18.0177 57.5406 17.3901C59.4237 16.7624 60.9803 15.4124 61.8679 13.637Z"
              fill="#0C131F"
            />
          </svg>
        </div>
        <div
          className=""
          onMouseEnter={() => setBlur(true)}
          onMouseLeave={() => setBlur(false)}
        >
          <NavBar />
        </div>
        <div></div>
      </header>
      <div className={blur ? show : hidden}></div>
      <SearchBar />
    </>
  );
}

function NavBar() {
  let accordionvalue = "item-1";
  if (typeof window !== "undefined")
    if (window.innerWidth < 768) {
      accordionvalue = "";
    }

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <div className="flex flex-row items-center space-x-1 ">
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" md:w-6 stroke-1 md:h-6 w-5 h-5"
              >
                <path
                  d="M44.3334 35C42.6823 35.0044 41.0861 35.5922 39.8263 36.6597C38.5668 37.7272 37.7251 39.2054 37.45 40.8333H17.85C15.9635 40.9026 14.1005 40.3982 12.5066 39.3867C11.8852 38.9557 11.3779 38.3798 11.0283 37.7092C10.6787 37.0386 10.4974 36.2929 10.5 35.5367C10.4336 34.6194 10.585 33.6996 10.9419 32.8522C11.2987 32.0047 11.8509 31.2536 12.5533 30.66C14.1079 29.5962 15.9686 29.0717 17.85 29.1667H37.3334C39.3202 29.1146 41.2363 28.4186 42.7934 27.1833C43.7199 26.3382 44.4444 25.2954 44.913 24.132C45.3815 22.9687 45.5822 21.7148 45.5 20.4634C45.5264 19.3629 45.2931 18.2718 44.8187 17.2785C44.3443 16.2852 43.6425 15.4178 42.77 14.7467C40.9498 13.4443 38.7539 12.7725 36.5167 12.8334H18.6666C18.3741 11.1027 17.4421 9.54514 16.0553 8.46926C14.6685 7.39341 12.9282 6.87776 11.1791 7.02453C9.43012 7.17132 7.80005 7.96981 6.61197 9.26175C5.4239 10.5537 4.76453 12.2448 4.76453 14C4.76453 15.7552 5.4239 17.4463 6.61197 18.7383C7.80005 20.0302 9.43012 20.8287 11.1791 20.9755C12.9282 21.1223 14.6685 20.6067 16.0553 19.5308C17.4421 18.4549 18.3741 16.8973 18.6666 15.1667H36.6334C38.3491 15.0953 40.0398 15.596 41.44 16.59C42.0346 17.0412 42.5122 17.6284 42.833 18.3023C43.1539 18.9763 43.3081 19.7174 43.2834 20.4634C43.3571 21.3697 43.2257 22.281 42.8984 23.1294C42.5712 23.9778 42.0567 24.7415 41.3934 25.3633C40.0603 26.3895 38.4069 26.9103 36.7267 26.8333H18.06C15.6506 26.7255 13.2751 27.4325 11.3166 28.84C10.2957 29.6242 9.47707 30.6413 8.92911 31.8061C8.38115 32.9712 8.11972 34.2501 8.16662 35.5367C8.14968 36.666 8.41374 37.7818 8.93508 38.7837C9.45644 39.7859 10.2187 40.6425 11.1533 41.2767C13.1375 42.5815 15.4763 43.2416 17.85 43.1667H37.45C37.6726 44.4834 38.2672 45.7091 39.1634 46.6989C40.0599 47.6887 41.2207 48.4015 42.5089 48.7529C43.7972 49.1045 45.1591 49.0803 46.4341 48.6831C47.709 48.286 48.8439 47.5323 49.7045 46.5113C50.565 45.4902 51.1157 44.2442 51.2914 42.9205C51.4668 41.5968 51.2601 40.2502 50.6954 39.0402C50.1308 37.8301 49.2317 36.8067 48.1045 36.0908C46.9773 35.375 45.6687 34.9965 44.3334 35ZM44.3334 46.6667C43.4103 46.6667 42.508 46.393 41.7406 45.8801C40.9731 45.3675 40.3751 44.6385 40.0218 43.7859C39.6686 42.9331 39.5762 41.9949 39.7563 41.0895C39.9364 40.1844 40.3809 39.3528 41.0336 38.7002C41.6862 38.0476 42.5176 37.6031 43.4229 37.4229C44.3282 37.243 45.2665 37.3354 46.1191 37.6885C46.9719 38.0417 47.7006 38.64 48.2135 39.4074C48.7263 40.1749 49 41.0769 49 42C49 43.2376 48.5084 44.4246 47.6332 45.2998C46.7579 46.175 45.571 46.6667 44.3334 46.6667Z"
                  fill="white"
                />
              </svg>
              <p>Voyager</p>
            </div>
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            <div className="flex w-[300px] md:w-[500px] flex-col p-1  ">
              <FirstListItem key="Voyages" title="Voyager" href="/">
                {"Tout pour voyager"}
              </FirstListItem>
              <div className="grid grid-cols-2">
                <Accordion
                  type="single"
                  collapsible
                  defaultValue={accordionvalue}
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Réserver</AccordionTrigger>
                    <AccordionContent>
                      <AllList list={voyage.reserve}></AllList>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion
                  type="single"
                  collapsible
                  defaultValue={accordionvalue}
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Bon Plans</AccordionTrigger>
                    <AccordionContent>
                      <AllList list={voyage.bonplans}></AllList>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion
                  type="single"
                  collapsible
                  defaultValue={accordionvalue}
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Informations</AccordionTrigger>
                    <AccordionContent>
                      <AllList list={voyage.information}></AllList>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion
                  type="single"
                  collapsible
                  defaultValue={accordionvalue}
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Guide de voyage</AccordionTrigger>
                    <AccordionContent>
                      <AllList list={voyage.guidevoyage}></AllList>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <div className="flex flex-row items-center space-x-1 ">
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" md:w-6 stroke-1 md:h-6 w-5 h-5"
              >
                <path d="M42 14H37.3334V18.6667H42V14Z" fill="white" />
                <path
                  d="M30.3334 7V25.6667H49V7H30.3334ZM46.6667 23.3333H32.6667V9.33333H46.6667V23.3333Z"
                  fill="white"
                />
                <path
                  d="M18.6667 37.3333H14V42H18.6667V37.3333Z"
                  fill="white"
                />
                <path
                  d="M7 49H25.6667V30.3333H7V49ZM9.33333 32.6666H23.3333V46.6666H9.33333V32.6666Z"
                  fill="white"
                />
                <path d="M42 37.3333H37.3334V42H42V37.3333Z" fill="white" />
                <path d="M11.6667 21H7V25.6667H11.6667V21Z" fill="white" />
                <path d="M25.6667 7H21V11.6667H25.6667V7Z" fill="white" />
                <path d="M18.6667 14H14V18.6667H18.6667V14Z" fill="white" />
                <path d="M11.6667 7H7V11.6667H11.6667V7Z" fill="white" />
                <path d="M25.6667 21H21V25.6667H25.6667V21Z" fill="white" />
                <path d="M35 30.3333H30.3334V35H35V30.3333Z" fill="white" />
                <path d="M49 30.3333H44.3334V35H49V30.3333Z" fill="white" />
                <path d="M35 44.3333H30.3334V49H35V44.3333Z" fill="white" />
              </svg>
              <p>Billets</p>
            </div>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex w-[300px] md:w-[550px] flex-col p-1  ">
              <FirstListItem key="Voyages" title="Voyages" href="/">
                {"Voir vos billets et titres"}
              </FirstListItem>
              <div className="grid grid-cols-2 md:grid-cols-3">
                <Accordion
                  type="single"
                  collapsible
                  defaultValue={accordionvalue}
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Vos Voyages</AccordionTrigger>
                    <AccordionContent>
                      <AllList list={billet.voyage}></AllList>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion
                  type="single"
                  collapsible
                  defaultValue={accordionvalue}
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      Vos cartes et abonnements
                    </AccordionTrigger>
                    <AccordionContent>
                      <AllList list={billet.carte}></AllList>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion
                  type="single"
                  collapsible
                  defaultValue={accordionvalue}
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Compléter votre voyage</AccordionTrigger>
                    <AccordionContent>
                      <AllList list={billet.completevoyage}></AllList>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <div className="flex flex-row items-center space-x-1 ">
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" md:w-6 stroke-1 md:h-6 w-5 h-5"
              >
                <path
                  d="M21 14.7934H12.7633C12.2682 14.8405 11.8094 15.074 11.48 15.4467C11.138 15.7957 10.9464 16.2648 10.9464 16.7534C10.9464 17.242 11.138 17.7111 11.48 18.0601C11.8232 18.4067 12.2776 18.6215 12.7633 18.6667H21C21.4974 18.6047 21.9586 18.3741 22.3067 18.0134C22.638 17.659 22.8223 17.1919 22.8223 16.7067C22.8223 16.2216 22.638 15.7545 22.3067 15.4001C21.9575 15.0484 21.494 14.8332 21 14.7934Z"
                  fill="white"
                />
                <path
                  d="M21 22.61H12.7633C12.2578 22.6751 11.7974 22.9346 11.48 23.3333C11.138 23.6824 10.9464 24.1514 10.9464 24.64C10.9464 25.1286 11.138 25.5978 11.48 25.9466C11.8094 26.3195 12.2682 26.5531 12.7633 26.6H21C21.5003 26.5477 21.9646 26.3155 22.3067 25.9466C22.6256 25.5805 22.7934 25.1069 22.7761 24.6215C22.7588 24.1364 22.5576 23.6758 22.2133 23.3333C21.9058 22.9579 21.4765 22.702 21 22.61Z"
                  fill="white"
                />
                <path
                  d="M12.7633 30.3334C12.3627 30.3315 11.9714 30.4538 11.6433 30.6834C11.3056 30.8873 11.0372 31.1881 10.8733 31.5467C10.7183 31.907 10.6778 32.306 10.7571 32.6898C10.8364 33.0739 11.0317 33.4241 11.3166 33.6934C11.618 33.9904 12.002 34.1892 12.4183 34.2641C12.8347 34.3392 13.264 34.2865 13.6499 34.1134C14.0225 33.9752 14.3413 33.7218 14.5599 33.39C14.7889 33.0792 14.9116 32.7029 14.9099 32.3167C14.9117 32.054 14.8586 31.7938 14.7542 31.5528C14.6497 31.3117 14.4961 31.0952 14.3033 30.9167C14.1016 30.7174 13.8603 30.5625 13.5951 30.4619C13.3298 30.3614 13.0465 30.3177 12.7633 30.3334Z"
                  fill="white"
                />
                <path
                  d="M20.9999 30.3333H18.8766C18.5995 30.2762 18.3137 30.2762 18.0366 30.3333C17.7673 30.4232 17.515 30.5571 17.2899 30.73C17.081 30.9188 16.914 31.1493 16.7999 31.4067C16.6808 31.6545 16.6171 31.9251 16.6133 32.2C16.6139 32.4753 16.6778 32.7467 16.7999 32.9933C16.914 33.2509 17.081 33.4815 17.2899 33.67C17.5032 33.8606 17.7594 33.9967 18.0366 34.0667C18.3137 34.1241 18.5995 34.1241 18.8766 34.0667H20.9999C21.5003 34.0144 21.9646 33.7822 22.3066 33.4133C22.638 33.0589 22.8223 32.592 22.8223 32.1067C22.8223 31.6216 22.638 31.1544 22.3066 30.8C21.933 30.5072 21.4745 30.3434 20.9999 30.3333Z"
                  fill="white"
                />
                <path
                  d="M43.3534 30.3333H35.21C34.7126 30.3954 34.2515 30.6261 33.9034 30.9866C33.572 31.3411 33.3877 31.8082 33.3877 32.2933C33.3877 32.7786 33.572 33.2455 33.9034 33.6C34.2454 33.9689 34.7098 34.201 35.21 34.2533H43.3534C43.8485 34.2064 44.3072 33.9728 44.6367 33.6C44.9788 33.2511 45.1703 32.7819 45.1703 32.2933C45.1703 31.8047 44.9788 31.3357 44.6367 30.9866C44.3005 30.6229 43.8455 30.3912 43.3534 30.3333Z"
                  fill="white"
                />
                <path
                  d="M35.21 18.6668C35.6144 18.669 36.011 18.5557 36.3533 18.3401C36.7061 18.1503 36.9906 17.8546 37.1665 17.4946C37.3422 17.1345 37.4008 16.7284 37.3333 16.3334C37.2472 15.9464 37.0482 15.5935 36.7617 15.3195C36.4751 15.0454 36.1139 14.8623 35.7233 14.7934C35.3351 14.6773 34.9216 14.6773 34.5333 14.7934C34.1607 14.9315 33.842 15.1849 33.6233 15.5168C33.393 15.8346 33.2778 16.2214 33.2967 16.6134C33.2964 16.8703 33.348 17.1246 33.4483 17.3611C33.5484 17.5976 33.6954 17.8115 33.88 17.9901C34.22 18.3782 34.6962 18.6206 35.21 18.6668Z"
                  fill="white"
                />
                <path
                  d="M35.21 22.61C34.7098 22.6624 34.2454 22.8945 33.9034 23.2634C33.572 23.6177 33.3877 24.0849 33.3877 24.57C33.3877 25.0553 33.572 25.5222 33.9034 25.8766C34.2454 26.2455 34.7098 26.4777 35.21 26.53H37.3334C37.8336 26.4777 38.298 26.2455 38.64 25.8766C38.9714 25.5222 39.1557 25.0553 39.1557 24.57C39.1557 24.0849 38.9714 23.6177 38.64 23.2634C38.298 22.8945 37.8336 22.6624 37.3334 22.61H35.21Z"
                  fill="white"
                />
                <path
                  d="M39.6667 18.2234C39.8741 18.4085 40.1107 18.5582 40.3667 18.6667C40.6437 18.7253 40.9297 18.7253 41.2067 18.6667H43.2367C43.7288 18.609 44.1838 18.3773 44.52 18.0134C44.8621 17.6645 45.0537 17.1954 45.0537 16.7067C45.0537 16.2181 44.8621 15.749 44.52 15.4001C44.1906 15.0273 43.7318 14.7938 43.2367 14.7467H41.2067C40.9297 14.6882 40.6437 14.6882 40.3667 14.7467C40.0895 14.8168 39.8333 14.9529 39.62 15.1434C39.411 15.3321 39.2441 15.5626 39.13 15.8201C39.0078 16.0667 38.9441 16.3382 38.9434 16.6134C38.9471 16.8883 39.0108 17.159 39.13 17.4067C39.239 17.719 39.4233 17.9996 39.6667 18.2234Z"
                  fill="white"
                />
                <path
                  d="M43.2367 22.6101C42.8324 22.6079 42.4357 22.7212 42.0934 22.9367C41.749 23.1431 41.4795 23.4535 41.3234 23.8233C41.1568 24.1806 41.1157 24.5833 41.2067 24.9667C41.2802 25.3528 41.4767 25.7049 41.7667 25.97C42.0542 26.2514 42.4205 26.4385 42.8167 26.5067C43.205 26.6229 43.6185 26.6229 44.0067 26.5067C44.392 26.331 44.7109 26.0367 44.9167 25.6667C45.1263 25.3391 45.2394 24.959 45.2434 24.57C45.2462 24.3129 45.196 24.0576 45.0957 23.8208C44.9951 23.5839 44.847 23.3702 44.6601 23.1934C44.4729 23.0074 44.2508 22.86 44.0065 22.7599C43.7622 22.6598 43.5006 22.6089 43.2367 22.6101Z"
                  fill="white"
                />
                <path
                  d="M49.9566 8.33008C49.0779 7.47081 47.8956 6.99289 46.6666 7.00008H36.4C34.6698 6.99782 32.9702 7.45692 31.4766 8.33008C30.0094 9.19577 28.8071 10.4465 28 11.9467C27.1929 10.4465 25.9905 9.19577 24.5233 8.33008C23.0296 7.45692 21.3301 6.99782 19.6 7.00008H9.3333C8.10428 6.99289 6.92203 7.47081 6.0433 8.33008C5.60787 8.74082 5.26112 9.2363 5.02435 9.78606C4.78761 10.3358 4.66586 10.9282 4.66663 11.5267V39.6667C4.66992 40.2647 4.79349 40.8557 5.03 41.405C5.26651 41.9543 5.61112 42.4501 6.0433 42.8633C6.94805 43.6676 8.12297 44.1009 9.3333 44.0767H17.78C19.7753 44.0909 21.7166 44.7272 23.3333 45.8967L24.85 46.9933L26.2266 48.3233C26.4527 48.5364 26.7131 48.71 26.9966 48.8367C27.5837 49.0548 28.2296 49.0548 28.8166 48.8367C29.1001 48.71 29.3605 48.5364 29.5866 48.3233L30.9633 46.9933L32.5033 45.8967C34.1457 44.7085 36.1228 44.0713 38.15 44.0767H46.6666C47.8977 44.0816 49.0835 43.614 49.98 42.77C50.8218 41.954 51.3079 40.8389 51.3333 39.6667V11.6667C51.3536 11.0447 51.2414 10.4256 51.0041 9.85027C50.7668 9.27499 50.4098 8.75678 49.9566 8.33008ZM26.6233 45.4067L24.78 44.0767C22.7491 42.584 20.3003 41.7678 17.78 41.7433H9.3333C8.71641 41.7531 8.12076 41.5184 7.67663 41.09C7.28253 40.716 7.0414 40.2087 6.99996 39.6667V11.6667C6.99649 11.3664 7.05475 11.0685 7.17114 10.7915C7.28755 10.5145 7.45961 10.2645 7.67663 10.0567C7.89078 9.83205 8.14761 9.65233 8.43207 9.52813C8.71655 9.40393 9.02294 9.33773 9.3333 9.33341H19.6C21.4592 9.31918 23.2506 10.0307 24.5933 11.3167C25.2471 11.9305 25.7686 12.6714 26.1256 13.4939C26.4828 14.3165 26.6681 15.2034 26.67 16.1001L26.6233 45.4067ZM49 39.6667C49.0002 39.9632 48.9405 40.2568 48.8243 40.5293C48.7078 40.8021 48.5375 41.0485 48.3233 41.2533C47.8793 41.6817 47.2836 41.9165 46.6666 41.9067H38.2666C35.7464 41.9312 33.2976 42.7474 31.2666 44.24L29.4 45.57V16.0301C29.4177 15.1531 29.6104 14.2885 29.967 13.487C30.3237 12.6856 30.8368 11.9636 31.4766 11.3634C32.7945 10.0772 34.5585 9.34984 36.4 9.33341H46.6666C47.2836 9.32361 47.8793 9.55853 48.3233 9.98675C48.5403 10.1945 48.7125 10.4445 48.8287 10.7215C48.9451 10.9985 49.0035 11.2964 49 11.5967V39.6667Z"
                  fill="white"
                />
              </svg>
              <p>Offres</p>
            </div>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex w-[300px] md:w-[400px] flex-col p-1  ">
              <FirstListItem key="Offres" title="Offres" href="/">
                {"Parcourir toutes les offres"}
              </FirstListItem>
              <Accordion
                type="single"
                collapsible
                defaultValue={accordionvalue}
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>Reservation</AccordionTrigger>
                  <AccordionContent>
                    <AllList list={voyage.reserve}></AllList>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <div className="flex flex-row items-center space-x-1 ">
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" md:w-6 stroke-1 md:h-6 w-5 h-5"
              >
                <path
                  d="M33.2517 23.5638C34.8407 22.5167 36.0799 21.0093 36.8067 19.2388C37.5338 17.4684 37.7146 15.5174 37.3259 13.6413C36.9778 11.7517 36.0713 10.0129 34.7261 8.65379C33.3809 7.29465 31.6601 6.37886 29.7899 6.02695C27.9326 5.64253 26.0036 5.83328 24.2555 6.57423C23.0147 7.08841 21.8945 7.85992 20.9674 8.83894C20.0402 9.81794 19.3267 10.9826 18.8729 12.2577C18.4192 13.5328 18.2353 14.8899 18.3332 16.2413C18.4311 17.5927 18.8085 18.9083 19.4412 20.103C20.0738 21.2978 20.9475 22.3451 22.0059 23.1773C23.0643 24.0095 24.2837 24.608 25.5853 24.9342C26.887 25.2604 28.2418 25.3068 29.5624 25.0709C30.8831 24.8348 32.1398 24.3215 33.2517 23.5638ZM31.9564 9.4534C33.1457 10.2578 34.0718 11.4006 34.6176 12.7371C35.2749 14.351 35.3367 16.1498 34.7917 17.8059C34.2466 19.4619 33.1308 20.865 31.6477 21.7597C30.1647 22.6544 28.413 22.9811 26.7116 22.6803C25.0101 22.3795 23.472 21.4713 22.3778 20.121C21.2835 18.7707 20.7055 17.0682 20.7493 15.3235C20.7931 13.5788 21.4556 11.9081 22.6162 10.6155C23.7769 9.32299 25.3582 8.49464 27.0728 8.28132C28.7871 8.06803 30.5203 8.48397 31.9564 9.4534Z"
                  fill="white"
                />
                <path
                  d="M17.2609 35.2709C19.3689 33.1028 22.0691 31.619 25.0162 31.0098C27.9632 30.4003 31.0231 30.6931 33.8047 31.8505C36.5862 33.0078 38.9627 34.9771 40.6304 37.5067C42.2982 40.036 43.1812 43.0108 43.1665 46.05V48.9769C43.1604 49.2905 43.0344 49.5896 42.8151 49.8113C42.5955 50.0332 42.2994 50.1606 41.9891 50.1667C41.6785 50.1606 41.3826 50.0332 41.1631 49.8113C40.9435 49.5896 40.8175 49.2905 40.8114 48.9769V46.05C40.8114 42.6169 39.4616 39.3246 37.059 36.897C34.6566 34.4694 31.3978 33.1056 28 33.1056C24.6022 33.1056 21.3435 34.4694 18.9409 36.897C16.5383 39.3246 15.1885 42.6169 15.1885 46.05V48.9769C15.1825 49.2905 15.0565 49.5896 14.8369 49.8113C14.6174 50.0332 14.3214 50.1606 14.011 50.1667C13.8565 50.1685 13.7034 50.1377 13.5615 50.0761C13.4195 50.0148 13.2918 49.924 13.1867 49.8097C13.0736 49.7035 12.9837 49.5745 12.9229 49.431C12.862 49.2877 12.8316 49.1328 12.8335 48.9769V46.05C12.8366 42.0061 14.4292 38.129 17.2609 35.2709Z"
                  fill="white"
                />
              </svg>
              <p>Compte</p>
            </div>
          </NavigationMenuTrigger>{" "}
          <NavigationMenuContent>
            <div className="flex w-[300px] md:w-[550px] flex-col p-1  ">
              <FirstListItem key="Voyages" title="Compte" href="/">
                {"Accéder à votre compte"}
              </FirstListItem>
              <div className="grid grid-cols-2 md:grid-cols-3">
                <Accordion
                  type="single"
                  collapsible
                  defaultValue={accordionvalue}
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Reservation</AccordionTrigger>
                    <AccordionContent>
                      <AllList list={billet.carte}></AllList>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion
                  type="single"
                  collapsible
                  defaultValue={accordionvalue}
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Bon Plans</AccordionTrigger>
                    <AccordionContent>
                      <AllList list={billet.completevoyage}></AllList>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion
                  type="single"
                  collapsible
                  defaultValue={accordionvalue}
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger>information</AccordionTrigger>
                    <AccordionContent>
                      <AllList list={billet.voyage}></AllList>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion
                  type="single"
                  collapsible
                  defaultValue={accordionvalue}
                ></Accordion>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const FirstListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <div>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md mx-6 py-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-lg font-medium leading-none">{title}</div>

          <div className="flex flex-row text-[#8DE8FE] space-x-2 items-center">
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
            <ChevronRightCircle size={16} />
          </div>
        </a>
      </NavigationMenuLink>
    </div>
  );
});
FirstListItem.displayName = "FirstListItem";

const AllList = ({ list }: { list: ArrayItemList }) => {
  return (
    <ul className="flex space-y-3 flex-col mb-4">
      {list.map((elem, index) => (
        <li key={elem.title + index}>
          <NavigationMenuLink asChild>
            <a
              href={elem.href}
              className=" block select-none rounded-md mx-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
            >
              <p className="hover:text-[#8DE8FE] line-clamp-2 text-sm leading-snug text-muted-foreground text-[#9da0a5]">
                {elem.title}
              </p>
            </a>
          </NavigationMenuLink>
        </li>
      ))}
    </ul>
  );
};
AllList.displayName = "AllList";
