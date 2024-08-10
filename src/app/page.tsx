"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from 'next/image'

function Page() {
  const [IsCountryValid, setIsCountryValid] = useState<string | null>(null);

  const router = useRouter();
    const RouteToCountry = (CountryName: string) => {
      router.push(`/${CountryName}`);
    };

  const FetchCountries = async () => {
    await fetch(`http://ip-api.com/json`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        RouteToCountry(data.countryCode);
      });
  };
  useEffect(() => {
    FetchCountries();
  }, []);
  
  return (
    <div>Loading...</div>
  )

}

export default Page;
