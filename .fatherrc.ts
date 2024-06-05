/*
 * @Author: Viccsen
 * @Date: 2023-06-02 16:02:03
 * @LastEditTime: 2023-06-08 17:47:39
 * @LastEditors: Viccsen
 * @Description:
 */
import { defineConfig } from "father";

export default defineConfig({
  umd: {
    name: "SyncMicroApp",
  },
  cjs: { output: "dist" },
  platform: "browser",
});
