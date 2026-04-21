import { withNextVideo } from "next-video/process";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // allowedDevOrigins: ['1d1f-102-216-203-229.ngrok-free.app'],
};

export default withNextVideo(nextConfig);