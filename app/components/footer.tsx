"use client";

import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="w-11/12 mx-auto my-10">
            <div className="w-full flex flex-col border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                <div className="bg-Blue border-b rounded-t-3xl py-3 px-4 md:py-4 md:px-5 dark:bg-neutral-900 dark:border-neutral-700">
                    <div className="grid grid-cols-2">
                        <div className="col-span-1 m-10">
                            <p className="font-semibold uppercase text-3xl w-[20rem] text-white dark:text-neutral-500">
                                Join our KicksPlus Club & get 15% off
                            </p>
                            <p className="text-white text-sm my-5">
                                Sign up for free! Join the community.
                            </p>
                            <form action="" className="flex gap-4">
                                <input type="email" className="text-white py-3 px-4 block w-full bg-transparent border border-white rounded-lg text-sm focus-within:outline-none disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Email address"></input>
                                <button type="submit" className="uppercase py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:text-neutral-800">
                                    Submit
                                </button>
                            </form>
                        </div>
                        <div className="col-span-1 flex justify-center items-center">
                            <Image
                                className="max-w-full rounded-b-lg object-cover"
                                src="/images/Logo2.svg"
                                alt="Browser Placeholder"
                                width={370}
                                height={115}
                            />
                        </div>
                    </div>
                </div>
                <div className="p-4 md:p-5 bg-Dark-Gray rounded-3xl -translate-y-10">
                    <div className="grid grid-cols-5 gap-4">
                        {/* About Us */}
                        <div className="col-span-2 w-max">
                            <h1 className="text-Yellow font-bold text-2xl my-5">About us</h1>
                            <p className="text-white font-xs">We are the biggest hyperstore in the universe.</p>
                            <p className="text-white font-xs">We got you all cover with our exclusive</p>
                            <p className="text-white font-xs">collections and latest drops.</p>
                        </div>
                        {/* Categories */}
                        <div className="col-span-1">
                            <h1 className="text-Yellow font-bold text-2xl my-5">Categories</h1>
                            <ul className="text-white">
                                <li>
                                    <a href="">
                                        Runners
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        Sneakers
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        Basketball
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        Outdoor
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        Golf
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        Hiking
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* Company */}
                        <div className="col-span-1">
                            <h1 className="text-Yellow font-bold text-2xl my-5">Company</h1>
                            <ul className="text-white">
                                <li>
                                    <a href="">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        Contact
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        Blogs
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* Follow Us */}
                        <div className="col-span-1">
                            <h1 className="text-Yellow font-bold text-2xl my-5">Follow us</h1>
                            <ul className="text-white flex justify-between w-40">
                                <li>
                                    <a href="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path></svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path></svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"></path></svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M224,72a48.05,48.05,0,0,1-48-48,8,8,0,0,0-8-8H128a8,8,0,0,0-8,8V156a20,20,0,1,1-28.57-18.08A8,8,0,0,0,96,130.69V88a8,8,0,0,0-9.4-7.88C50.91,86.48,24,119.1,24,156a76,76,0,0,0,152,0V116.29A103.25,103.25,0,0,0,224,128a8,8,0,0,0,8-8V80A8,8,0,0,0,224,72Zm-8,39.64a87.19,87.19,0,0,1-43.33-16.15A8,8,0,0,0,160,102v54a60,60,0,0,1-120,0c0-25.9,16.64-49.13,40-57.6v27.67A36,36,0,1,0,136,156V32h24.5A64.14,64.14,0,0,0,216,87.5Z"></path></svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-5 w-full">
                            <Image
                                className="rounded-b-lg object-cover"
                                src="/images/Logo3.svg"
                                alt="Browser Placeholder"
                                width={1260}
                                height={310}
                            />
                        </div>
                    </div>
                </div>
                <span className="text-center">© All rights reserved | Mockups by Visiata Systems International</span>
            </div>
        </footer>
    )
}

export default Footer