'use client'
import { useEffect,useState } from "react";
import {getContract, defineChain} from "thirdweb";
import {client} from "../client";
import { bingABI } from "../../../contracts/artifact/BING";
import NftProfileCardGeneric from "../../components/NFTCardGenerator";
import Navbar from "./../../components/Navbar";
import Sidebar from "./../../components/Sidebar";

export default function gallery(){
  return(
  <div className=" bg-gray-100 overflow-hidden">
    <div className="flex">
        <Sidebar/>
        <main className="flex-1 flex flex-col">
          <div>
            <Navbar/>
          </div>
          <div className="px-4 mt-6">
            <h1 className=" text-indigo-800 text-2xl text-center 
            font-bold my-2 mb-2 leading-relaxed
            ">
              Browse our awesome gallery of cards!</h1>
          </div>
        </main>
    </div>
  </div>
  )
}