import React, { useEffect, useRef } from "react";
import { useGeolocated } from "react-geolocated";
import { trackVisitor } from "../utils/visitorTracker";

const VisitorTracker = () => {
  const hasTracked = useRef(false); // Flag to prevent duplicate tracking

  const {
    coords,
    timestamp,
    isGeolocationAvailable,
    isGeolocationEnabled,
    positionError,
    getPosition,
  } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: true,
      maximumAge: 300000, // 5 minutes cache
      timeout: 10000, // 10 second timeout
    },
    userDecisionTimeout: 8000, // 8 seconds for user decision
    suppressLocationOnMount: false,
    watchPosition: false,
    isOptimisticGeolocationEnabled: true,
    onError: (error) => {
      //   console.log("Geolocation error:", error);
      // Don't track here anymore - let useEffect handle it
    },
    onSuccess: (position) => {
      //   console.log("Geolocation success:", position);
    },
  });

  useEffect(() => {
    // Prevent duplicate tracking
    if (hasTracked.current) return;

    const shouldTrack = () => {
      // Track if we have successful geolocation
      if (isGeolocationAvailable && isGeolocationEnabled && coords) {
        return true;
      }

      // Track if geolocation is determined to be unavailable/disabled
      if (
        isGeolocationAvailable !== undefined &&
        (!isGeolocationAvailable || !isGeolocationEnabled)
      ) {
        return true;
      }

      // Track if there's a position error
      if (positionError) {
        return true;
      }

      return false;
    };

    if (shouldTrack()) {
      hasTracked.current = true; // Set flag immediately to prevent duplicates

      const geoData = {
        coords,
        timestamp,
        isGeolocationAvailable,
        isGeolocationEnabled,
        positionError,
      };

      trackVisitor(geoData);
    }
  }, [
    coords,
    isGeolocationAvailable,
    isGeolocationEnabled,
    positionError,
    timestamp,
  ]);

  // Fallback: If geolocation takes too long, track visitor anyway
  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      if (!hasTracked.current && isGeolocationAvailable === undefined) {
        hasTracked.current = true; // Set flag immediately
        // console.log("Geolocation timeout, tracking visitor without location");
        trackVisitor(null);
      }
    }, 12000); // 12 second total fallback

    return () => clearTimeout(fallbackTimer);
  }, []); // Remove dependencies to prevent multiple timers

  // This component doesn't render anything visible
  return null;
};

export default VisitorTracker;
