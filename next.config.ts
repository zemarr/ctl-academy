import { withNextVideo } from "next-video/process";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // allowedDevOrigins: ['ddae-102-216-203-227.ngrok-free.app'],
};

export default withNextVideo(nextConfig);