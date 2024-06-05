/*
 * @Author: Viccsen
 * @Date: 2023-06-02 17:17:38
 * @LastEditTime: 2023-06-02 17:17:56
 * @LastEditors: Viccsen
 * @Description: 
 */
export function GenUniID(randomLength) {
  return Number(
    Math.random().toString().substr(2, randomLength) + Date.now()
  ).toString(36);
}
