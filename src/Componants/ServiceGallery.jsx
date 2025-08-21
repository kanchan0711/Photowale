import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useImages } from "../context/ImageContext";
import Banner from "./Banner";
import GalleryImages from "./Gallery/GalleryImages";

export default function ServiceGallery() {
  const { serviceId } = useParams();
  const { services } = useImages();
  const navigate = useNavigate();

  // Find the service based on the route param
  const service = services?.find((s) => s.id === serviceId);
  console.log(service)

  if (!service) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold">Gallery Not Found</h2>
        <button
          onClick={() => navigate("/")}
          className="mt-5 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <>
    <Banner img={service?.coverImg} title={service?.title}/>
    <GalleryImages images={service?.photos} title={"Gallery"}/>
    </>
  );
}
