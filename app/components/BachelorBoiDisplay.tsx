import React from "react";
import { BachelorBoi } from "~/utils/types";

export const BachelorBoiDisplay = ({
  boi: { imagePath, name, status, nickname, currentLocation, interests, about },
}: {
  boi: BachelorBoi;
}) => {
  return (
    <div>
      <div className="flex items-center space-x-4">
        <img src={imagePath} alt={name} className="w-24 h-24 rounded-full" />
        <div>
          <h3 className="text-xl font-bold">{name}</h3>
          <p>
            <strong>Nickname:</strong> {nickname}
          </p>
          <p>
            <strong>Status:</strong> {status}
          </p>
          <p>
            <strong>Current Location:</strong> {currentLocation}
          </p>
        </div>
      </div>
      <ul className="list-disc list-inside mt-4">
        {interests.map((interest: string, index: number) => (
          <li key={index}>{interest}</li>
        ))}
      </ul>
      <p className="mt-4">{about}</p>
    </div>
  );
};
